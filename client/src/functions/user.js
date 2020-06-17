import axios from "axios";
import { USER_SERVER } from "../shared/Config";
import store from "../store";
import { clearConversation } from "../_actions/conversationActions";
import { clearGroup } from "../_actions/groupActions";
import { clearContactMenu } from "../_actions/contactMenuActions";
import { clearContact } from "../_actions/contactActions";
import { clearUserData } from "../_actions/userActions";
import { clearLeftMenu } from "../_actions/leftMenuActions";

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
  store.dispatch(clearUserData());
  store.dispatch(clearConversation());
  store.dispatch(clearGroup());
  store.dispatch(clearContactMenu());
  store.dispatch(clearContact());
  store.dispatch(clearLeftMenu());
  return axios.get(`${USER_SERVER}/logout`).then((response) => response.data);
}
