import React from "react";

interface Props {
  title?: string;
  text?: string;
  date?: string;
  image?: string;
}

const classes = {
  card: "card__image--horizontal",
  image: "card__image--horizontal-image",
  date: "card__image--horizontal-date",
  title: "card__image--horizontal-title",
};

const NewsCardImage: React.FC<Props> = (props) => {
  const { title, text, date, image } = props;

  return (
    <div className={classes.card}>
      <img
        className={classes.image}
        src={image || NewsCardImage.defaultProps?.image}
        alt="image"
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = "public/404.png";
        }}
      />
      <span itemProp="datePublished" className={classes.date}>
        {date}
      </span>
      <h3 itemProp="title" className={classes.title}>
        {title}
      </h3>
      <p itemProp="description">{text || NewsCardImage.defaultProps?.text}</p>
    </div>
  );
};

NewsCardImage.defaultProps = {
  title: "Proyecto #1",
  // eslint-disable-next-line max-len
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt, elit ut tempor congue, urna odio luctus sapien, non rutrum enim diam eu odio. Sed egestas lectus id risus congue, ac interdum magna rhoncus.",
  date: "December 12,2022",
  image: "public/404.png",
};

export default NewsCardImage;
