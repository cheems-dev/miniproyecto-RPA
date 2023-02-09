import React, { useState } from "react";

import NewsList from "../components/news-list";
import Search from "../components/search";
import useTopNew from "../hooks/useTopNew";
import { Query } from "../types/query.types";
import HELPERS from "../utils/helpers";

const { categories, countries } = HELPERS;

const HomePage: React.FC = () => {
  const [query, setQuery] = useState<Query>({
    category: categories[0].id,
    country: countries[0].id,
  });

  const [news] = useTopNew(query);

  return (
    <>
      <Search setQuery={setQuery} />
      <NewsList data={news} />
    </>
  );
};

export default HomePage;
