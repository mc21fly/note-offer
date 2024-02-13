export default class TrainingsControllers {
    constructor(trainings_model, trainings_view) {
        this.trainings_model = trainings_model;
        this.trainings_view = trainings_view;

        this.trainings_model.bindOnTrainingsUpdate(this.onTrainingsUpdate);

        this.trainings_view.bindToggleShowTraining(this.handleToggleShowTraining);
        this.trainings_view.bindToggleShowStage(this.handleToggleShowStage);

        this.trainings_model._init();
    }

    handleToggleShowTraining = (id) => {
        this.trainings_model.toggleShowTraining(id);
    };

    handleToggleShowStage = (id) => {
        this.trainings_model.toggleShowStage(id);
    };

    onTrainingsUpdate = (trainings) => {
        this.trainings_view.displayTrainings(trainings);
    };
}
