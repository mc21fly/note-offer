import parseProfiles from "../utils/parseProfiles.js";
import parseTrainings from "../utils/parseTrainings.js";
import StandardTemplate from "../templates/StandardTemplate.js";
import KFSTemplate from "../templates/KFSTemplate.js";
import EFSTemplate from "../templates/EFSTemplate.js";
import LocalStorageManager from "../utils/LocalStorageManager.js";
import Notification from "../utils/Notification.js";

export default class AppModel {
    constructor() {
        this.profiles = [];
        this.trainings = [];
        this.templates = [];
        this.selected_profile = {};
        this.selected_template = {};

        this.onModelUpdate;
        this.onProfilesUpdate;
        this.onTrainingsUpdate;
        this.onTemplatesUpdate;
        this.onNotify;
    }

    async initialize() {
        this.loadTemplates();
        this.selected_template = this.templates[0] || {};

        this.loadStoredData();
        await this.loadProfiles();
        await this.loadTrainings();
        if (this.selected_profile.isEmpty()) this.selected_profile = this.profiles[0] || {};

        this.onModelUpdate(this);
    }

    async loadStoredData() {
        const stored_selected_profile = LocalStorageManager.read("selected_profile");

        if (stored_selected_profile) {
            const { payload } = stored_selected_profile;
            this.selected_profile = payload;
        }
    }

    async loadTemplates() {
        this.templates.push(new StandardTemplate());
        this.templates.push(new KFSTemplate());
        this.templates.push(new EFSTemplate());

        this.onTemplatesUpdate(this.templates);
    }

    loadSelectedTemplate() {
        if (this.selected_template.isNotEmpty()) {
            this.selected_template.setVariables({ profile: this.selected_profile, trainings: this.trainings });
        }
    }

    async loadProfiles() {
        try {
            const fetched_profiles = await parseProfiles();

            this.profiles = fetched_profiles;
            this.onNotify(new Notification("ok", "Kontakty zaimportowane poprawnie", `Liczba kontaktów: ${fetched_profiles.length}`));
        } catch (e) {
            this.onNotify(new Notification("error", "Błąd podczas importu kontaktów"));
            this.profiles = [];
        }

        this.onProfilesUpdate(this.profiles);
    }

    async loadTrainings() {
        try {
            const fetched_trainings = await parseTrainings();

            this.trainings = fetched_trainings;
            this.onNotify(new Notification("ok", "Szkolenia zaimportowane poprawnie", `Liczba szkoleń: ${fetched_trainings.length}`));
        } catch (e) {
            this.onNotify(new Notification("error", "Błąd podczas importu szkoleń"));
            this.trainings = [];
        }

        this.onTrainingsUpdate(this.trainings);
    }

    changeSelectedProfile(profile_index) {
        this.selected_profile = this.profiles[profile_index] || {};
        this.commit("selected_profile", this.selected_profile);

        this.onModelUpdate(this);
    }

    changeSelectedTemplate(template_index) {
        this.selected_template = this.templates[template_index] || {};

        this.onModelUpdate(this);
    }

    toggleShowTraining(training_index) {
        this.trainings[training_index].use = !this.trainings[training_index].use;

        this.onModelUpdate(this);
    }

    setShowTrainings(value) {
        const trainings = [...this.trainings].map((training) => {
            return {
                ...training,
                use: value,
            };
        });

        this.trainings = trainings;
        this.onTrainingsUpdate(this.trainings);
        this.onModelUpdate(this);
    }

    commit(key, value) {
        LocalStorageManager.write(key, value);
    }

    bindModelUpdate(callback) {
        this.onModelUpdate = callback;
    }

    bindProfilesUpdate(callback) {
        this.onProfilesUpdate = callback;
    }

    bindTrainingsUpdate(callback) {
        this.onTrainingsUpdate = callback;
    }

    bindTemplatesUpdate(callback) {
        this.onTemplatesUpdate = callback;
    }

    bindNotify(callback) {
        this.onNotify = callback;
    }
}
