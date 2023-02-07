import React from "react";

interface Props {
  title?: string;
  date?: string;
  image?: string;
}

const NewsCardImageVertical: React.FC<Props> = (props) => {
  const { title, date, image } = props;

  return (
    <div className="cardImageV">
      <img className="cardImageV__image" src={image} alt="image" />
      <div className="cardImageV__info">
        <span className="cardImageV__date">{date}</span>
        <h3 className="cardImageV__title">{title}</h3>
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
