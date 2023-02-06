import React from "react";

import { LoadingOutlined } from "@ant-design/icons";

type ButtonTypes = "outlined" | "contained" | "text" | "ghost";

interface Props {
  children: string;
  type?: ButtonTypes;
  onClick?: () => void;
  endIcon?: React.ReactNode;
  startIcon?: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
}

const Button: React.FC<Props> = (props) => {
  const { children, type, disabled, loading, onClick } = props;
  const { startIcon, endIcon } = props;

  const classes = {
    button: "button",
    contained: "button__contained",
    outlined: "button__outlined",
    ghost: "button__ghost",
    text: "button__text",
  };

  const styleClass = () => {
    switch (type) {
      case "contained":
        return classes.contained;

      case "outlined":
        return classes.outlined;

      case "ghost":
        return classes.ghost;

      case "text":
        return classes.text;

      default:
        return classes.text;
    }
  };

  const renderIconStart = () => (loading ? <LoadingOutlined /> : startIcon);
  const renderChildren = () => (loading ? "Cargando" : children);

  return (
    <button
      onClick={onClick}
      disabled={disabled || !!loading}
      className={`${classes.button} ${styleClass()}`}
    >
      {renderIconStart()}
      {renderChildren()}
      {endIcon}
    </button>
  );
};

Button.defaultProps = {
  type: "text",
};

export default Button;
