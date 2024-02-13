import Observable from "../classes/Observable.js";

import StandardTemplate from "../templates/StandardTemplate.js";
import KFSTemplate from "../templates/KFSTemplate.js";
import EFSTemplate from "../templates/EFSTemplate.js";

export default class TemplatesModel extends Observable {
    constructor() {
        super();
        this.templates = [];
        this.selected_template = {};

        this.onTemplatesUpdate;
        this.onSelectedTemplateUpdate;
    }

    async _init() {
        await this.loadTemplates();
    }

    async loadTemplates() {
        this.templates.push(new StandardTemplate());
        this.templates.push(new KFSTemplate());
        this.templates.push(new EFSTemplate());

        this.onTemplatesUpdate(this.templates);
    }

    selectTemplate(id) {
        const [found_template] = this.templates.filter((template) => template.id === id);

        this.selected_template = found_template;

        this.publish("selectedTemplateUpdate", this.selected_template);
    }

    bindOnTemplatesUpdate(callback) {
        this.onTemplatesUpdate = callback;
    }

    bindOnSelectedTemplateUpdate(callback) {
        this.onSelectedTemplateUpdate = callback;
    }
}
