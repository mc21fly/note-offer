import Observable from "../classes/Observable.js";
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
            const fetched_profiles = await parseProfiles();

            this.profiles = fetched_profiles;
        } catch (e) {
            this.profiles = [];
        }

        this.onProfilesUpdate(this.profiles);
    }

    selectProfile(id) {
        const [found_profile] = this.profiles.filter((profile) => profile.id === id);

        this.selected_profile = found_profile;

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
