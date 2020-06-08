import { combineReducers } from "redux";
import user from "./userReducer";
import leftMenu from "./leftMenuReducer";
import contactMenu from "./contactMenuReducer";
import contact from "./contactReducer";

const rootReducer = combineReducers({
  user,
  leftMenu,
  contactMenu,
  contact,
});

export default rootReducer;
