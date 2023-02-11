const getTotalPagination = (
  totalResults: number,
  totalDocs: number
): number[] => {
  const result = Math.ceil(totalResults / totalDocs);
  return Array.from(Array(result), (_, x) => x + 1);
};

export default getTotalPagination;
