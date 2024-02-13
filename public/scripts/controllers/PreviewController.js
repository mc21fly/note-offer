export default class PreviewController {
    constructor(preview_model, profiles_model, trainings_model, templates_model, preview_view) {
        this.preview_model = preview_model;
        this.profiles_model = profiles_model;
        this.trainings_model = trainings_model;
        this.templates_model = templates_model;
        this.preview_view = preview_view;

        this.profiles_model.subscribe("selectedProfileUpdate", (selected_profile) => {
            this.handleSelectedProfileUpdate(selected_profile);
        });

        this.trainings_model.subscribe("selectedTrainingsUpdate", (trainings) => {
            this.handleTrainingsUpdate(trainings);
        });

        this.templates_model.subscribe("selectedTemplateUpdate", (selected_template) => {
            this.handleSelectedTemplateUpdate(selected_template);
        });

        this.preview_model.bindPreviewUpdate(this.onPreviewUpdate);
    }

    handleSelectedTemplateUpdate = (selected_template) => {
        this.preview_model.updateSelectedTemplate(selected_template);
    };

    handleSelectedProfileUpdate = (selected_profile) => {
        this.preview_model.updateSelectedProfile(selected_profile);
    };

    handleTrainingsUpdate = (trainings) => {
        this.preview_model.updateTrainings(trainings);
    };

    onPreviewUpdate = (preview_model) => {
        this.preview_view.displayPreview(preview_model);
    };
}
