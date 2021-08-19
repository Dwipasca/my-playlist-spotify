// ? lib thrid party
import React from "react";
import { Route, Redirect } from "react-router-dom";

// ? components
import Navbar from "components/navbar";

// ? redux
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
