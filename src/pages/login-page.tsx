import React, { useContext } from "react";

import UserContext from "../context/users-context";

// eslint-disable-next-line @typescript-eslint/no-empty-interface, prettier/prettier
interface Props {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const LoginPage: React.FC<Props> = (props) => {
  const { login } = useContext(UserContext);

  const handleSubmit = () => {
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
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value="123456"
            id="password"
            name="password"
            required
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
