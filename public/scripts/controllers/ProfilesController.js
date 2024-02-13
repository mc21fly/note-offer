export default class ProfilesController {
    constructor(profiles_model, profiles_view) {
        this.profiles_model = profiles_model;
        this.profiles_view = profiles_view;

        this.profiles_model.bindOnProfilesUpdate(this.onProfilesUpdate);
        this.profiles_model.bindOnSelectedProfileUpdate(this.onSelectedProfileUpdate);

        this.profiles_view.bindLoadProfiles(this.handleLoadProfiles);
        this.profiles_view.bindSelectProfile(this.handleSelectProfile);

        this.profiles_model._init();
    }

    handleLoadProfiles = () => {
        this.profiles_model.loadProfiles();
    };

    handleSelectProfile = (id) => {
        this.profiles_model.selectProfile(id);
    };

    onProfilesUpdate = (profiles) => {
        this.profiles_view.displayProfiles(profiles);
    };

    onSelectedProfileUpdate = (selected_profile) => {
        this.profiles_view.displaySelectedProfile(selected_profile);
    };
}
