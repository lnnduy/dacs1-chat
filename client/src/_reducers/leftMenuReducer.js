import { SELECT_MENU, MENU_ITEMS, CLEAR_LEFT_MENU } from "../_actions/types";

export default function (
  state = { selectedMenuItemCode: MENU_ITEMS.CHAT },
  action
) {
  switch (action.type) {
    case SELECT_MENU:
      return { ...state, selectedMenuItemCode: action.payload };
    case CLEAR_LEFT_MENU:
      return { selectedMenuItemCode: MENU_ITEMS.CHAT };
    default:
      return state;
  }
}
