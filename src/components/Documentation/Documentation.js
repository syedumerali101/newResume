import { Avatar, Grid, TextField } from "@material-ui/core";
import React from "react";
import AvatarImg from "../../assets/images/avatar.png";
import { BiPlus } from "react-icons/bi";
import { AiFillCar } from "react-icons/ai";
import { BsGeo } from "react-icons/bs";
import { BiTime } from "react-icons/bi";
import { BsFillBriefcaseFill, BsUpload } from "react-icons/bs";
import "./documentation.scss";
import CoverLetter from "../../assets/images/cover_letter.png";
import PATHS from "../../router/paths";
import { NavLink, Switch, useRouteMatch } from "react-router-dom";
import { RouteWithSubRoutes } from "../../router";

const TABS = [
  { title: "Timeline", path: PATHS.TIMELINE },
  { title: "Video", path: PATHS.VIDEO },
  { title: "My Assets", path: `${PATHS.MY_ASSETS}` },
  { title: "Professional Summary", path: `${PATHS.PROFESSIONAL_SUMMARY}` },
];

const Documentation = ({ routes }) => {
  const { path } = useRouteMatch();

  return (
    <div className="documentation">
      <Grid className="documentation__gridContainer" container>
        <Grid
          item
          xs={2}
          className="createSkilledger__gridItem createSkilledger__gridItem--avatarGrid"
        >
          <label
            htmlFor="profile-btn"
            // className="createSkilledger__gridItem__avatar"
          >
            <Avatar
              variant="rounded"
              htmlFor="profile-btn"
              src={AvatarImg}
              alt="avatar"
              className="documentation__avatar__img"
            />
          </label>
        </Grid>
        <Grid
          item
          xs={5}
          className="createSkilledger__gridItem createSkilledger__gridItem--secondGrid"
        >
          <div className="title--lg">John Doe</div>
          <div className="createSkilledger__gridItem__iconContainer">
            <span className="createSkilledger__gridItem__iconContainer__icon">
              <AiFillCar size={25} />
            </span>
            <span>Vehicle</span>
          </div>
          <div className="createSkilledger__gridItem__iconContainer">
            <span className="createSkilledger__gridItem__iconContainer__icon">
              <BsGeo size={25} />
            </span>
            <span>National</span>
          </div>
          <div className="createSkilledger__gridItem__iconContainer">
            <span className="createSkilledger__gridItem__iconContainer__icon">
              <BiTime size={25} />
            </span>
            <span>Immediately</span>
          </div>
          <div className="createSkilledger__gridItem__iconContainer">
            <span className="createSkilledger__gridItem__iconContainer__icon">
              <BsFillBriefcaseFill size={25} />
            </span>
            <span>Job seeker</span>
          </div>
        </Grid>
        <Grid
          item
          xs={5}
          className="createSkilledger__gridItem createSkilledger__gridItem--thirdGrid"
        >
          <div className="title--lg">Manager Senior</div>
          <div className="documentation__docImages">
            <div>
              <img
                className="documentation__docImages__img"
                src={CoverLetter}
                alt="coverLetter"
              />
              <p>My Resume</p>
            </div>
            <div>
              <img
                className="documentation__docImages__img"
                src={CoverLetter}
                alt="coverLetter"
              />
              <p>My Motivational Letter</p>
            </div>
          </div>
        </Grid>
      </Grid>
      <div className="createSkilledger__tabs">
        {TABS.map((tab) => (
          <NavLink
            activeClassName="createSkilledger__tabs__tab--active"
            to={`${path}/${tab.path}`}
            key={tab.path}
            className="createSkilledger__tabs__tab link"
          >
            {tab.title}
          </NavLink>
        ))}
      </div>
      <div className="createSkilledger__content">
        <Switch>
          {routes.map((route) => (
            <RouteWithSubRoutes key={route.key} {...route} />
          ))}
        </Switch>
      </div>
    </div>
  );
};

export default Documentation;
