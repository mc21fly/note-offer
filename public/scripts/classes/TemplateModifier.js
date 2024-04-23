import uuid from "../utils/uuid.js";

export default class TemplateModifier {
    constructor(name, type, target, value_type, default_value, value, onUpdate) {
        this.id = uuid();
        this.name = name;
        this.type = type;
        this.target = target;
        this.value_type = value_type;
        this.default_value = default_value;
        this.value = value;
        this.onUpdate = onUpdate;
    }

    setValue(new_value) {
        if (!new_value) {
            this.value = this.default_value;
        } else {
            this.value = new_value;
        }

        this.onUpdate();
    }

    getValue() {
        return this.value;
    }
}
