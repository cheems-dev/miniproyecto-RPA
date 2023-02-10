import ReactDOM from "react-dom/client";

import App from "./App";
import AxiosInterceptor from "./config/interceptor";
import UserProvider from "./context/users-provider";

AxiosInterceptor();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <UserProvider>
    <App />
  </UserProvider>
);
