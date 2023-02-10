import React from "react";

import Button from "./global/button";
import CONSTANTS from "../config/constants";

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

const { IMAGE_PLACEHOLDER } = CONSTANTS;

const NewsCardImage: React.FC<Props> = (props) => {
  const { title, text, date, image, author } = props;
  const { url } = props;

  return (
    <div className={classes.card}>
      <img
        className={classes.image}
        src={image ?? IMAGE_PLACEHOLDER}
        alt="image"
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
        <p itemProp="description">{text}</p>
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
  image:
    // eslint-disable-next-line max-len
    "https://elcomercio.pe/resizer/Vt2fd6RF3B42JpqE79NHbKucwmA=/680x680/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/YAUXM2C4NVGYLLPNC6RLF2OJXM.jfif",
};

export default NewsCardImage;
