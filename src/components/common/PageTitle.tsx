import React from "react";
import { Helmet } from "react-helmet";

interface Props {
  children: React.ReactNode;
}

export const PageTitle: React.FC<Props> = ({ children }) => {
  return (
    <Helmet>
      <title>{children} | Sinecure</title>
    </Helmet>
  );
};
