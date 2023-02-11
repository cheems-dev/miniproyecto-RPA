import { axiosDefault } from "./axios";
import getValidationError from "../utils/get-validation-error";
import ToastUtilities from "../utils/toast-manager";

const AxiosInterceptor = () => {
  axiosDefault.interceptors.response.use(
    (response) => {
      return response.data;
    },
    (error) => {
      ToastUtilities.error(getValidationError(error.code));
      return Promise.reject(error);
    }
  );
};

export default AxiosInterceptor;
