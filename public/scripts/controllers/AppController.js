export default class AppController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.model.bindModelUpdate(this.onModelUpdate);
        this.model.bindProfilesUpdate(this.onProfilesUpdate);
        this.model.bindTrainingsUpdate(this.onTrainingsUpdate);
        this.model.bindTemplatesUpdate(this.onTemplatesUpdate);
        this.model.bindNotify(this.onNotify);
        this.model.initialize();

        this.view.bindChangeProfile(this.handleChangeSelectedProfile);
        this.view.bindChangeTemplate(this.handleChangeSelectedTemplate);
        this.view.bindToggleShowTraining(this.handleToggleShowTrainings);
        this.view.bindSetShowTrainings(this.handleSetShowTrainings);
        this.view.bindReloadProfiles(this.handleReloadProfiles);
        this.view.bindReloadTemplates(this.handleReloadTemplates);
        this.view.bindReloadTrainings(this.handleReloadTrainings);
    }

    // MODEL HANDLERS
    onModelUpdate = (model) => {
        model.loadSelectedTemplate();
        this.view.displayPreview(model);
    };

    onProfilesUpdate = (profiles) => {
        this.view.displayProfiles(profiles);
    };

    onTrainingsUpdate = (trainings) => {
        this.view.displayTrainings(trainings);
    };

    onTemplatesUpdate = (templates) => {
        this.view.displayTemplates(templates);
    };

    onNotify = (notification) => {
        this.view.notify(notification);
    };

    // VIEW HANDLERS
    handleChangeSelectedProfile = (profile_index) => {
        this.model.changeSelectedProfile(profile_index);
    };

    handleChangeSelectedTemplate = (template_index) => {
        this.model.changeSelectedTemplate(template_index);
    };

    handleToggleShowTrainings = (training_index) => {
        this.model.toggleShowTraining(training_index);
    };

    handleSetShowTrainings = (value) => {
        this.model.setShowTrainings(value);
    };

    handleReloadProfiles = () => {
        this.model.loadProfiles();
    };

    handleReloadTemplates = () => {
        this.model.loadTemplates();
    };

    handleReloadTrainings = () => {
        this.model.loadTrainings();
    };
}
