import createList from "../utils/createList.js";

export default class TemplatesView {
    constructor() {
        this.selected_template = document.querySelector("#selected-template");
        this.list_wrapper = document.querySelector(".list-wrapper");

        this.handleLoadTemplates;
        this.handleSelectTemplate;
    }

    displayTemplates(templates) {
        const onReload = () => {
            this.handleLoadTemplates();
        };

        const list_items = templates.map((template) => {
            return {
                title: template.title,
                type: "single-select",
                value_type: "boolean",
                default_value: 0,
                onClick: () => {
                    this.handleSelectTemplate(template.id);
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

    displaySelectedTemplate(selected_template) {
        const { title } = selected_template;

        this.selected_template.innerText = "Wybierz szablon";

        if (title) this.selected_template.innerText = title;
    }

    bindLoadTemplates(handler) {
        this.handleLoadTemplates = handler;
    }

    bindSelectTemplate(handler) {
        this.handleSelectTemplate = handler;
    }
}
