import React from "react";
import { useLocation, Switch, useHistory } from "react-router-dom";
import { RouteWithSubRoutes } from "../../router";
import { HiOutlineArrowLeft } from "react-icons/hi";
import PitcherVideo from "./PitcherVideo";

import "./pitcherVideoContainer.scss";

const PitcherVideoContainer = ({ routes }) => {
  const { pathname } = useLocation();
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <div className="pitcherVideoContainer">
      {pathname !== "/dashboard/pitcher-video" ? (
        <div onClick={goBack} className="pitcherVideoContainer__backBtn">
          <HiOutlineArrowLeft
            className="pitcherVideoContainer__back"
            size={30}
          />
        </div>
      ) : null}
      {pathname === "/dashboard/pitcher-video" ? <PitcherVideo /> : null}
      <Switch>
        {routes.map((route) => (
          <RouteWithSubRoutes key={route.key} {...route} />
        ))}
      </Switch>
    </div>
  );
};

export default PitcherVideoContainer;
