export default class NotificationsModel {
    constructor() {
        this.notifications = [];
    }

    push(notification) {
        this.notifications.push(notification);
    }
}
