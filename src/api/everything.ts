import { instance } from "./base.api";

const endpoint = "everything";

export const getEverythingByQuery = ({ query }: { query: string }) => {
  return instance.get(endpoint, {
    params: {
      apiKey: import.meta.env.VITE_REACT_APP_NEWSAPI_KEY,
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
  return instance.get(endpoint, {
    params: {
      apiKey: import.meta.env.VITE_REACT_APP_NEWSAPI_KEY,
      q: query,
      from: initialDate,
      to: endDate,
      sortBy: "popularity",
      country: "us",
    },
  });
};
