import React, { useContext } from "react";

import UserContext from "../context/users-context";

const classes = {
  form: "form",
  wrap: "form__wrap-logo",
  logo: "form__logo",
  head: "form__head",
  title: "form__title",
  description: "form__description",
  group: "form__group",
  label: "form__label",
  input: "form__input",
  submit: "form__submit",
};

const LoginPage: React.FC = () => {
  const { login } = useContext(UserContext);

  const handleSubmit = () => {
    login("jair@gmail.com", "12345", true);
  };

  return (
    <div className={classes.form}>
      <div className={classes.wrap}>
        <img className={classes.logo} src="./Logo.png" />
      </div>
      <div className={classes.head}>
        <p className={classes.title}>Hola de nuevo 👋</p>
        <p className={classes.description}>
          Con la versión premium tendrás artículos exclusivos que podrás
          disfrutar
        </p>
      </div>
      <form>
        <div className={classes.group}>
          <label className={classes.label} htmlFor="email">
            Email
          </label>
          <input
            className={classes.input}
            type="email"
            value="jair@gmail.com"
            id="email"
            name="email"
            required
          />
        </div>
        <div className={classes.group}>
          <label className={classes.label} htmlFor="password">
            Password
          </label>
          <input
            className={classes.input}
            type="password"
            value="123456"
            id="password"
            name="password"
            required
          />
        </div>
        <button onClick={handleSubmit} className={classes.submit} type="submit">
          Ingresar
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
