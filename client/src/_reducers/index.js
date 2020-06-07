import { combineReducers } from "redux";
import user from "./userReducer";
import leftMenu from "./leftMenuReducer";
import contactMenu from "./contactMenuReducer";

const rootReducer = combineReducers({
  user,
  leftMenu,
  contactMenu,
});

export default rootReducer;
