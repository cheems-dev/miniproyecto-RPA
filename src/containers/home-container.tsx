import React, { useState } from "react";

import NewsList from "../components/news-list";
import Search from "../components/search";
import useTopNew from "../hooks/useTopNew";
import { Query } from "../types/query.types";

const HomeContainer: React.FC = () => {
  const [query, setQuery] = useState<Query>({
    category: undefined,
    country: undefined,
  });

  const [news] = useTopNew(query);

  return (
    <>
      <Search setQuery={setQuery} />
      <NewsList data={news} />
    </>
  );
};

HomeContainer.defaultProps = {};

export default HomeContainer;
