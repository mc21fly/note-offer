import createList from "../utils/createList.js";
import compressHTML from "../utils/compressHTML.js";
import Notification from "../utils/Notification.js";

export default class AppView {
    constructor() {
        this.iframe = document.querySelector("#preview");
        this.profiles = document.querySelector("#profiles");
        this.selected_profile = document.querySelector("#selected-profile");
        this.selected_template = document.querySelector("#selected-template");
        this.toasts = document.querySelector("#toasts");
        this.copy_button = document.querySelector("#copy");
        this.dropdown = document.querySelector(".dropdown");
        this.list_wrapper = document.querySelector(".list-wrapper");

        this.scroll_value = 0;
        this.srcdoc;

        this.onChangeProfile;
        this.onChangeTemplate;
        this.onToggleShowTraining;
        this.onSetShowTrainings;
        this.onReloadProfiles;
        this.onReloadTemplates;
        this.onReloadTrainings;

        this.initializeListeners();
    }

    initializeListeners() {
        const button = this.dropdown.querySelector(".button");

        this.iframe.addEventListener("load", () => {
            this.iframe.classList.add("show");
            this.iframe.contentWindow.scrollTo(0, this.scroll_value);
        });

        this.copy_button.addEventListener("click", () => {
            const compressed = compressHTML(this.srcdoc).trim();

            if (compressed) {
                navigator.clipboard.writeText(compressed);
                this.notify(new Notification("ok", "Skopiowano do schowka", `Szablon <b>${this.selected_template.innerText}</b> skopiowany do schowka`));
                return;
            }

            this.notify(new Notification("error", `Wybierz szablon`, `Wybierz szablon z listy aby móc go skopiować do schowka`));
        });

        button.addEventListener("click", () => {
            this.dropdown.classList.toggle("show");
        });
    }

    displayProfiles(profiles) {
        this.profiles.innerHTML = "";

        if (profiles.length > 0) {
            this.selected_profile.classList.remove("error-icon");
            this.selected_profile.classList.add("profile-icon");

            profiles.forEach((profile) => {
                const li = document.createElement("li");
                li.classList.add("dropdown-item");
                li.innerText = profile.name;

                li.addEventListener("click", () => {
                    const index = [...this.profiles.childNodes].findIndex((item) => item === li);

                    this.dropdown.classList.remove("show");
                    this.onChangeProfile(index);
                });

                this.profiles.appendChild(li);
            });
        } else {
            this.selected_profile.classList.remove("profile-icon");
            this.selected_profile.classList.add("error-icon");

            const li = document.createElement("li");
            li.classList.add("dropdown-item");
            li.innerText = "Brak dostępnych profili";
            this.profiles.appendChild(li);
        }

        const li_hr = document.createElement("li");
        li_hr.classList.add("dropdown-divider");
        this.profiles.appendChild(li_hr);

        const li_refresh = document.createElement("li");
        li_refresh.classList.add("dropdown-item");
        li_refresh.classList.add("refresh-icon");
        li_refresh.innerText = "Odśwież listę";

        li_refresh.addEventListener("click", () => {
            this.onReloadProfiles();
        });

        this.profiles.appendChild(li_refresh);
    }

    displayTrainings(trainings) {
        const onReload = () => {
            this.onReloadTrainings();
        };

        const list_items = trainings.map((training) => {
            return {
                title: training.title,
                type: "checkbox",
                value_type: "boolean",
                default_value: true,
                value: training.use,
                onToggle: (_, index) => {
                    this.onToggleShowTraining(index);
                },
            };
        });

        const trainings_list = createList("Szkolenia", list_items, onReload, [
            {
                title: "Odznacz wszystkie",
                handler: () => {
                    this.onSetShowTrainings(false);
                },
            },
            {
                title: "Zaznacz wszystkie",
                handler: () => {
                    this.onSetShowTrainings(true);
                },
            },
        ]);

        if (this.trainings_list) {
            this.list_wrapper.replaceChild(trainings_list, this.trainings_list);
        } else {
            this.list_wrapper.appendChild(trainings_list);
        }

        this.trainings_list = trainings_list;
    }

    displayTemplates(templates) {
        const onReload = () => {
            this.onReloadTemplates();
        };

        const list_items = templates.map((template) => {
            return {
                title: template.title,
                type: "single-select",
                value_type: "boolean",
                default_value: 0,
                onClick: (_, index) => {
                    this.onChangeTemplate(index);
                },
            };
        });

        const templates_list = createList("Szablony", list_items, onReload);

        if (this.templates_list) {
            this.list_wrapper.replaceChild(templates_list, this.templates_list);
        } else {
            this.templates_list = templates_list;
            this.list_wrapper.appendChild(templates_list);
        }
    }

    displaySelectedProfile(selected_profile) {
        const { name } = selected_profile;

        this.selected_profile.innerText = "Wybierz profil";

        if (name) this.selected_profile.innerText = name;
    }

    displaySelectedTemplate(selected_template) {
        const { title } = selected_template;

        this.selected_template.innerText = "Wybierz szablon";

        if (title) this.selected_template.innerText = title;
    }

    displayPreview(model) {
        const { selected_template, selected_profile } = model;
        this.displaySelectedProfile(selected_profile);
        this.displaySelectedTemplate(selected_template);

        this.scroll_value = this.iframe.contentWindow.scrollY;
        this.srcdoc = "";
        this.iframe.srcdoc = "";
        if (selected_template.isNotEmpty()) {
            const rendered = selected_template.render();
            this.srcdoc = rendered;

            this.iframe.contentDocument.open();
            this.iframe.contentDocument.write(rendered);
            this.iframe.contentDocument.close();
        }
    }

    notify(notification) {
        const { type, header, description } = notification;

        const toast = document.createElement("div");
        const toast_wrapper = document.createElement("div");
        const toast_header = document.createElement("div");
        const toast_description = document.createElement("div");

        toast.classList.add("toast");
        toast.classList.add(`${type}-icon`);
        toast_wrapper.classList.add("toast_wrapper");
        toast_header.classList.add("toast_header");
        toast_description.classList.add("toast_description");

        toast_header.innerText = `${header}`;
        toast_description.innerHTML = `${description}`;

        toast_wrapper.appendChild(toast_header);
        if (description) toast_wrapper.appendChild(toast_description);

        toast.appendChild(toast_wrapper);

        const close_toast_timeout = setTimeout(() => {
            this.toasts.removeChild(toast);
        }, 1000 * 6);

        toast.addEventListener("click", () => {
            clearTimeout(close_toast_timeout);
            this.toasts.removeChild(toast);
        });

        this.toasts.appendChild(toast);
    }

    bindChangeProfile(handler) {
        this.onChangeProfile = handler;
    }

    bindChangeTemplate(handler) {
        this.onChangeTemplate = handler;
    }

    bindToggleShowTraining(handler) {
        this.onToggleShowTraining = handler;
    }

    bindSetShowTrainings(handler) {
        this.onSetShowTrainings = handler;
    }

    bindReloadProfiles(handler) {
        this.onReloadProfiles = handler;
    }

    bindReloadTemplates(handler) {
        this.onReloadTemplates = handler;
    }

    bindReloadTrainings(handler) {
        this.onReloadTrainings = handler;
    }
}
