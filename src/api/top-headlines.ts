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

export const getTopHeadLinesByCategory = ({
  category,
}: {
  category: string;
}) => {
  return instance.get(endpoint, {
    params: {
      apiKey: API.VITE_APP_API_TOKEN,
      category,
      country: "us",
    },
  });
};
