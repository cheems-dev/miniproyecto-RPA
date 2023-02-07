import instance from "./base.api";
import CONSTANTS from "../config/constants";

const endpoint = "top-headlines";

const { API } = CONSTANTS;

export const getTopHeadLinesByQuery = ({ query }: { query: string }) => {
  return instance.get(endpoint, {
    params: {
      apiKey: API.VITE_APP_API_TOKEN,
      q: query,
    },
  });
};

export const getTopHeadLinesByCategoryandCountry = ({
  category,
  country,
}: {
  category: string;
  country: string;
}) => {
  return instance.get(endpoint, {
    params: {
      apiKey: API.VITE_APP_API_TOKEN,
      category,
      country,
    },
  });
};
