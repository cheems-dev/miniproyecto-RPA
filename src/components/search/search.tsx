import React from "react";

interface Props {
  title?: string;
  subtitle?: string;
}

const Search: React.FC<Props> = () => {
  const handleTopSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };

  return (
    <section>
      <h1>Search news...</h1>
      <div className="search__topheadlines">
        <form onSubmit={handleTopSubmit}>
          <select>
            <option>Hola</option>
            <option>Hola</option>
            <option>Hola</option>
            <option>Hola</option>
          </select>
          <button>Go</button>
        </form>
      </div>
    </section>
  );
};

Search.defaultProps = {
  title: "Hola",
  subtitle: "mundo",
};

export default Search;
