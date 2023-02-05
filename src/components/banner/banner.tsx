import React from "react";

interface Props {
  title?: string;
  subtitle?: string;
  children: string;
}

const Banner: React.FC<Props> = (props) => {
  const { title, subtitle, children } = props;

  return (
    <div>
      <h2 className="Banner__title">{title}</h2>
      <h2 className="Banner__subtitle">{subtitle}</h2>

      <div>{children}</div>
    </div>
  );
};

Banner.defaultProps = {
  title: "Hola",
  subtitle: "mundo",
};

export default Banner;
