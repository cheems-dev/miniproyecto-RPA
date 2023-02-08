import React, { useState, useEffect } from "react";

import NewsList from "../components/news-list";
import Search from "../components/search";
import { getTopHeadLinesByCategoryAndCountry } from "../services/top-headlines.service";
import { TopNew } from "../types/top-new.types";

interface Query {
  category?: string;
  country?: string;
}

const HomeContainer: React.FC = () => {
  const [query, setQuery] = useState<Query>({
    category: undefined,
    country: undefined,
  });
  const [news, setNews] = useState<TopNew[]>([]);

  const fetchData = async () => {
    const response = await getTopHeadLinesByCategoryAndCountry(query);
    setNews(response?.articles);
  };

  useEffect(() => {
    fetchData();
  }, [query]);

  return (
    <>
      <Search setQuery={setQuery} />
      <NewsList data={news} />
    </>
  );
};

HomeContainer.defaultProps = {};

export default HomeContainer;
