import { useState, useEffect } from "react";

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

  const fetchData = async (payload: Query) => {
    const response = await getTopHeadLinesByCategoryAndCountry(payload);
    return response;
  };

  useEffect(() => {
    fetchData(query).then((resolve) =>
      setData({ news: resolve.articles, totalResults: resolve.totalResults })
    );
  }, [query]);

  return [data];
};

export default useTopNews;
