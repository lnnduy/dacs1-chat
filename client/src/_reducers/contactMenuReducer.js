import { SELECT_CONTACT_MENU, CONTACT_MENU_ITEMS } from "../_actions/types";

export default function (
  state = { selectedContactMenuItemCode: CONTACT_MENU_ITEMS.FRIENDS },
  action
) {
  switch (action.type) {
    case SELECT_CONTACT_MENU:
      return { ...state, selectedContactMenuItemCode: action.payload };
    default:
      return state;
  }
}
