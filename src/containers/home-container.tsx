import React from "react";

import { CloudDownloadOutlined } from "@ant-design/icons";

import Button from "../components/global/button";

const HomeContainer: React.FC = () => {
  return (
    <div>
      <Button>Hola mundo</Button>
      <Button type="contained" endIcon={<CloudDownloadOutlined />}>
        Hola mundo
      </Button>
      <Button type="outlined">Hola mundo</Button>
      <Button type="ghost">Hola mundo</Button>
      <Button type="ghost" loading={true}>
        Hola mundo
      </Button>

      <Button loading={true}>Hola mundo</Button>
      <Button type="contained" loading={true}>
        Hola mundo
      </Button>
      <Button type="outlined" loading={true}>
        Hola mundo
      </Button>

      <Button type="outlined" disabled={true}>
        Hola mundo
      </Button>
    </div>
  );
};

HomeContainer.defaultProps = {};

export default HomeContainer;
