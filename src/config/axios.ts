import axios from "axios";

import CONSTANTS from "./constants";

const { API } = CONSTANTS;
const { DEFAULT_REQUEST_TIMEOUT } = API;
const { REACT_APP_API_URL, REACT_APP_PLATFORM } = API;

const axiosDefault = axios.create({
  baseURL: REACT_APP_API_URL,
  timeout: DEFAULT_REQUEST_TIMEOUT,
  headers: {
    Platform: REACT_APP_PLATFORM as string,
    "Access-Control-Allow-Origin": "*",
    origin: "x-requested-with",
    "Access-Control-Allow-Headers":
      // eslint-disable-next-line max-len
      "POST, GET, PUT, DELETE, OPTIONS, HEAD, Authorization, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Access-Control-Allow-Origin",
    "Content-Type": "application/json",
    responseType: "json",
  },
});

export default axiosDefault;
