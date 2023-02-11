import React from "react";

import { LoadingOutlined } from "@ant-design/icons";

const classes = {
  container: "loading",
  component: "loading__component",
};
const Loading: React.FC = () => {
  return (
    <div className={classes.container}>
      <LoadingOutlined className={classes.component} /> <h4>Cargando...</h4>
    </div>
  );
};

export default Loading;
