import ReactDOM from "react-dom/client";

import App from "./App";
import AxiosInterceptor from "./config/interceptor";

AxiosInterceptor();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <App />
);
