import React from "react";
import { PageTitle } from "../components/common/PageTitle";
import Login from "../components/pageComponents/Login";

const LoginPage: React.FC = () => {
  return (
    <>
      <PageTitle>Login</PageTitle>
      <Login />
    </>
  );
};

export default LoginPage;
