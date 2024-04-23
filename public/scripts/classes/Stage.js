import uuid from "../utils/uuid.js";

export default class Stage {
    constructor(type, title, href) {
        this.id = uuid();
        this.use = true;
        this.type = type;
        this.title = title;
        this.href = href;
    }
}
