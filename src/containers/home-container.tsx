import React, { useState, useEffect } from "react";

import { getTopHeadLinesByCategory } from "../api/top-headlines";
import { Banner } from "../components";
import NewsList from "../components/news/news-list";
import Search from "../components/search/search";
import { TopNew } from "../types/top-new";

const HomeContainer: React.FC = () => {
  const [topNews, setTopNews] = useState<TopNew[]>([]);

  const fetchData = async () => {
    const { data } = await getTopHeadLinesByCategory({
      category: "business",
    });
    setTopNews(data.articles);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Banner>Hola</Banner>

      <Search />

      <NewsList data={topNews} />
    </div>
  );
};

HomeContainer.defaultProps = {};

export default HomeContainer;
