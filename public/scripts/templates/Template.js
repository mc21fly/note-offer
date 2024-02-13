import uuid from "../utils/uuid.js";

export default class Template {
    constructor(title) {
        this.id = uuid();
        this.title = title;
        this.source = "";
        this.srcdoc = "";
        this.modifiers = [];

        this.handleUpdate;
    }

    setVariables(variables) {
        if (variables) {
            for (const key in variables) {
                this[key] = variables[key];
            }
        }

        return this;
    }

    getModifiers() {
        return this.modifiers;
    }

    render() {
        return this.srcdoc;
    }

    bindOnUpdate(callback) {
        this.handleUpdate = callback;

        return this;
    }
}
