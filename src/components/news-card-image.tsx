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
      <img className={classes.image} src={image} alt="image" />
      <span itemProp="datePublished" className={classes.date}>
        {date}
      </span>
      <h3 itemProp="title" className={classes.title}>
        {title}
      </h3>
      <p itemProp="description">{text}</p>
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
