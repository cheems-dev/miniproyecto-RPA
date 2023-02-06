import { instance } from "./base.api";

const endpoint = "top-headlines";

export const getTopHeadLinesByQuery = ({ query }: { query: string }) => {
  return instance.get(endpoint, {
    params: {
      apiKey: import.meta.env.VITE_REACT_APP_NEWSAPI_KEY,
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
      apiKey: import.meta.env.VITE_REACT_APP_NEWSAPI_KEY,
      category,
      country: "us",
    },
  });
};
