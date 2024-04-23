import uuid from "../utils/uuid.js";

export default class Template {
    constructor(title) {
        this.id = uuid();
        this.title = title;
        this.html = "";
        this.modifiers = [];
    }

    render() {
        console.log("Render template: ", this.title);
    }

    setModifiers(modifiers) {
        this.modifiers = modifiers;
    }

    getModifiers() {
        return this.modifiers;
    }
}
