import React from "react";

import NewsCardImage from "./news-card-image";
import { TopNew } from "../types/top-new.types";
import formatDate from "../utils/formatDate";

interface Props {
  data: TopNew[];
}

const NewsList: React.FC<Props> = (props) => {
  const { data } = props;

  return (
    <>
      <section className="news-grid">
        {!!data?.length &&
          data?.map((topNew, id) => (
            <NewsCardImage
              key={id}
              title={topNew.title}
              text={topNew.description}
              date={topNew.publishedAt ? formatDate(topNew.publishedAt) : ""}
              image={topNew.urlToImage}
            />
          ))}
      </section>
    </>
  );
};

export default NewsList;
