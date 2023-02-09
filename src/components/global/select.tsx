import React from "react";

interface Options {
  id: string;
  value: string;
}

interface Props {
  label: string;
  options: Options[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: (event: any) => void;
  id: string;
}

const classes = {
  select: "select",
  container: "select__container",
  option: "select__option",
  label: "select__label",
};

const Select: React.FC<Props> = (props) => {
  const { label, options, onChange, id } = props;

  return (
    <div className={classes.container}>
      <label htmlFor={id} className={classes.label}>
        {label}
      </label>
      <select
        className={classes.select}
        id={id}
        name="country"
        onChange={onChange}
      >
        {options.map((option, index) => (
          <option className={classes.option} key={index} value={option.id}>
            {option.value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
