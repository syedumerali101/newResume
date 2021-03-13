import { Tab, Tabs } from "@material-ui/core";
import React from "react";
import { NavLink, Switch, useLocation, useRouteMatch } from "react-router-dom";
import { RouteWithSubRoutes } from "../../router";

import "./myCertifiedCareer.scss";

const TABS = [
  { title: "Career List", path: "career-list" },
  { title: "Interactive Timeline", path: "interactive-timeline" },
];

const MyCertifiedCareer = ({ routes }) => {
  const { path } = useRouteMatch();

  console.log(path);
  return (
    <div className="myCertifiedCareer">
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
      <div className="myCertifiedCareer__content">
        <Switch>
          {routes.map((route) => (
            <RouteWithSubRoutes key={route.key} {...route} />
          ))}
        </Switch>
      </div>
      {/* {TABS.map((tab) => (
          <NavLink
            activeClassName="myCertifiedCareer__tabs__link--active"
            className="link myCertifiedCareer__tabs__link"
            key={tab.id}
            to={`${path}/${tab.path}`}
          >
            {tab.title}
          </NavLink>
        ))} */}
    </div>
  );
};

export default MyCertifiedCareer;
