import React from "react";
import { Route, Switch } from "react-router-dom";
import routes from "./routeConfig";
import RouteWithSubRoutes from "./RouteWithSubRoutes";

const Routes = () => {
  return (
    <Switch>
      {routes.map((route) => (
        <RouteWithSubRoutes key={route.path} {...route} />
      ))}
      <Route component={() => <h1>404</h1>} />
    </Switch>
  );
};

export default Routes;
