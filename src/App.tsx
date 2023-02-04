import { HashRouter } from "react-router-dom";

import Router from "./router/Router";
import "./styles/index.scss";

function App() {
  /* TODO: Pending react-query and context-API */
  return (
    <HashRouter>
      <Router />
    </HashRouter>
  );
}

export default App;
