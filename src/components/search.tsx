import React, { FormEvent, SetStateAction } from "react";
import { useState, Dispatch } from "react";

import { Query } from "../types/query.types";
import HELPERS from "../utils/helpers";

interface Props {
  setQuery: Dispatch<SetStateAction<Query>>;
}

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
    <section>
      <h1>Search news...</h1>
      <div className="search__topheadlines">
        <form onSubmit={handleTopSubmit}>
          <select
            name="country"
            onChange={(e) => setValues({ ...values, country: e.target.value })}
          >
            <option value="-1">Seleccione un país...</option>
            {countries.map(({ id, country }) => (
              <option key={id} value={id}>
                {country}
              </option>
            ))}
          </select>

          <select
            name="category"
            onChange={(e) => setValues({ ...values, category: e.target.value })}
          >
            <option value="-1">Seleccione una categoría...</option>
            {categories.map(({ id, category }) => (
              <option key={id} value={id}>
                {category}
              </option>
            ))}
          </select>
          <button type="submit">Search</button>
        </form>
      </div>
    </section>
  );
};

export default Search;
