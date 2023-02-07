import { instance } from "./base.api";

const endpoint = "everything";

const defaultParams = {
  apiKey: import.meta.env.VITE_REACT_APP_NEWSAPI_KEY,
};

export const getEverythingByQuery = ({ query }: { query: string }) => {
  return instance.get(endpoint, {
    params: {
      ...defaultParams,
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
      ...defaultParams,
      q: query,
      from: initialDate,
      to: endDate,
      sortBy: "popularity",
      country: "us",
    },
  });
};
