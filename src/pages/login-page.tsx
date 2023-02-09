import React, { useContext } from "react";

import UserContext from "../context/users-context";
import useForm from "../hooks/useForm";
import authService from "../services/auth.service";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

const loginFormFields = {
  email: "",
  password: "",
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const LoginPage: React.FC<Props> = (props) => {
  const { login } = useContext(UserContext);

  const { formState, onInputChange: onLoginInputChange } =
    useForm(loginFormFields);

  const handleForm = async () => {
    /*    try { */
    const { data } = await authService(formState);
    const { name, token } = data;
    login(name, token, true);
    /*   } catch (error: any) {} */
  };

  return (
    <>
      <form>
        <input
          type="email"
          name="email"
          required={true}
          onChange={onLoginInputChange}
          placeholder="Ingrese email"
        />
        <input
          type="password"
          name="password"
          required={true}
          onChange={onLoginInputChange}
          placeholder="Ingrese password"
        />
      </form>
      <button onClick={handleForm}>Loguearse</button>
    </>
  );
};

LoginPage.defaultProps = {};

export default LoginPage;
