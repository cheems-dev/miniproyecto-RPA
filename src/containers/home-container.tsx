import React from "react";

import Button from "../components/global/button";

const HomeContainer: React.FC = () => {
  return (
    <div>
      <Button>Hola mundo</Button>
      <Button type="contained">Hola mundo</Button>
      <Button type="outlined">Hola mundo</Button>
      <Button type="ghost">Hola mundo</Button>
    </div>
  );
};

HomeContainer.defaultProps = {};

export default HomeContainer;
