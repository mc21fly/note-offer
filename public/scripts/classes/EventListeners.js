export default class EventListeners {
    constructor() {
        this.eventListeners = {};
    }

    addEventListener(type, listener) {
        if (!this.eventListeners[type]) {
            this.eventListeners[type] = [];
        }

        this.eventListeners[type].push(listener);
    }

    publish(type, data) {
        if (this.eventListeners[type]) {
            this.eventListeners[type].forEach((listener) => listener(data));
        }
    }
}
