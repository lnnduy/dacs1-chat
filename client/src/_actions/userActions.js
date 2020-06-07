import { UPDATE_USER_DATA, CLEAR_USER_DATA } from "./types";

export function updateUserData(userData) {
  return { type: UPDATE_USER_DATA, payload: userData };
}

export function clearUserData() {
  return { type: CLEAR_USER_DATA };
}
