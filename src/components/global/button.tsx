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
  };

  const renderIconStart = () => (loading ? <LoadingOutlined /> : startIcon);
  const renderChildren = () => (loading ? "Cargando" : children);

  return (
    <button
      onClick={onClick}
      disabled={disabled || !!loading}
      className={`${classes.button} button__${type}`}
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
