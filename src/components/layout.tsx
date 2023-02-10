import React from "react";

import { Outlet } from "react-router-dom";

import Footer from "./global/footer";
import Navbar from "./global/navbar";

const Layout: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className="layout">
        <div className="layout__container">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
