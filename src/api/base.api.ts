import axios from "axios";

import CONSTANTS from "../config/constants";

const { API } = CONSTANTS;

export default axios.create({
  baseURL: API.REACT_APP_API_URL,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});
