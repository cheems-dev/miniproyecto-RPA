import React from "react";

import { TopNew } from "../../types/top-new";

interface Props {
  data: TopNew[];
}

const NewsList: React.FC<Props> = (props) => {
  const { data } = props;

  return (
    <>
      <section className="grid">
        {!!data?.length &&
          data?.map((topNew, id) => (
            <article key={id} className="card">
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
            </article>
          ))}
      </section>
    </>
  );
};

export default NewsList;
