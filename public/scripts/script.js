import "./utils/prototypes.js";

import ProfilesModel from "./models/ProfilesModel.js";
import TemplatesModel from "./models/TemplatesModel.js";
import TrainingsModel from "./models/TrainingsModel.js";
import PreviewModel from "./models/PreviewModel.js";
import NotificationsModel from "./models/NotificationsModel.js";

import ProfilesView from "./views/ProfilesView.js";
import TemplatesView from "./views/TemplatesView.js";
import TrainingsView from "./views/TrainingsView.js";
import PreviewView from "./views/PreviewView.js";
import NotificationsView from "./views/NotificationsView.js";

import ProfilesController from "./controllers/ProfilesController.js";
import TemplatesController from "./controllers/TemplatesController.js";
import TrainingsController from "./controllers/TrainingsController.js";
import PreviewController from "./controllers/PreviewController.js";
import NotificationsController from "./controllers/NotificationsController.js";

const profiles_model = new ProfilesModel();
const templates_model = new TemplatesModel();
const trainings_model = new TrainingsModel();
const preview_model = new PreviewModel();
const notifications_model = new NotificationsModel();

const profiles_view = new ProfilesView();
const templates_view = new TemplatesView();
const trainings_view = new TrainingsView();
const preview_view = new PreviewView();
const notifications_view = new NotificationsView();

new ProfilesController(profiles_model, profiles_view);
new TemplatesController(templates_model, templates_view);
new TrainingsController(trainings_model, trainings_view);
new PreviewController(preview_model, profiles_model, trainings_model, templates_model, preview_view);
new NotificationsController(notifications_model, profiles_model, trainings_model, templates_model, notifications_view);
