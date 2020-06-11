import { combineReducers } from "redux";
import user from "./userReducer";
import leftMenu from "./leftMenuReducer";
import contactMenu from "./contactMenuReducer";
import contact from "./contactReducer";
import group from "./groupReducer";
import conversation from "./conversationReducer";

const rootReducer = combineReducers({
  user,
  leftMenu,
  contactMenu,
  contact,
  group,
  conversation,
});

export default rootReducer;
