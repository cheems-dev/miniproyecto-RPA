import React from "react";

interface Props {
  title?: string;
  date?: string;
  image?: string;
}

const classes = {
  card: "card__image--vertical",
  image: "card__image--vertical-image",
  date: "card__image--vertical-date",
  title: "card__image--vertical-title",
  info: "card__image--vertical-info",
};

const NewsCardImageVertical: React.FC<Props> = (props) => {
  const { title, date, image } = props;

  return (
    <div className={classes.card}>
      <img
        className={classes.image}
        src={image || NewsCardImageVertical.defaultProps?.image}
        alt="image"
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = "public/404.png";
        }}
      />
      <div className={classes.info}>
        <span itemProp="datePublished" className={classes.date}>
          {date}
        </span>
        <h3 itemProp="title" className={classes.title}>
          {title}
        </h3>
      </div>
    </div>
  );
};

NewsCardImageVertical.defaultProps = {
  title: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet.",
  date: "December 12,2022",
  image: "public/404.png",
};

export default NewsCardImageVertical;
