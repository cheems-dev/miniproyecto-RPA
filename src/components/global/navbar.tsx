import React from "react";

import { UserOutlined } from "@ant-design/icons";

import Button from "./button";

interface Props {
  urls?: string[]; // requerido
}

const classes = {
  navbar: "navbar",
  container: "navbar__container",
  icon: "navbar__icon",
};

const Navbar: React.FC<Props> = (props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { urls } = props;

  return (
    <nav className={classes.navbar}>
      <div className={classes.container}>
        <img
          className={classes.icon}
          src="/Logo.png"
          alt="Logo de la editorial web"
        />
        <div>
          <Button>Inicio</Button>
          <Button>Categorias</Button>
          <Button>Autores</Button>
          <Button>Libre</Button>
        </div>
        <Button buttonStyles="contained" startIcon={<UserOutlined />}>
          Inicia sesión
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
