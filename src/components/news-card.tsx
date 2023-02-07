import React from "react";

interface Props {
  title?: string;
  date?: string;
}

const classes = {
  card: "card__new-dark",
  date: "card__new-date",
  title: "card__new-title",
};

const NewsCard: React.FC<Props> = (props) => {
  const { title, date } = props;

  return (
    <div className={classes.card}>
      <span itemProp="datePublished" className={classes.date}>
        {date}
      </span>
      <h3 itemProp="title" className={classes.title}>
        {title}
      </h3>
    </div>
  );
};

NewsCard.defaultProps = {
  title: "Neque porro quisquam est qui dolorem ipsuim quia dolor sit arnet",
  date: "December 21, 2022",
};

export default NewsCard;
