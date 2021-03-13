import React from "react";
import { Redirect, Route } from "react-router-dom";

const RouteWithSubRoutes = (route) => {
  return (
    <Route
      path={route.path}
      render={(props) =>
        route.isAuthRequired ? (
          true ? (
            <route.component {...props} routes={route.routes} />
          ) : (
            <Redirect to="/" />
          )
        ) : (
          <route.component {...props} routes={route.routes} />
        )
      }
    />
  );
};

export default RouteWithSubRoutes;
