import { useState, useEffect } from "react";

import useGlobals from "../context/globals/globals.hooks";
import { getNews } from "../services/top-headlines.service";
import { Query } from "../types/query.types";
import { TopNew } from "../types/top-new.types";

interface ResponseState {
  news: TopNew[];
  totalResults: number;
}

const useNews = (query: Query): [news: ResponseState] => {
  const [data, setData] = useState<ResponseState>({
    news: [],
    totalResults: 0,
  });
  const { setLoading } = useGlobals();

  const fetchData = async (payload: Query) => {
    const response = await getNews(payload);
    return response.data.news;
  };

  useEffect(() => {
    setLoading(true);
    fetchData(query)
      .then((resolve) =>
        setData({ news: resolve.docs, totalResults: resolve.totalDocs })
      )
      .finally(() => setLoading(false));
  }, [query]);

  return [data];
};

export default useNews;
