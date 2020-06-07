import { SELECT_CONTACT_MENU } from "./types";

export const selectContactMenuItem = (menuCode) => {
  return {
    type: SELECT_CONTACT_MENU,
    payload: menuCode,
  };
};
