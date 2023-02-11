import React, { useContext, useState } from "react";

import { UserOutlined, MenuOutlined } from "@ant-design/icons";
import { CloseOutlined, LogoutOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

import Button from "./button";
import CONSTANTS from "../../config/constants";
import useGlobals from "../../context/globals/globals.hooks";
import UserContext from "../../context/users/users-context";
import useWindow from "../../hooks/useWindow";
import HELPERS from "../../utils/helpers";

const { countries, categories } = HELPERS;
const { PAGE_BY_DEFAULT } = CONSTANTS;

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
const { BREAKPOINTS } = CONSTANTS;

const Navbar: React.FC = () => {
  const { user, logout } = useContext(UserContext);
  const { setQuery } = useGlobals();
  const [open, setOpen] = useState(false);
  const [windowSize] = useWindow();

  const handleLogout = () => {
    setQuery({
      country: countries[0].id,
      category: categories[0].id,
      page: PAGE_BY_DEFAULT,
    });
    logout();
  };

  const renderHamburgerMenu = (className: string, onClick: () => void) =>
    open ? (
      <CloseOutlined className={className} onClick={onClick} />
    ) : (
      <MenuOutlined className={className} onClick={onClick} />
    );

  const styleClass = () =>
    open && windowSize[0] <= BREAKPOINTS.tablet
      ? classes.menu__responsive_open
      : "";

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
          {!user.authenticated ? (
            <Link to="/auth/login">
              <Button buttonStyles="contained" startIcon={<UserOutlined />}>
                Inicia sesión
              </Button>
            </Link>
          ) : (
            <Button
              onClick={() => handleLogout()}
              buttonStyles="contained"
              endIcon={<LogoutOutlined />}
            >
              Cerrar sesión
            </Button>
          )}
        </div>
        {renderNavbarResponsive(() => setOpen(!open))}
      </nav>
    </>
  );
};

export default Navbar;
