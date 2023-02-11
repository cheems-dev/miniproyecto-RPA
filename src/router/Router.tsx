import React, { useContext, memo } from "react";

import { Navigate, Route, Routes } from "react-router-dom";

import Layout from "../components/layout";
import ROUTES from "../config/constants";
import UserContext from "../context/users/users-context";
import HomePage from "../pages/home-page";
import LoginPage from "../pages/login-page";
import PremiumNew from "../pages/premium-new";
import PremiumPage from "../pages/premium-page";

const Router: React.FC = () => {
  const { user } = useContext(UserContext);
  const noAuthRoutes = () => {
    return (
      <>
        <Route path={ROUTES.ROUTES.ENTRY_PATH} element={<HomePage />} />
        <Route path={ROUTES.ROUTES.AUTH} element={<LoginPage />} />
      </>
    );
  };

  const authRoutes = () => {
    return (
      <>
        <Route path={ROUTES.ROUTES.ENTRY_PATH} element={<HomePage />} />
        <Route path={ROUTES.ROUTES.PREMIUM} element={<PremiumPage />} />
        <Route path={ROUTES.ROUTES.PREMIUM_NEW_ID} element={<PremiumNew />} />
      </>
    );
  };
  return (
    <>
      <Routes>
        {!user.authenticated ? (
          <>
            <Route element={<Layout />}>{noAuthRoutes()}</Route>
            <Route
              path={ROUTES.ROUTES.DEFAULT_ROUTE}
              element={<Navigate to={ROUTES.ROUTES.ENTRY_PATH} />}
            />
            <Route
              path={ROUTES.ROUTES.AUTH_PROTECTION}
              element={<Navigate to={ROUTES.ROUTES.AUTH_DEFAULT} />}
            />
          </>
        ) : (
          <>
            <Route element={<Layout />}>{authRoutes()}</Route>
            <Route
              path={ROUTES.ROUTES.DEFAULT_ROUTE}
              element={<Navigate to={ROUTES.ROUTES.PREMIUM} />}
            />
          </>
        )}
      </Routes>
    </>
  );
};

Router.defaultProps = {};

export default memo(Router);
