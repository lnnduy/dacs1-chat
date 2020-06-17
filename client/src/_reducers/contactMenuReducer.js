import {
  SELECT_CONTACT_MENU,
  CONTACT_MENU_ITEMS,
  CLEAR_CONTACT_MENU,
} from "../_actions/types";

export default function (
  state = { selectedContactMenuItemCode: CONTACT_MENU_ITEMS.FRIENDS },
  action
) {
  switch (action.type) {
    case SELECT_CONTACT_MENU:
      return { ...state, selectedContactMenuItemCode: action.payload };
    case CLEAR_CONTACT_MENU:
      return { selectedContactMenuItemCode: CONTACT_MENU_ITEMS.FRIENDS };
    default:
      return state;
  }
}
