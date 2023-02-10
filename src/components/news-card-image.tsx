import React from "react";

import Button from "./global/button";

interface Props {
  title?: string;
  text?: string;
  date?: string;
  image?: string;
  author?: string;
  url?: string;
}

const classes = {
  card: "card__image--horizontal",
  image: "card__image--horizontal-image",
  content: "card__image--horizontal-content",
  title: "card__image--horizontal-title",
  container: "card__image--horizontal-container",
  author: "card__image--horizontal-author",
  href: "card__image--horizontal-href",
};

const NewsCardImage: React.FC<Props> = (props) => {
  const { title, text, date, image, author } = props;
  const { url } = props;

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
      <div className={classes.container}>
        <div className={classes.content}>
          <span itemProp="datePublished" className={classes.author}>
            {author?.toLocaleUpperCase() ?? "-"}
          </span>
          <span itemProp="datePublished">{date}</span>
        </div>
        <h3 itemProp="title" className={classes.title}>
          {title}
        </h3>
        <p itemProp="description">{text || NewsCardImage.defaultProps?.text}</p>
        <a href={url} target="_blank" rel="noreferrer" className={classes.href}>
          <Button buttonStyles="contained">Ver más</Button>
        </a>
      </div>
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
