import React from "react";

import { Banner } from "../../components";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const HomeContainer: React.FC<Props> = (props) => {
  return (
    <div>
      <Banner>Hola</Banner>
    </div>
  );
};

HomeContainer.defaultProps = {};

export default HomeContainer;
