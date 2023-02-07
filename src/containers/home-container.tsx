import React, { useState } from "react";

import NewsList from "../components/news/news-list";
import Search from "../components/search/search";
import { TopNew } from "../types/top-new";

const HomeContainer: React.FC = () => {
  const [news, setNews] = useState<TopNew[]>([]);

  return (
    <div>
      <Search setNews={setNews} />
      <NewsList data={news} />
    </div>
  );
};

HomeContainer.defaultProps = {};

export default HomeContainer;
