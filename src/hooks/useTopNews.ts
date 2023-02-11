import { useState, useEffect } from "react";

import useGlobals from "../context/globals/globals.hooks";
import { getTopHeadLinesByCategoryAndCountry } from "../services/top-headlines.service";
import { Query } from "../types/query.types";
import { TopNew } from "../types/top-new.types";

interface ResponseState {
  news: TopNew[];
  totalResults: number;
}

const useTopNews = (query: Query): [news: ResponseState] => {
  const [data, setData] = useState<ResponseState>({
    news: [],
    totalResults: 0,
  });
  const { setLoading } = useGlobals();

  const fetchData = async (payload: Query) => {
    const response = await getTopHeadLinesByCategoryAndCountry(payload);
    return response;
  };

  useEffect(() => {
    setLoading(true);
    fetchData(query)
      .then((resolve) =>
        setData({ news: resolve.articles, totalResults: resolve.totalResults })
      )
      .finally(() => setLoading(false));
  }, [query]);

  return [data];
};

export default useTopNews;
