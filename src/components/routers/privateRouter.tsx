import Navbar from "components/navbar";
import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAppSelector } from "store/index";

const PrivateRoute = ({ ...routerProps }) => {
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  if (isAuthenticated) {
    return (
      <>
        <Navbar />
        <Route {...routerProps} />
      </>
    );
  }
  return <Redirect to="/" />;
};

export default PrivateRoute;
