import React, { useState } from "react";

import { UserOutlined, MenuOutlined, CloseOutlined } from "@ant-design/icons";

import Button from "./button";
/* import useWindow from "../../hooks/useWindow"; */
import HELPERS from "../../utils/helpers";

const classes = {
  navbar: "navbar",
  container: "navbar__container",
  icon: "navbar__icon",
  hidden: "navbar__hidden",
  hamburger: "navbar__responsive-icon",
  menu__responsive: "navbar__responsive-menu",
  menu__responsive_open: "navbar__responsive-menu_open",
};

const { links } = HELPERS;

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  /*  const [windowSize] = useWindow();
   */
  const renderHamburgerMenu = (className: string, onClick: () => void) =>
    open ? (
      <CloseOutlined className={className} onClick={onClick} />
    ) : (
      <MenuOutlined className={className} onClick={onClick} />
    );

  /* && windowSize[0] <= BREAKPOINTS.tablet */
  const styleClass = () => (open ? classes.menu__responsive_open : "");

  const renderNavbarResponsive = (onClick: () => void) => (
    <div className={`${classes.menu__responsive} ${styleClass()}`}>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <a onClick={onClick} href={link.route}>
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <>
      <nav className={classes.navbar}>
        <div className={classes.container}>
          {renderHamburgerMenu(classes.hamburger, () => setOpen(!open))}
          <img
            className={`${classes.icon} ${classes.hidden}`}
            src="/Logo.png"
            alt="Logo de la editorial web"
          />
          <div className={classes.hidden}>
            {links.map((link, index) => (
              <Button key={index}>{link.name}</Button>
            ))}
          </div>
          <Button buttonStyles="contained" startIcon={<UserOutlined />}>
            Inicia sesión
          </Button>
        </div>
        {renderNavbarResponsive(() => setOpen(!open))}
      </nav>
    </>
  );
};

export default Navbar;
