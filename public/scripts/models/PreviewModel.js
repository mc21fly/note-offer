export default class PreviewModel {
    constructor() {
        this.selected_template = {};
        this.selected_profile = {};
        this.trainings = [];

        this.onPreviewUpdate;
    }

    updateSelectedTemplate = (selected_template) => {
        this.selected_template = selected_template;

        this.onPreviewUpdate(this);
    };

    updateSelectedProfile = (selected_profile) => {
        this.selected_profile = selected_profile;

        this.onPreviewUpdate(this);
    };

    updateTrainings = (trainings) => {
        this.trainings = trainings;

        this.onPreviewUpdate(this);
    };

    bindPreviewUpdate = (callback) => {
        this.onPreviewUpdate = callback;
    };
}
