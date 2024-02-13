import Observable from "../classes/Observable.js";

export default class TrainingsModel extends Observable {
    constructor() {
        super();
        this.trainings = [];

        this.onTrainingsUpdate;
    }

    async _init() {
        await this.loadTrainings();
    }

    async loadTrainings() {
        try {
            const fetched_trainings = await parseTrainings();

            this.trainings = fetched_trainings;
        } catch (e) {
            this.trainings = [];
        }

        this.onTrainingsUpdate(this.trainings);
    }

    toggleShowTraining(id) {}

    toggleShowStage(training_id, stage_id) {}

    bindOnTrainingsUpdate(callback) {
        this.onTrainingsUpdate = callback;
    }
}
