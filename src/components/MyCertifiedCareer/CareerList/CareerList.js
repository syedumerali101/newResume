import { Grid } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListItem from "components/ListItem";
import { FaPlusCircle } from "react-icons/fa";
import "./careerList.scss";
import ModalWrapper from "components/ModalWrapper";
import AddEducation from "./AddEducation";
import AddWorkExprience from "./AddWorkExprience";
import AddFormation from "./AddFormation";

import ListItemEducation from "../../ListItem/ListItemEducation";
import ListItemExperience from "../../ListItem/ListItemExperience";
import ListItemFormation from "../../ListItem/ListItemFormation";

import { getInteractiveTimelineAction } from "../../../redux/actions/userLoginAction";

const CareerList = () => {
  const [usersEducationData, setUsersEducationData] = useState([]);
  const [usersExperienceData, setUsersExperienceData] = useState([]);
  const [usersFormationData, setUsersFormationData] = useState([]);

  const [isOpenEducation, setIsOpenEducation] = useState(false);
  const [isOpenFormation, setIsOpenFormation] = useState(false);
  const [isOpenWorkExprience, setIsOpenWorkExprience] = useState(false);

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

  return (
    <div className="careerList">
      <ModalWrapper
        isOpen={isOpenEducation}
        setIsOpen={setIsOpenEducation}
        title="Add Your Education"
      >
        <AddEducation />
      </ModalWrapper>
      <ModalWrapper
        isOpen={isOpenFormation}
        setIsOpen={setIsOpenFormation}
        title="Add Your Formation"
      >
        <AddFormation />
      </ModalWrapper>
      <ModalWrapper
        isOpen={isOpenWorkExprience}
        setIsOpen={setIsOpenWorkExprience}
        title="Add Your Work Exprience"
      >
        <AddWorkExprience />
      </ModalWrapper>
      <div className="careerList__grid">
        <Grid container spacing={3}>
          <Grid item xs={12} lg={4} xl={12}>
            <div className="careerList__grid__title careerList__grid__title__education">
              Education
            </div>
            <div className="careerList__grid__list">
              {arrayOfUsersEducationData.map((x) => (
                <ListItemEducation key={x.bachelor} education={{ ...x }} />
              ))}
              <div
                onClick={() => setIsOpenEducation(true)}
                className="careerList__grid__list__addBtn"
              >
                <FaPlusCircle
                  className="careerList__grid__list__addBtn__icon"
                  size={30}
                />{" "}
                <span>Add a new education</span>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} lg={4} xl={12}>
            <div className="careerList__grid__title careerList__grid__title__exprience">
              Work Exprience
            </div>
            <div className="careerList__grid__list">
              {arrayOfUsersExperienceData.map((x) => (
                <ListItemExperience key={x.bachelor} experience={{ ...x }} />
              ))}
              <div
                onClick={() => setIsOpenWorkExprience(true)}
                className="careerList__grid__list__addBtn"
              >
                <FaPlusCircle
                  className="careerList__grid__list__addBtn__icon"
                  size={30}
                />{" "}
                <span>Add a new work exprience</span>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} lg={4} xl={12}>
            <div className="careerList__grid__title careerList__grid__title__formation">
              Formation
            </div>
            <div className="careerList__grid__list">
              {arrayOfUsersFormationData.map((x) => (
                <ListItemFormation key={x.bachelor} formation={{ ...x }} />
              ))}
              <div
                onClick={() => setIsOpenFormation(true)}
                className="careerList__grid__list__addBtn"
              >
                <FaPlusCircle
                  className="careerList__grid__list__addBtn__icon"
                  size={30}
                />{" "}
                <span>Add a new formation</span>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default CareerList;
