import { axiosDefault } from "../config/axios";
import CONSTANTS from "../config/constants";

const endpoint = "everything";

const { API } = CONSTANTS;

export const getEverythingByQuery = ({ query }: { query: string }) => {
  return axiosDefault.get(endpoint, {
    params: {
      apiKey: API.VITE_APP_API_TOKEN,
      q: query,
    },
  });
};

export const getEverythingByQueryAndDate = ({
  query,
  initialDate,
  endDate,
}: {
  query: string;
  initialDate: string;
  endDate: string;
}) => {
  return axiosDefault.get(endpoint, {
    params: {
      apiKey: API.VITE_APP_API_TOKEN,
      q: query,
      from: initialDate,
      to: endDate,
      sortBy: "popularity",
      country: "us",
    },
  });
};
