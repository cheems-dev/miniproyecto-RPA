import React, { Dispatch, FormEvent } from "react";
import { useState, SetStateAction } from "react";

import { Query } from "../types/query.types";
import HELPERS from "../utils/helpers";

interface Props {
  setQuery: Dispatch<SetStateAction<Query>>;
}

const classes = {
  search: "search",
  topheadlines: "search__topheadlines",
  title: "search__title",
  select: "search__select",
  option: "search__option",
  button: "search__button",
};

const { countries, categories } = HELPERS;

const Search: React.FC<Props> = (props) => {
  const { setQuery } = props;
  const [values, setValues] = useState<Query>({
    category: undefined,
    country: undefined,
  });

  const handleTopSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setQuery(values);
  };

  return (
    <section className={classes.search}>
      <h1 className={classes.title}>Search news...</h1>
      <div className={classes.topheadlines}>
        <form onSubmit={handleTopSubmit}>
          <select
            className={classes.select}
            name="country"
            onChange={(e) => setValues({ ...values, country: e.target.value })}
          >
            <option value="-1">Seleccione un país</option>
            {countries.map(({ id, country }) => (
              <option className={classes.option} key={id} value={id}>
                {country}
              </option>
            ))}
          </select>

          <select
            className={classes.select}
            name="category"
            onChange={(e) => setValues({ ...values, category: e.target.value })}
          >
            <option value="-1">Seleccione una categoría</option>
            {categories.map(({ id, category }) => (
              <option className={classes.option} key={id} value={id}>
                {category}
              </option>
            ))}
          </select>
          <button className={classes.button} type="submit">
            Search
          </button>
        </form>
      </div>
    </section>
  );
};

export default Search;
