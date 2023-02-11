import React from "react";

import NewsList from "../components/news-list";
import Pagination from "../components/pagination";
import Search from "../components/search";
import CONSTANTS from "../config/constants";
import useGlobals from "../context/globals/globals.hooks";
import useTopNews from "../hooks/useTopNews";
import HELPERS from "../utils/helpers";
import getTotalPagination from "../utils/pagination";

const { countries, categories } = HELPERS;
const { TOTAL_NEW_BY_DEFAULT } = CONSTANTS;

const HomePage: React.FC = () => {
  const { query } = useGlobals();

  const [data] = useTopNews(query);

  return (
    <>
      <Search categories={categories} countries={countries} />
      <Pagination
        totalPages={getTotalPagination(data.totalResults, TOTAL_NEW_BY_DEFAULT)}
      />
      <NewsList data={data.news} />
    </>
  );
};

export default HomePage;
