import React from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {
  title: string; // requerido
  subtitle?: string; // "?" -> opcional
}

const TemplateComponent: React.FC<Props> = (props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { title, subtitle } = props;

  return (
    <div className="TemplateComponent">
      <h2 className="TemplateComponent__title">Title</h2>
      <h2 className="TemplateComponent__subtitle">Subtitle</h2>
    </div>
  );
};

TemplateComponent.defaultProps = {};

export default TemplateComponent;
