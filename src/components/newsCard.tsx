import React from "react";

interface Props {
  title?: string;
  date?: string;
}

const NewsCard: React.FC<Props> = (props) => {
  const { title, date } = props;

  return (
    <div className="newsCard">
      <span className="newsCard__date">{date}</span>
      <h3 className="newsCard__title">{title}</h3>
    </div>
  );
};

NewsCard.defaultProps = {
  title: "Neque porro quisquam est qui dolorem ipsuim quia dolor sit arnet",
  date: "December 21, 2022",
};

export default NewsCard;
