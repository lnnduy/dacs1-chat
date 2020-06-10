import { combineReducers } from "redux";
import user from "./userReducer";
import leftMenu from "./leftMenuReducer";
import contactMenu from "./contactMenuReducer";
import contact from "./contactReducer";
import group from "./groupReducer";

const rootReducer = combineReducers({
  user,
  leftMenu,
  contactMenu,
  contact,
  group,
});

export default rootReducer;
