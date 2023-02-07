import axiosDefault from "../config/axios";
import CONSTANTS from "../config/constants";

const endpoint = "top-headlines";

const { API } = CONSTANTS;

export const getTopHeadLinesByQuery = ({ query }: { query: string }) => {
  return axiosDefault.get(endpoint, {
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
  return axiosDefault.get(endpoint, {
    params: {
      apiKey: API.VITE_APP_API_TOKEN,
      category,
      country,
    },
  });
};
