import { instance } from "./base.api";

const endpoint = "top-headlines";

const defaultParams = {
  apiKey: import.meta.env.VITE_REACT_APP_NEWSAPI_KEY,
};

export const getTopHeadLinesByQuery = ({ query }: { query: string }) => {
  return instance.get(endpoint, {
    params: {
      ...defaultParams,
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
      ...defaultParams,
      category,
      country: "us",
    },
  });
};
