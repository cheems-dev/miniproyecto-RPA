import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import GlobalsProvider from "./context/globals/globals.context";
import Router from "./router/Router";
import "./styles/index.scss";
import "react-toastify/dist/ReactToastify.min.css";

function App() {
  return (
    <GlobalsProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <ToastContainer />
    </GlobalsProvider>
  );
}

export default App;
