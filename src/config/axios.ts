import axios from "axios";

import CONSTANTS from "./constants";

const { API } = CONSTANTS;
const { DEFAULT_REQUEST_TIMEOUT, REACT_APP_API_URL } = API;
const { REACT_APP_API_AUTH_URL } = API;

export const axiosDefault = axios.create({
  baseURL: REACT_APP_API_URL,
  timeout: DEFAULT_REQUEST_TIMEOUT,
});

export const axiosAuth = axios.create({
  baseURL: REACT_APP_API_AUTH_URL,
});
