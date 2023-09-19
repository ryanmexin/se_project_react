import React from "react";
import { Route, Redirect } from "react-router-dom";
import { AppContext } from "../AppContext";

const ProtectedRoute = ({ component: Component, ...props }) => {
  const value = React.useContext(AppContext);
  return (
    <Route>
      {() =>
        value.state.loggedIn === true ? (
          <Component {...props} userData={value.state.userData} />
        ) : (
          <Redirect to="./login" />
        )
      }
    </Route>
  );
};

export default ProtectedRoute;