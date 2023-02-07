import React from "react";

import { Outlet } from "react-router-dom";

import Navbar from "./global/navbar";

const Layout: React.FC = () => {
  /* TODO: Pending header and footer */
  return (
    <>
      <>
        <Navbar />
        <main className="layout">
          <div className="layout__container">
            <Outlet />
          </div>
        </main>
      </>
    </>
  );
};

export default Layout;
