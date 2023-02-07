import React, { useState } from "react";

import NewsList from "../components/news/news-list";
import NewsCard from "../components/news-card";
import NewsCardImage from "../components/news-card-image";
import NewsCardImageVertical from "../components/news-card-image-vertical";
import Search from "../components/search/search";
import { TopNew } from "../types/top-new";

const HomeContainer: React.FC = () => {
  const [news, setNews] = useState<TopNew[]>([]);

  return (
    <div>
      <NewsCard />
      <NewsCardImageVertical />
      <NewsCardImage />
      <Search setNews={setNews} />
      <NewsList data={news} />
    </div>
  );
};

HomeContainer.defaultProps = {};

export default HomeContainer;
