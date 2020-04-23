import axios from "axios";
import { USER_SERVER } from "../components/Config.js";
import {
  LOGIN_USER,
  REGISTER_USER,
  AUTH_USER,
  LOGOUT_USER,
  LOGIN_SUCCESS,
} from "../_actions/types";

export function loginUser(dataToSubmit) {
  return axios
    .post(`${USER_SERVER}/login`, dataToSubmit)
    .then((response) => response.data);
}

export function auth() {
  return axios.get(`${USER_SERVER}/auth`).then((response) => response.data);
}

export function registerUser(dataToSubmit) {
  return axios
    .post(`${USER_SERVER}/register`, dataToSubmit)
    .then((response) => response.data);
}

export function logoutUser() {
  return axios.get(`${USER_SERVER}/logout`).then((response) => response.data);
}
