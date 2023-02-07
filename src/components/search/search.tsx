import React, { useState } from "react";

import { getTopHeadLinesByCategoryandCountry } from "../../services/top-headlines";
import { TopNew } from "../../types/top-new";

interface Props {
  setNews: (news: TopNew[]) => void;
}

const countries = [
  { id: "ae", country: "United Arab Emirates" },
  { id: "ar", country: "Argentina" },
  { id: "at", country: "Austria" },
  { id: "au", country: "Australia" },
  { id: "be", country: "Belgium" },
  { id: "bg", country: "Bulgaria" },
  { id: "br", country: "Brazil" },
  { id: "ca", country: "Canada" },
  { id: "ch", country: "Switzerland" },
  { id: "cn", country: "China" },
  { id: "co", country: "Colombia" },
  { id: "cu", country: "Cuba" },
  { id: "cz", country: "Czech Republic" },
  { id: "de", country: "Germany" },
  { id: "eg", country: "Egypt" },
  { id: "fr", country: "France" },
  { id: "gb", country: "United Kingdom" },
  { id: "gr", country: "Greece" },
  { id: "hk", country: "Hong Kong" },
  { id: "hu", country: "Hungary" },
  { id: "id", country: "Indonesia" },
  { id: "ie", country: "Ireland" },
  { id: "il", country: "Israel" },
  { id: "in", country: "India" },
  { id: "it", country: "Italy" },
  { id: "jp", country: "Japan" },
  { id: "kr", country: "South Korea" },
  { id: "lt", country: "Lithuania" },
  { id: "lv", country: "Latvia" },
  { id: "ma", country: "Morocco" },
  { id: "mx", country: "Mexico" },
  { id: "my", country: "Malaysia" },
  { id: "ng", country: "Nigeria" },
  { id: "nl", country: "Netherlands" },
  { id: "no", country: "Norway" },
  { id: "nz", country: "New Zealand" },
  { id: "ph", country: "Philippines" },
  { id: "pl", country: "Poland" },
  { id: "pt", country: "Portugal" },
  { id: "ro", country: "Romania" },
  { id: "rs", country: "Serbia" },
  { id: "ru", country: "Russia" },
  { id: "sa", country: "Saudi Arabia" },
  { id: "se", country: "Sweden" },
  { id: "sg", country: "Singapore" },
  { id: "si", country: "Slovenia" },
  { id: "sk", country: "Slovakia" },
  { id: "th", country: "Thailand" },
  { id: "tr", country: "Turkey" },
  { id: "tw", country: "Taiwan" },
  { id: "ua", country: "Ukraine" },
  { id: "us", country: "United States" },
  { id: "ve", country: "Venezuela" },
  { id: "za", country: "South Africa" },
];

const categories = [
  { id: "business", category: "Business" },
  { id: "entertainment", category: "Entertainment" },
  { id: "general", category: "General" },
  { id: "health", category: "Health" },
  { id: "science", category: "Science" },
  { id: "sports", category: "Sports" },
  { id: "technology", category: "Technology" },
];

const Search: React.FC<Props> = ({ setNews }) => {
  const [countrySelected, setCountrySelected] = useState<string>("");
  const [categorySelected, setCategorySelected] = useState<string>("");

  const handleTopSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const fetchData = async () => {
      const { data } = await getTopHeadLinesByCategoryandCountry({
        category: categorySelected,
        country: countrySelected,
      });
      setNews(data.articles);
    };
    fetchData();
  };

  return (
    <section>
      <h1>Search news...</h1>
      <div className="search__topheadlines">
        <form onSubmit={handleTopSubmit}>
          <select onChange={(e) => setCountrySelected(e.target.value)}>
            <option value="-1">Seleccione un país...</option>
            {countries.map(({ id, country }) => (
              <option key={id} value={id}>
                {country}
              </option>
            ))}
          </select>
          <select onChange={(e) => setCategorySelected(e.target.value)}>
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
