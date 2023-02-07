import React, { useState, useEffect } from "react";

import { getTopHeadLinesByCategory } from "../api/top-headlines";
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
