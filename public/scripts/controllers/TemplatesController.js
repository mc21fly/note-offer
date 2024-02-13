export default class TemplatesController {
    constructor(templates_model, templates_view) {
        this.templates_model = templates_model;
        this.templates_view = templates_view;

        this.templates_model.bindOnTemplatesUpdate(this.onTemplatesUpdate);
        this.templates_model.bindOnSelectedTemplateUpdate(this.onSelectedTemplateUpdate);

        this.templates_view.bindLoadTemplates(this.handleLoadTemplates);
        this.templates_view.bindSelectTemplate(this.handleSelectTemplate);

        this.templates_model._init();
    }

    handleLoadTemplates = () => {
        this.templates_model.loadTemplates();
    };

    handleSelectTemplate = (id) => {
        this.templates_model.selectTemplate(id);
    };

    onTemplatesUpdate = (templates) => {
        this.templates_view.displayTemplates(templates);
    };

    onSelectedTemplateUpdate = (selected_template) => {
        this.templates_view.displaySelectedTemplate(selected_template);
    };
}
