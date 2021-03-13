import { Grid } from "@material-ui/core";
import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { NavLink } from "react-router-dom";
import { addEducationAction } from "redux/actions/userLoginAction";

import { BASE_URL } from "../../redux/services/config";
import { API_INTERACTIVE_TIMELINE } from "../../redux/services/links";

import { getInteractiveTimelineAction } from "../../redux/actions/userLoginAction";

import ListItem from "../ListItem";
import ListItemEducation from "../ListItem/ListItemEducation";
import ListItemExperience from "../ListItem/ListItemExperience";
import ListItemFormation from "../ListItem/ListItemFormation";

import InteractiveTimeline from "../MyCertifiedCareer/InteractiveTimeline";

import "./timeline.scss";

const Timeline = () => {
  const [usersEducationData, setUsersEducationData] = useState([]);
  const [usersExperienceData, setUsersExperienceData] = useState([]);
  const [usersFormationData, setUsersFormationData] = useState([]);
  const [educationTypeId, setEducationTypeId] = useState(0);
  const [type, setType] = useState(1);

  const dispatch = useDispatch();

  const getInteractiveTimeline = useSelector(
    (state) => state.getInteractiveTimeline,
  );

  const { loading, error, userInteractiveTimeline } = getInteractiveTimeline;

  useEffect(() => {
    dispatch(getInteractiveTimelineAction());
    if (userInteractiveTimeline) {
      setUsersEducationData(userInteractiveTimeline.data.education);
      setUsersExperienceData(userInteractiveTimeline.data.experience);
      setUsersFormationData(userInteractiveTimeline.data.formation);
    } else {
      console.log(userInteractiveTimeline, "didn't exist");
    }
  }, [dispatch]);

  const arrayOfUsersEducationData = Object.values(usersEducationData);
  const arrayOfUsersExperienceData = Object.values(usersExperienceData);
  const arrayOfUsersFormationData = Object.values(usersFormationData);

  const TABS = [
    {
      id: 1,
      title: "Timeline List",
    },
    {
      id: 2,
      title: "Interactive Timeline",
    },
  ];

  return (
    <div className="timeline">
      <div
        style={{ justifyContent: "center", marginBottom: 40 }}
        className="createSkilledger__tabs"
      >
        {TABS.map((tab) => (
          <div
            key={tab.id}
            style={{ margin: "0 10px" }}
            onClick={() => setType(tab.id)}
            className={`createSkilledger__tabs__tab link ${
              type === tab.id && "createSkilledger__tabs__tab--active"
            }`}
          >
            {tab.title}
          </div>
        ))}
      </div>

      {type === 1 ? (
        <div className="timeline__grid">
          <Grid container spacing={3}>
            <Grid item xs={12} lg={4} xl={12}>
              <div className="timeline__grid__title">Education</div>
              <div className="timeline__grid__list">
                {arrayOfUsersEducationData.map((x, educationTypeId) => (
                  <ListItemEducation
                    key={x.id}
                    onClick={() => setEducationTypeId(x.id)}
                    route="timeline"
                    key={x.bachelor}
                    education={{ ...x }}
                  />
                ))}
              </div>
            </Grid>
            <Grid item xs={12} lg={4} xl={12}>
              <div className="timeline__grid__title">Work Exprience</div>
              <div className="timeline__grid__list">
                {arrayOfUsersExperienceData.map((x) => (
                  <ListItemExperience
                    route="timeline"
                    key={x.bachelor}
                    experience={{ ...x }}
                  />
                ))}
              </div>
            </Grid>
            <Grid item xs={12} lg={4} xl={12}>
              <div className="timeline__grid__title">Formation</div>
              <div className="timeline__grid__list">
                {arrayOfUsersFormationData.map((x) => (
                  <ListItemFormation
                    route="timeline"
                    key={x.bachelor}
                    formation={{ ...x }}
                  />
                ))}
              </div>
            </Grid>
          </Grid>
        </div>
      ) : (
        <InteractiveTimeline />
      )}
    </div>
  );
};

export default Timeline;
