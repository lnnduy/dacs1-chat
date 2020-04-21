import { SELECT_MENU, MENU_ITEMS } from "../_actions/types";

export default function (
  state = { selectedMenuItemCode: MENU_ITEMS.CHAT },
  action
) {
  switch (action.type) {
    case SELECT_MENU:
      return { ...state, selectedMenuItemCode: action.payload };
    default:
      return state;
  }
}
