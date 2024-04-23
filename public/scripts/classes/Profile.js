import uuid from "../utils/uuid.js";

export default class Profile {
    constructor(name, email, phone, title) {
        this.id = uuid();
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.title = title;
    }
}
