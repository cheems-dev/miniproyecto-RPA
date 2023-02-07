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
      <img className={classes.image} src={image} alt="image" />
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
  image:
    // eslint-disable-next-line max-len
    "https://elcomercio.pe/resizer/Vt2fd6RF3B42JpqE79NHbKucwmA=/680x680/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/YAUXM2C4NVGYLLPNC6RLF2OJXM.jfif",
};

export default NewsCardImageVertical;
