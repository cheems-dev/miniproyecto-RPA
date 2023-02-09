const formatDate = (fecha: string) => {
  const date = new Date(fecha);
  const formattedDate = date.toLocaleDateString("es-ES", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
  return formattedDate;
};

export default formatDate;
