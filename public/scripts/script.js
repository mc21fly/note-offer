import AppModel from "./models/AppModel.js";
import AppView from "./views/AppView.js";
import AppController from "./controllers/AppController.js";
import "./utils/prototypes.js";

new AppController(new AppModel(), new AppView());
