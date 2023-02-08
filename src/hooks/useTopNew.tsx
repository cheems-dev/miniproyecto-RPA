import { useState, useEffect } from "react";

import { getTopHeadLinesByCategoryAndCountry } from "../services/top-headlines.service";
import { Query } from "../types/query.types";
import { TopNew } from "../types/top-new.types";

const useTopNew = (query: Query): [news: TopNew[]] => {
  const [news, setNews] = useState<TopNew[]>([]);

  const fetchData = async (payload: Query) => {
    const response = await getTopHeadLinesByCategoryAndCountry(payload);
    return response?.articles;
  };

  useEffect(() => {
    fetchData(query).then((resolve) => setNews(resolve));
  }, [query]);

  return [news];
};

export default useTopNew;
