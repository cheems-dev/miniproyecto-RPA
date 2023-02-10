import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Router from "./router/Router";
import "./styles/index.scss";
import "react-toastify/dist/ReactToastify.min.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
