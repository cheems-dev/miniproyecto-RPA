import React from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const TemplateContainer: React.FC<Props> = (props) => {
  return (
    <div className="TemplateComponent">
      <h2 className="TemplateComponent__title">Title</h2>
      <h2 className="TemplateComponent__subtitle">Subtitle</h2>
    </div>
  );
};

TemplateContainer.defaultProps = {};

export default TemplateContainer;
