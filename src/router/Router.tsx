import React, { lazy, memo } from "react";

import { Route, Routes } from "react-router-dom";

import Layout from "../components/layout";

// Root routes
const Home = lazy(() => import("../pages/home-page"));

const Router: React.FC = () => {
  const noAuthRoutes = () => {
    return (
      <>
        <Route path="/" element={<Home />} />
      </>
    );
  };

  return (
    /* TODO: Pending */
    /*  <Suspense fallback={<Backdrop isLoading={true} />}> */
    <Routes>
      <Route element={<Layout />}>{noAuthRoutes()}</Route>
    </Routes>
    /*    </Suspense> */
  );
};

Router.defaultProps = {};

export default memo(Router);
