type TypeWithKey<T> = { [key: string]: T };

const getValidationError = (errorCode: string) => {
  const codeMatcher: TypeWithKey<string> = {
    ERR_BAD_REQUEST:
      "La solicitud rechazada, falta un parámetro o estaba mal configurado.",
    UNAUTHORIZED: "Faltaba la clave de API en la solicitud o no era correcta.",
    TOO_MANY_REQUESTS:
      "Hiciste demasiadas solicitudes dentro de un período de tiempo y tu tarifa fue limitada. Retroceda por un tiempo.",
    SERVER_ERROR: "Algo salió mal de nuestro lado.",
  };

  return codeMatcher[errorCode];
};

export default getValidationError;
