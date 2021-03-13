import React from "react";
import { NavLink, Switch, useRouteMatch } from "react-router-dom";
import { RouteWithSubRoutes } from "../../router";
import paths from "../../router/paths";
import "./mySkilledger.scss";

const TABS = [
  {
    title: "Create New Online Skilledger",
    path: `${paths.CREATE_NEW_ONLINE_SKILLEDGER}/${paths.TIMELINE}`,
  },
  {
    title: "Digital Online Skilledger List",
    path: paths.DIGITAL_SKILLEDGER_LIST,
  },
  { title: "CV Skilledger List", path: paths.CV_SKILLEDGER_LIST },
];

const MySkilledger = ({ routes }) => {
  const { path } = useRouteMatch();

  return (
    <div className="mySkilledger">
      <div className="myCertifiedCareer__tabs">
        {TABS.map((tab) => (
          <NavLink
            key={tab.path}
            activeClassName="myCertifiedCareer__tabs__tabLink--active"
            className="link myCertifiedCareer__tabs__tabLink"
            to={`${path}/${tab.path}`}
          >
            {tab.title}
          </NavLink>
        ))}
      </div>
      <div className="mySkilledger__content">
        <Switch>
          {routes.map((route) => (
            <RouteWithSubRoutes key={route.key} {...route} />
          ))}
        </Switch>
      </div>
    </div>
  );
};

export default MySkilledger;
