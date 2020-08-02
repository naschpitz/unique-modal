class Controller {
    constructor() {
        if (!!Controller.instance) {
            return Controller.instance;
        }

        Controller.instance = this;

        return this;
    }

    setReference(reference) {
        this.reference = reference;
    }

    open(component, style) {
        if (this.reference)
            this.reference.open(component, style);
    }

    refresh(component) {
        if (this.reference)
            this.reference.refresh(component);
    }

    close() {
        if (this.reference)
            this.reference.close();
    }
}

export default new Controller();