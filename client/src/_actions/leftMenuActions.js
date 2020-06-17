import { SELECT_MENU, CLEAR_LEFT_MENU } from "./types";

export const selectMenuItem = (menuCode) => {
  return {
    type: SELECT_MENU,
    payload: menuCode,
  };
};

export function clearLeftMenu() {
  return { type: CLEAR_LEFT_MENU };
}
