import axios from "axios";
import {
  LOGIN_USER,
  REGISTER_USER,
  AUTH_USER,
  LOGOUT_USER,
  LOGIN_SUCCESS,
} from "./types";

export function loginSuccess(userData) {
  return { type: LOGIN_SUCCESS, payload: userData };
}
