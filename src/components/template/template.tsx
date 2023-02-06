import React from "react";

interface Props {
  title: string; // requerido
  subtitle?: string; // "?" -> opcional
}

const TemplateComponent: React.FC<Props> = (props) => {
  const { title, subtitle } = props;

  return (
    <div className="TemplateComponent">
      <h1 className="TemplateComponent__title">{title}</h1>
      <h2 className="TemplateComponent__subtitle">{subtitle}</h2>
    </div>
  );
};

TemplateComponent.defaultProps = {};

export default TemplateComponent;
