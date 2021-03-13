import React, { useState, useEffect, useRef } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { GiSandsOfTime } from "react-icons/gi";

import { IoCheckmarkCircle } from "react-icons/io5";

import "react-vertical-timeline-component/style.min.css";

import { useDispatch, useSelector } from "react-redux";

import { MdWork, MdSchool, MdStar } from "react-icons/md";

import Loader from "../../../components/Loader/loader";
import Message from "../../../components/Message/message";

import { BASE_URL } from "../../../redux/services/config";

import { getInteractiveTimelineAction } from "../../../redux/actions/userLoginAction";

import "./interactiveTimeline.scss";

const WorkIcon = () => <MdWork color="#fff" />;
const SchoolIcon = () => <MdSchool color="#fff" />;
const StarIcon = () => <MdStar color="#fff" />;

const InteractiveTimeline = () => {
  const [usersEducationData, setUsersEducationData] = useState([]);
  const [usersExperienceData, setUsersExperienceData] = useState([]);
  const [usersFormationData, setUsersFormationData] = useState([]);

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
    } else {
      console.log(userInteractiveTimeline, "didn't exist");
    }
  }, [dispatch]);

  const arrayOfUsersEducationData = Object.values(usersEducationData);
  const arrayOfUsersExperienceData = Object.values(usersExperienceData);

  return (
    <div className="interactiveTimeline">
      <VerticalTimeline className="vertical-timeline vertical-timeline-custom-line">
        {error ? (
          <Loader />
        ) : error ? (
          <Message>{error}</Message>
        ) : (
          <div>
            <div>
              {arrayOfUsersExperienceData.map((user, id) => (
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: "rgb(33, 150, 243)",
                    color: "#fff",
                  }}
                  contentArrowStyle={{
                    borderRight: "7px solid  rgb(33, 150, 243)",
                  }}
                  date={user.end_date}
                  iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                  icon={<WorkIcon />}
                >
                  <h3 className="vertical-timeline-element-title">
                    {user.job_title}
                    <GiSandsOfTime
                      className="listItem__row__col__iconContainer__icon"
                      size={20}
                    />
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    {user.city}
                  </h4>
                  <p>{user.domain}</p>
                  <p className="listItem__row__col__iconContainer">
                    <IoCheckmarkCircle
                      color="green"
                      className="listItem__row__col__iconContainer__icon"
                      size={23}
                    />
                  </p>
                </VerticalTimelineElement>
              ))}
            </div>
            {arrayOfUsersEducationData.map((user, id) => (
              <VerticalTimelineElement
                key={id}
                className="vertical-timeline-element--education"
                date={user.ending_date}
                iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
                icon={<SchoolIcon />}
              >
                <h3 className="vertical-timeline-element-title">
                  {user.degree_title}
                  {user.id}
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  {user.education_type}
                </h4>
                <p>{user.domain}</p>
                <p className="listItem__row__col__iconContainer">
                  <IoCheckmarkCircle
                    color="green"
                    className="listItem__row__col__iconContainer__icon"
                    size={23}
                  />
                </p>
              </VerticalTimelineElement>
            ))}
          </div>
        )}

        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
};

export default InteractiveTimeline;
