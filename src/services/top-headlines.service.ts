import axiosDefault from "../config/axios";
import CONSTANTS from "../config/constants";
import { Query } from "../types/query.types";
import { TopNewResponse } from "../types/top-new.types";

const { API } = CONSTANTS;
const { VITE_APP_API_TOKEN } = API;

export const getTopHeadLinesByQuery = ({ query }: { query: string }) => {
  return axiosDefault.get("/top-headlines", {
    params: {
      apiKey: API.VITE_APP_API_TOKEN,
      q: query,
    },
  });
};

export const getTopHeadLinesByCategoryAndCountry = (
  payload: Query
): Promise<TopNewResponse> => {
  const { category, country } = payload;
  return axiosDefault.get("/top-headlines", {
    params: {
      apiKey: VITE_APP_API_TOKEN,
      category,
      country,
    },
  });
};
