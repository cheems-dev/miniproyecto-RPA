import React, { useEffect, useState } from "react";

import axios from "axios";
import { useParams } from "react-router-dom";

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
    <div className="TemplateComponent">
      <p>{newFound?.category}</p>
      <h1 itemProp="title" className="TemplateComponent__title">
        {newFound?.title}
      </h1>
      <h2 itemProp="subtitle" className="TemplateComponent__subtitle">
        {newFound?.description}
      </h2>
      <hr></hr>
      <hr></hr>
      <p>{newFound?.content}</p>
      <p>Redactado por: {newFound?.author}</p>
    </div>
  );
};

PremiumNew.defaultProps = {};

export default PremiumNew;
