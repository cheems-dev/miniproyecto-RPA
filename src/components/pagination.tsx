import React from "react";

import Button from "./global/button";
import useGlobals from "../context/globals/globals.hooks";

interface Props {
  totalPages: number[];
}

const classes = {
  button: "pagination__button",
  container: "pagination__container",
};

const Pagination: React.FC<Props> = (props) => {
  const { totalPages } = props;

  const { query, setQuery } = useGlobals();

  const handleSetPage = (value: number) => {
    if (value !== query.page) {
      setQuery({ ...query, page: value });
    }
  };

  return (
    <div className={classes.container}>
      {totalPages.map((value, index) => (
        <Button
          key={index}
          className={classes.button}
          onClick={() => handleSetPage(value)}
          buttonStyles={value === query.page ? "contained" : "ghost"}
        >
          {String(value)}
        </Button>
      ))}
    </div>
  );
};

export default Pagination;
