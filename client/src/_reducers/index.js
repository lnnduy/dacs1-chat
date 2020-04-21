import { combineReducers } from "redux";
import user from "./user_reducer";
import leftMenu from "./left_menu_reducer";

const rootReducer = combineReducers({
  user,
  leftMenu,
});

export default rootReducer;
