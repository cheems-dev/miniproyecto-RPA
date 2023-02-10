import React from "react";

import NewsList from "../components/news-list";
import Pagination from "../components/pagination";
import Search from "../components/search";
import useGlobals from "../context/globals/globals.hooks";
import useTopNew from "../hooks/useTopNew";
import getTotalPagination from "../utils/pagination";

const HomePage: React.FC = () => {
  const { query } = useGlobals();

  const [data] = useTopNew(query);

  return (
    <>
      <Search />
      <Pagination totalPages={getTotalPagination(data.totalResults)} />
      <NewsList data={data.news} />
    </>
  );
};

export default HomePage;
