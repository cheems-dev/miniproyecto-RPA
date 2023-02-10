import React, { useEffect, useState } from "react";

import axios from "axios";

// eslint-disable-next-line @typescript-eslint/no-empty-interface, prettier/prettier
interface Props {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const PremiumPage: React.FC<Props> = (props) => {
  const [news, setNews] = useState([]);

  const fetchData = async () => {
    const { data } = await axios.get(
      "https://rpa-news.onrender.com/top-headlines"
    );

    setNews(data?.news?.docs);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="grid-cards">
      {!!news?.length &&
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        news?.map((noticia: any, id) => (
          <article key={id} className="card-container">
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
                <h2>{noticia.category}</h2>
              </div>
              <div className="card-title">
                <h1>{noticia.title}</h1>
              </div>
              <div className="card-description">
                <h1>{noticia.description}</h1>
              </div>
              <div className="card-author">
                <h3 className="card-author-name">By: {noticia.author}</h3>
              </div>
              <div className="card-button-div">
                <button className="card-button">Ver noticia</button>
              </div>
            </div>
          </article>
        ))}
    </div>
  );
};

PremiumPage.defaultProps = {};

export default PremiumPage;
