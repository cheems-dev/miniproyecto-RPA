import React from "react";

import { UserOutlined, MenuOutlined } from "@ant-design/icons";

import Button from "./button";

interface Props {
  urls?: string[]; // requerido
}

const classes = {
  navbar: "navbar",
  container: "navbar__container",
  icon: "navbar__icon",
  hidden: "navbar__hidden",
  cursor: "navbar__cursor",
};

const Navbar: React.FC<Props> = (props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { urls } = props;

  /* TODO: Pending responsive */
  return (
    <nav className={classes.navbar}>
      <div className={classes.container}>
        <MenuOutlined className={classes.cursor} />
        <img
          className={`${classes.icon} ${classes.hidden}`}
          src="/Logo.png"
          alt="Logo de la editorial web"
        />
        <div className={classes.hidden}>
          <Button>Inicio</Button>
          <Button>Categorias</Button>
          <Button>Autores</Button>
        </div>
        <Button buttonStyles="contained" startIcon={<UserOutlined />}>
          Inicia sesión
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
