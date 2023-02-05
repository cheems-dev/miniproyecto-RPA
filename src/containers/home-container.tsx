import React from "react";

import { Banner } from "../components";

const HomeContainer: React.FC = () => {
  return (
    <div>
      <Banner>Hola</Banner>
    </div>
  );
};

HomeContainer.defaultProps = {};

export default HomeContainer;
