import React from "react";

type ButtonTypes = "outlined" | "contained" | "text" | "ghost";

interface Props {
  children: string;
  type?: ButtonTypes;
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<Props> = (props) => {
  const { children, type } = props;

  const classes = {
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

  return <button className={`button ${styleClass()}`}>{children}</button>;
};

Button.defaultProps = {
  type: "text",
};

export default Button;
