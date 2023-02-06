import React from "react";

import { CloudDownloadOutlined } from "@ant-design/icons";

import Button from "../components/global/button";

const HomeContainer: React.FC = () => {
  return (
    <div>
      <Button>Hola mundo</Button>
      <Button buttonStyles="contained" endIcon={<CloudDownloadOutlined />}>
        Hola mundo
      </Button>
      <Button buttonStyles="outlined">Hola mundo</Button>
      <Button buttonStyles="ghost">Hola mundo</Button>
      <Button buttonStyles="ghost" loading={true}>
        Hola mundo
      </Button>

      <Button loading={true}>Hola mundo</Button>
      <Button buttonStyles="contained" loading={true}>
        Hola mundo
      </Button>
      <Button buttonStyles="outlined" loading={true}>
        Hola mundo
      </Button>

      <Button buttonStyles="outlined" disabled={true}>
        Hola mundo
      </Button>
    </div>
  );
};

HomeContainer.defaultProps = {};

export default HomeContainer;
