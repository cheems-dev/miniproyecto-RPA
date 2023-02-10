import React, { FormEvent, SetStateAction } from "react";
import { useState, Dispatch } from "react";

import { SearchOutlined } from "@ant-design/icons";

import Button from "./global/button";
import Select from "./global/select";
import { Query } from "../types/query.types";
import HELPERS from "../utils/helpers";

interface Props {
  setQuery: Dispatch<SetStateAction<Query>>;
}

const classes = {
  search: "search",
  container: "search__container",
  title: "search__title",
  button: "search__button",
  form: "search__form",
};

const { countries, categories } = HELPERS;

const Search: React.FC<Props> = (props) => {
  const { setQuery } = props;
  const [values, setValues] = useState<Query>({
    category: categories[0].id,
    country: countries[0].id,
  });

  const handleTopSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setQuery(values);
  };

  return (
    <section className={classes.search}>
      <h1 className={classes.title}>Busca tus noticias favoritas...</h1>
      <form onSubmit={handleTopSubmit} className={classes.form}>
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
