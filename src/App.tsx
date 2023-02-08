import { HashRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Router from "./router/Router";
import "./styles/index.scss";
import "react-toastify/dist/ReactToastify.min.css";

function App() {
  return (
    <>
      <HashRouter>
        <Router />
      </HashRouter>
      <ToastContainer />
    </>
  );
}

export default App;
