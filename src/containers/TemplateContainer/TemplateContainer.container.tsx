import React from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const TemplateContainerContainer: React.FC<Props> = (props) => {
  return (
    <div className="TemplateComponent">
      <h2 className="TemplateComponent__title">Title</h2>
      <h2 className="TemplateComponent__subtitle">Subtitle</h2>
    </div>
  );
};

TemplateContainerContainer.defaultProps = {};

export default TemplateContainerContainer;
