import React, { useState, useEffect } from "react";

import { getTopHeadLinesByCategory } from "../api/top-headlines";
import NewsCard from "../components/news-card";
import NewsCardImage from "../components/news-card-image";
import NewsCardImageVertical from "../components/news-card-image-vertical";
import { TopNew } from "../types/top-new";

const HomeContainer: React.FC = () => {
  const [topNews, setTopNews] = useState<TopNew[]>([]);

  const fetchData = async () => {
    const { data } = await getTopHeadLinesByCategory({
      category: "business",
    });
    setTopNews(data.articles);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <NewsCard />
      <NewsCardImageVertical />
      <NewsCardImage />
      <div className="grid">
        {!!topNews?.length &&
          topNews?.map((topNew, id) => (
            <div key={id} className="card">
              <p>{topNew.title}</p>
              <img
                src={topNew.urlToImage}
                alt="Avatar"
                style={{ width: "100%" }}
              />
              <h4>
                <b>{topNew.author || "Anonymous"}</b>
              </h4>
              <p>{topNew.description}</p>
            </div>
          ))}
      </div>
    </>
  );
};

HomeContainer.defaultProps = {};

export default HomeContainer;
