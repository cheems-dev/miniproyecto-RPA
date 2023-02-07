import React from "react";

import { LoadingOutlined } from "@ant-design/icons";

type ButtonStylesTypes = "outlined" | "contained" | "text" | "ghost";
type ButtonTypes = "submit" | "button" | "reset";

interface Props {
  children: string;
  buttonStyles?: ButtonStylesTypes;
  type?: ButtonTypes;
  onClick?: () => void;
  endIcon?: React.ReactNode;
  startIcon?: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
}

const classes = {
  button: "button",
};

const Button: React.FC<Props> = (props) => {
  const { children, buttonStyles = "text", type = "button", disabled } = props;
  const { loading, startIcon, endIcon, onClick } = props;

  const renderIconStart = () => (loading ? <LoadingOutlined /> : startIcon);
  const renderChildren = () => (loading ? "Cargando" : children);

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || !!loading}
      className={`${classes.button} button__${buttonStyles}`}
    >
      {renderIconStart()}
      {renderChildren()}
      {endIcon}
    </button>
  );
};

export default Button;
