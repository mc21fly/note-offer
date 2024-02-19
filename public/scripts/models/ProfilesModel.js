import Observable from "../classes/Observable.js";
import LocalStorageManager from "../utils/LocalStorageManager.js";
import parseProfiles from "../utils/parseProfiles.js";

export default class ProfilesModel extends Observable {
    constructor() {
        super();
        this.profiles = [];
        this.selected_profile = {};

        this.onProfilesUpdate;
        this.onSelectedProfileUpdate;
    }

    async _init() {
        await this.loadProfiles();
    }

    async loadProfiles() {
        try {
            const stored_profile = LocalStorageManager.read("selected_profile");
            const fetched_profiles = await parseProfiles();
            this.profiles = fetched_profiles;

            if (stored_profile) {
                const { id } = this.profiles.find((profile) => profile.name === stored_profile.payload.name);
                this.selectProfile(id);
            }
        } catch (e) {
            this.profiles = [];
        }

        this.onProfilesUpdate(this.profiles);
    }

    selectProfile(id) {
        const found_profile = this.profiles.find((profile) => profile.id === id);

        this.selected_profile = found_profile;

        LocalStorageManager.write("selected_profile", this.selected_profile);
        this.onSelectedProfileUpdate(this.selected_profile);
        this.publish("selectedProfileUpdate", this.selected_profile);
    }

    bindOnProfilesUpdate(callback) {
        this.onProfilesUpdate = callback;
    }

    bindOnSelectedProfileUpdate(callback) {
        this.onSelectedProfileUpdate = callback;
    }
}
