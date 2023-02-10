import React, { useContext, memo } from "react";

import { Navigate, Route, Routes } from "react-router-dom";

import Layout from "../components/layout";
import UserContext from "../context/users-context";
import HomePage from "../pages/home-page";
import LoginPage from "../pages/login-page";
import PremiumPage from "../pages/premium-page";

const Router: React.FC = () => {
  const { user } = useContext(UserContext);
  const noAuthRoutes = () => {
    return (
      <>
        <Route path="/" element={<HomePage />} />
        <Route path="auth" element={<LoginPage />} />
      </>
    );
  };

  const authRoutes = () => {
    return (
      <>
        <Route path="/" element={<HomePage />} />
        <Route path="premium" element={<PremiumPage />} />
      </>
    );
  };
  return (
    <>
      <Routes>
        {!user.authenticated ? (
          <>
            <Route element={<Layout />}>{noAuthRoutes()}</Route>
            <Route path="/*" element={<Navigate to="/" />} />
            <Route path="auth/*" element={<Navigate to="/auth" />} />
          </>
        ) : (
          <>
            <Route element={<Layout />}>{authRoutes()}</Route>
            <Route path="/*" element={<Navigate to="premium" />} />
          </>
        )}
      </Routes>
    </>
  );
};

Router.defaultProps = {};

export default memo(Router);
