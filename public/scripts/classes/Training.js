import uuid from "../utils/uuid.js";

export default class Training {
    constructor(title, href, type, stages) {
        this.id = uuid();
        this.use = true;
        this.type = type;
        this.title = title;
        this.href = href;
        this.stages = stages;
    }
}
