import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RequireAuth from "./RequireAuth";
import { withLoading } from "../hocs/withLoading.hoc";
import MainLayout from "../components/layouts/MailLayout";
import LoginPage from "../pages/Login";

export const DASHBOARD_PATH = "/";

const AuthLayoutFallback = React.lazy(
  () => import("components/layouts/AuthLayout")
);
const DashboardPage = React.lazy(() => import("pages/Dashboard"));
const PageNotFoundPage = React.lazy(() => import("pages/404Page"));
const Logout = React.lazy(() => import("./Logout"));
const PageNotFound = withLoading(PageNotFoundPage);
const LogoutFallback = withLoading(Logout);

export const AppRouter: React.FC = () => {
  const protectedLayout = (
    <RequireAuth>
      <MainLayout />
    </RequireAuth>
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route path={DASHBOARD_PATH} element={protectedLayout}>
          <Route index element={<DashboardPage />} />
        </Route>

        <Route path="/auth" element={<AuthLayoutFallback />}>
          <Route path="login" element={<LoginPage />} />
        </Route>
        <Route path="/logout" element={<LogoutFallback />} />
        <Route path="/404" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
