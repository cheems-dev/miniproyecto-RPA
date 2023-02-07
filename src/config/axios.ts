import axios from "axios";

import CONSTANTS from "./constants";

const { API } = CONSTANTS;
const { DEFAULT_REQUEST_TIMEOUT, REACT_APP_API_URL } = API;

const axiosDefault = axios.create({
  baseURL: REACT_APP_API_URL,
  timeout: DEFAULT_REQUEST_TIMEOUT,
  headers: {
    /* "Content-Type": "application/json", */
    /*    responseType: "json", */
  },
});

export default axiosDefault;
