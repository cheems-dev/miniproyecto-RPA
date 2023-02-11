import React, { useEffect, useState } from "react";

import axios from "axios";

const classes = {
  card: "card",
  container: "card__container",
  section: "card__section-img",
  img: "card__img",
  wrap: "card__section-information",
  category: "card__category",
  title: "card__title",
  description: "card__description",
  author: "card__author",
  button: "card__button-container",
  buton: "card__button",
};

// TODO: pending
const PremiumPage: React.FC = () => {
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
    <>
      <div className={classes.card}>
        {!!news?.length &&
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          news?.map((noticia: any, id) => (
            <article key={id} className={classes.container}>
              <div className={classes.section}>
                <img
                  className={classes.img}
                  src={noticia.urlToImage}
                  alt="image"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "public/404.png";
                  }}
                />
              </div>
              <div className={classes.wrap}>
                <h2 className={classes.category}>{noticia.category}</h2>

                <h1 className={classes.title}>{noticia.title}</h1>

                <p className={classes.description}>{noticia.description}</p>

                <h3 className={classes.author}>By: {noticia.author}</h3>

                <div className={classes.button}>
                  <button className={classes.buton}>Ver noticia</button>
                </div>
              </div>
            </article>
          ))}
      </div>
    </>
  );
};

export default PremiumPage;
