import React, { useEffect, useState } from "react";

import axios from "axios";
import { useParams } from "react-router-dom";

const classes = {
  new: "new",
  category: "new__category",
  title: "new__title",
  image: "new__image",
  description: "new__description",
  content: "new__content",
  small: "new__small",
  author: "new__author",
};

// eslint-disable-next-line @typescript-eslint/no-empty-interface, prettier/prettier
interface Props {}

interface NewFound {
  id?: number;
  category: string;
  title: string;
  description: string;
  content: string;
  author: string;
  country: string;
  urlToImage: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const PremiumNew: React.FC<Props> = (props) => {
  const { id } = useParams();
  const [newFound, setNewFound] = useState<NewFound>();

  const fetchNew = async () => {
    const { data } = await axios.get(
      `https://rpa-news.onrender.com/top-headlines/${id}`
    );
    setNewFound(data?.data);
  };

  useEffect(() => {
    fetchNew();
  }, [id]);

  return (
    <div className={classes.new}>
      <label className={classes.category}>{newFound?.category}</label>
      <h1 itemProp="title" className={classes.title}>
        {newFound?.title}
      </h1>
      <img className={classes.image} src={newFound?.urlToImage} />
      <h2 itemProp="subtitle" className={classes.description}>
        {newFound?.description}
      </h2>
      <hr></hr>
      <hr></hr>
      <p className={classes.content}>{newFound?.content}</p>
      <p className={classes.author}>
        <small className={classes.small}>Redactado por:</small>{" "}
        {newFound?.author}
      </p>
    </div>
  );
};

PremiumNew.defaultProps = {};

export default PremiumNew;
