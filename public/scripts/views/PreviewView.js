export default class PreviewView {
    constructor() {
        this.preview_element = document.querySelector("#preview");

        this.scroll_value = 0;
        this.srcdoc;
    }

    displayPreview(model) {
        const { selected_template } = model;

        this.scroll_value = this.preview_element.contentWindow.scrollY;
        this.srcdoc = "";
        this.preview_element.srcdoc = "";
        if (selected_template.isNotEmpty()) {
            const rendered = selected_template.render();
            this.srcdoc = rendered;

            this.preview_element.contentDocument.open();
            this.preview_element.contentDocument.write(rendered);
            this.preview_element.contentDocument.close();
        }
    }
}
