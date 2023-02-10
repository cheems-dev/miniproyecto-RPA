import CONSTANTS from "../config/constants";

const { TOTAL_NEW_BY_DEFAULT } = CONSTANTS;

const getTotalPagination = (totalResults: number): number[] => {
  const result = Math.ceil(totalResults / TOTAL_NEW_BY_DEFAULT);
  return Array.from(Array(result), (_, x) => x + 1);
};

export default getTotalPagination;
