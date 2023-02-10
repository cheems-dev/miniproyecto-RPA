import { HashRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import GlobalsProvider from "./context/globals/globals.context";
import Router from "./router/Router";
import "./styles/index.scss";
import "react-toastify/dist/ReactToastify.min.css";

function App() {
  return (
    <>
      <GlobalsProvider>
        <HashRouter>
          <Router />
        </HashRouter>
        <ToastContainer />
      </GlobalsProvider>
    </>
  );
}

export default App;
