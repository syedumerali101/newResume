import React from "react";
import { Link, Switch, useLocation } from "react-router-dom";
import Person from "../../assets/images/person.png";
import Person2 from "../../assets/images/person2.png";
import AuthWallpaper from "../../assets/images/authWallpaper.png";
import { RouteWithSubRoutes } from "../../router";
import "./auth.scss";

const Auth = ({ routes }) => {
  console.log("route", routes);
  const { pathname } = useLocation();
  return (
    <div className="auth__container">
      <div className="auth__container__left">
        {/* <Link to="/login">Login</Link> */}
        {/* <Link to="/register">Register</Link> */}
        <Switch>
          {routes.map((route) => (
            <RouteWithSubRoutes key={route.key} {...route} />
          ))}
        </Switch>
      </div>
      <div className="auth__container__right">
        <div className="auth__container__right__tabs">
          <div className="auth__container__right__tabs__tabCol auth__container__right__tabs__tabColLeft">
            <div className="auth__container__right__tabs__tabCol__tab">
              <span>CV Builder</span>
            </div>
            <div className="auth__container__right__tabs__tabCol__tab">
              <span>CV Video</span>
            </div>
            <div className="auth__container__right__tabs__tabCol__tab">
              <span>Practice</span>
            </div>
          </div>
          <div className="auth__container__right__tabs__tabCol auth__container__right__tabs__tabColRight">
            <div className="auth__container__right__tabs__tabCol__tab">
              <span>CV Timeline</span>
            </div>
            <div className="auth__container__right__tabs__tabCol__tab">
              <span>Letter Builder</span>
            </div>
            <div className="auth__container__right__tabs__tabCol__tab">
              <span>Docledger</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
