export default class ProfilesView {
    constructor() {
        this.dropdown = document.querySelector(".dropdown");
        this.profiles = document.querySelector("#profiles");
        this.selected_profile = document.querySelector("#selected-profile");
        this.dropdown_button = this.dropdown.querySelector(".button");

        this.handleLoadProfiles;
        this.handleSelectProfile;

        this.dropdown_button.addEventListener("click", () => {
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
                    this.dropdown.classList.remove("show");
                    this.handleSelectProfile(profile.id);
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
            this.handleLoadProfiles();
        });

        this.profiles.appendChild(li_refresh);
    }

    displaySelectedProfile(selected_profile) {
        const { name } = selected_profile;

        this.selected_profile.innerText = "Wybierz profil";

        if (name) this.selected_profile.innerText = name;
    }

    bindLoadProfiles(handler) {
        this.handleLoadProfiles = handler;
    }

    bindSelectProfile(handler) {
        this.handleSelectProfile = handler;
    }
}
