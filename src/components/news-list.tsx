import React from "react";

import NewsCardImage from "./news-card-image";
import { TopNew } from "../types/top-new.types";
import formatDate from "../utils/format-date";

interface Props {
  data: TopNew[];
}

const classes = {
  container: "news-grid",
};

const NewsList: React.FC<Props> = (props) => {
  const { data } = props;

  return (
    <>
      <section className={classes.container}>
        {!!data.length &&
          data.map((topNew, id) => (
            <NewsCardImage
              key={id}
              title={topNew.title}
              author={topNew.author}
              text={topNew.description}
              date={topNew.publishedAt ? formatDate(topNew.publishedAt) : ""}
              image={topNew.urlToImage}
              url={topNew.url}
              id={topNew.id}
            />
          ))}
      </section>
    </>
  );
};

export default NewsList;
