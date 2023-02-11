import React, { FormEvent } from "react";
import { useState } from "react";

import { SearchOutlined } from "@ant-design/icons";

import Button from "./global/button";
import Select from "./global/select";
import CONSTANTS from "../config/constants";
import useGlobals from "../context/globals/globals.hooks";
import { Query } from "../types/query.types";
import HELPERS from "../utils/helpers";

const classes = {
  search: "search",
  container: "search__container",
  title: "search__title",
  button: "search__button",
  form: "search__form",
};

const { countries, categories } = HELPERS;
const { PAGE_BY_DEFAULT } = CONSTANTS;

const Search: React.FC = () => {
  const { query, setQuery } = useGlobals();

  const [values, setValues] = useState<Query>({
    category: categories[0].id,
    country: countries[0].id,
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      values.category !== query.category ||
      values.country !== query.country
    ) {
      setQuery({
        category: values.category,
        country: values.country,
        page: PAGE_BY_DEFAULT,
      });
    }
  };

  return (
    <section className={classes.search}>
      <h1 className={classes.title}>Busca tus noticias favoritas...</h1>
      <form onSubmit={handleSubmit} className={classes.form}>
        <Select
          label="Paises"
          id="country"
          options={countries}
          onChange={(e) => setValues({ ...values, country: e.target.value })}
        />
        <Select
          label="Categorías"
          id="category"
          options={categories}
          onChange={(e) => setValues({ ...values, category: e.target.value })}
        />
        <div className={classes.button}>
          <Button
            type="submit"
            buttonStyles="contained"
            endIcon={<SearchOutlined />}
          >
            Search
          </Button>
        </div>
      </form>
    </section>
  );
};

export default Search;
