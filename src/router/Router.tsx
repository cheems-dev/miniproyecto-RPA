import React, { lazy, memo } from "react";

import { Route, Routes } from "react-router-dom";

// Root routes
const Home = lazy(() => import("../containers/home-container"));

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
    <Routes>{noAuthRoutes()}</Routes>
    /*    </Suspense> */
  );
};

Router.defaultProps = {};

export default memo(Router);
