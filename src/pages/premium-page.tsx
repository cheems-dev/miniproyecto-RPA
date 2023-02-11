import React, { useEffect, useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();

  const fetchData = async () => {
    const { data } = await axios.get(
      "https://rpa-news.onrender.com/top-headlines"
    );

    setNews(data?.news?.docs);
  };

  const handleClickUrl = (id: number, title: string) => {
    const url = title.toLowerCase().split(" ").join("-");
    const friendlyUrl = url.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    navigate(`/premium/${friendlyUrl}/${id}`);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className={classes.card}>
        {!!news?.length &&
          news?.map(
            (
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              { id, urlToImage, category, title, description, author }: any,
              i
            ) => (
              <article key={i} className={classes.container}>
                <div className={classes.section}>
                  <img
                    className={classes.img}
                    src={urlToImage}
                    alt="image"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = "public/404.png";
                    }}
                  />
                </div>
                <div className={classes.wrap}>
                  <h2 className={classes.category}>{category}</h2>

                  <h1 className={classes.title}>{title}</h1>

                  <p className={classes.description}>{description}</p>

                  <h3 className={classes.author}>By: {author}</h3>

                  <div className={classes.button}>
                    <button
                      onClick={() => handleClickUrl(id, title)}
                      className={classes.buton}
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

export default PremiumPage;
