import React, { useContext } from "react";

import CONSTANTS from "../config/constants";
import useGlobals from "../context/globals/globals.hooks";
import UserContext from "../context/users/users-context";
import HELPERS from "../utils/helpers";

const { countriesPremium, categoriesPremium } = HELPERS;
const { PAGE_BY_DEFAULT } = CONSTANTS;

// eslint-disable-next-line @typescript-eslint/no-empty-interface, prettier/prettier
interface Props {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const LoginPage: React.FC<Props> = (props) => {
  const { login } = useContext(UserContext);
  const { setQuery } = useGlobals();

  const handleSubmit = () => {
    setQuery({
      country: countriesPremium[0].id,
      category: categoriesPremium[0].id,
      page: PAGE_BY_DEFAULT,
    });
    login("jair@gmail.com", "12345", true);
  };

  return (
    <div className="form-container">
      <div className="form-logo">
        <img className="logo" src="./Logo.png" />
      </div>
      <div className="form-head">
        <p className="form-title">Hola de nuevo 👋</p>
        <p className="form-description">
          Con la versión premium tendrás artículos exclusivos que podrás
          disfrutar
        </p>
      </div>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            value="jair@gmail.com"
            id="email"
            name="email"
            readOnly
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value="123456"
            id="password"
            name="password"
            readOnly
          />
        </div>
        <button onClick={handleSubmit} className="form-submit" type="submit">
          Ingresar
        </button>
      </form>
    </div>
  );
};

LoginPage.defaultProps = {};

export default LoginPage;
