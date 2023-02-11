import { axiosDefault, axiosNews } from "../config/axios";
import CONSTANTS from "../config/constants";
import { Query } from "../types/query.types";
import { NewsApiResponse, TopNewResponse } from "../types/top-new.types";

const { API } = CONSTANTS;
const { VITE_APP_API_TOKEN } = API;

export const getNews = (payload?: Query): Promise<NewsApiResponse> => {
  return axiosNews.get("/top-headlines", {
    params: {
      ...payload,
    },
  });
};

export const getTopHeadLinesByCategoryAndCountry = (
  payload: Query
): Promise<TopNewResponse> => {
  return axiosDefault.get("/top-headlines", {
    params: {
      apiKey: VITE_APP_API_TOKEN,
      ...payload,
    },
  });
};
