import { SELECT_MENU } from "./types";

export const selectMenuItem = (menuCode) => {
  return {
    type: SELECT_MENU,
    payload: menuCode,
  };
};
