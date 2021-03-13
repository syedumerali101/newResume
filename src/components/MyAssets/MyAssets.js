import { Grid, Switch } from "@material-ui/core";
import React, { useState } from "react";
import { Switch as RouterSwitch } from "react-router-dom";
import PATHS from "../../router/paths";
import { NavLink, useLocation, useRouteMatch } from "react-router-dom";

import "./myAssets.scss";
import { RouteWithSubRoutes } from "../../router";

const TABS = [
  {
    title: "Skills acquired",
    path: PATHS.SKILLS_ACQUIRED,
    key: "skillsAcquired",
  },
  {
    title: "Personal skills",
    path: PATHS.PERSONAL_SKILLS,
    key: "personalSkills",
  },
  {
    title: "Computer Skills",
    path: PATHS.COMPUTER_SKILLS,
    key: "computerSkills",
  },
  {
    title: "Language",
    path: PATHS.LANGUAGE,
    key: "language",
  },
];

const MyAssets = ({ routes }) => {
  const [tabs, setTabs] = useState({
    skillsAcquired: false,
    personalSkills: false,
    computerSkills: false,
    language: false,
  });
  const { pathname } = useLocation();
  const { path } = useRouteMatch();
  console.log(pathname);
  return (
    <div className="myAssets">
      <Grid container>
        <Grid
          className="myAssets__gridItem myAssets__gridItem__left"
          item
          xs={7}
        >
          <div className="myAssets__tabs">
            {TABS.map((tab, index) => (
              <NavLink
                to={`${path}/${tab.path}`}
                key={tab.path}
                className="myAssets__tab"
                activeClassName="myAssets__tab--active"
              >
                <span>{tab.title}</span>
                <Switch
                  size="small"
                  // checked={state.checkedB}
                  // onChange={handleChange}
                  color="primary"
                  name="checkedB"
                  inputProps={{ "aria-label": "primary checkbox" }}
                />
                {pathname.includes(tab.path) && (
                  <span className="invisible-border"></span>
                )}
              </NavLink>
            ))}
          </div>
        </Grid>
        {/* <Grid
          className="myAssets__gridItem myAssets__gridItem__right"
          item
          xs={5}
        >
          <div className="myAssets__title">Add From Docledger List</div>
        </Grid> */}
      </Grid>
      <div className="myAssets__content">
        <RouterSwitch>
          {routes.map((route) => (
            <RouteWithSubRoutes key={route.key} {...route} />
          ))}
        </RouterSwitch>
      </div>
    </div>
  );
};

export default MyAssets;
