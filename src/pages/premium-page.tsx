import React from "react";

import { useNavigate } from "react-router-dom";

import Pagination from "../components/pagination";
import Search from "../components/search";
import CONSTANTS from "../config/constants";
import useGlobals from "../context/globals/globals.hooks";
import useNews from "../hooks/useNews";
import HELPERS from "../utils/helpers";
import getTotalPagination from "../utils/pagination";

const { countriesPremium, categoriesPremium } = HELPERS;
const { TOTAL_NEW_PREMIUM_BY_DEFAULT } = CONSTANTS;

const PremiumPage: React.FC = () => {
  const navigate = useNavigate();
  const { query } = useGlobals();

  const [data] = useNews(query);

  const handleClickUrl = (id: number, title: string) => {
    const url = title.toLowerCase().split(" ").join("-");
    const friendlyUrl = url.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    navigate(`/premium/${friendlyUrl}/${id}`);
  };

  return (
    <>
      <Search countries={countriesPremium} categories={categoriesPremium} />
      <Pagination
        totalPages={getTotalPagination(
          data.totalResults,
          TOTAL_NEW_PREMIUM_BY_DEFAULT
        )}
      />
      <div className="grid-cards">
        {!!data.news?.length &&
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          data.news?.map(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ({ id, category, title, description, author }: any, i) => (
              <article key={i} className="card-container">
                <div className="card-section-image">
                  <img
                    className="card-image"
                    // eslint-disable-next-line max-len
                    src="https://upload.wikimedia.org/wikipedia/commons/8/8f/Fire_inside_an_abandoned_convent_in_Massueville%2C_Quebec%2C_Canada.jpg"
                    alt="image"
                  />
                </div>
                <div className="card-section-information">
                  <div className="card-category">
                    <h2>{category}</h2>
                  </div>
                  <div className="card-title">
                    <h1>{title}</h1>
                  </div>
                  <div className="card-description">
                    <h1>{description}</h1>
                  </div>
                  <div className="card-author">
                    <h3 className="card-author-name">By: {author}</h3>
                  </div>
                  <div className="card-button-div">
                    <button
                      onClick={() => handleClickUrl(id, title)}
                      className="card-button"
                    >
                      Ver noticia
                    </button>
                  </div>
                </div>
              </article>
            )
          )}
      </div>
    </>
  );
};

PremiumPage.defaultProps = {};

export default PremiumPage;
