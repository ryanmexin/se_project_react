import React from "react";
import { Route, Redirect } from "react-router-dom";
import { AppContext } from "../../contexts/AppContext";

const ProtectedRoute = ({ component: Component, ...props }) => {
  const value = React.useContext(AppContext);
  return (
    <Route
      {...props}
      render={(props) =>
        value && value.state.isLoggedIn === true ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export default ProtectedRoute;
