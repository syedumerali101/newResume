import { Avatar, Button, Grid } from "@material-ui/core";
import React, { useState } from "react";
import { ImLocation, ImPhone } from "react-icons/im";
import { FaMale, FaFemale } from "react-icons/fa";
import { AiFillCar } from "react-icons/ai";
import { BiPlus } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { BsGeo } from "react-icons/bs";
import { BiHandicap, BiTime } from "react-icons/bi";
import "./userProfile.scss";
import EditUserProfile from "../EditUserProfile";
import AvatarImg from "../../assets/images/avatar.png";
import { FaPlusCircle } from "react-icons/fa";

const UserProfile = () => {
  const [editProfile, setEditProfile] = useState(false);

  const showEditProfile = () => {
    setEditProfile(true);
  };

  const hideEditProfile = () => {
    setEditProfile(false);
  };

  return (
    <div className="userProfile">
      <div className="userProfile__title title--md">
        {editProfile ? "Edit" : "User"} Profile
      </div>
      <div className={`userProfile__content`}>
        {editProfile ? (
          <EditUserProfile hideEditProfile={hideEditProfile} />
        ) : (
          <>
            <Grid container spacing={3}>
              <Grid
                className="userProfile__content__gridItem userProfile__content__gridItem--avatarGrid"
                item
                xs={12}
                sm={12}
              >
                <label
                  htmlFor="profile-btn"
                  className="userProfile__content__gridItem__avatar"
                >
                  <Avatar
                    htmlFor
                    src={AvatarImg}
                    alt="avatar"
                    className="userProfile__content__gridItem__avatar__img avatar__img"
                  />
                </label>
              </Grid>
              <Grid
                className="userProfile__content__gridItem"
                item
                xs={6}
                sm={6}
              >
                <div className="userProfile__content__gridItem__iconContainer">
                  <ImLocation size={25} />
                </div>
                <span>ABC STREET Earth</span>
              </Grid>
              <Grid
                className="userProfile__content__gridItem"
                item
                xs={6}
                sm={6}
              >
                <div className="userProfile__content__gridItem__iconContainer">
                  <FaMale
                    size={25}
                    className="userProfile__content__gridItem__femaleIcon"
                  />
                  <FaFemale
                    className="userProfile__content__gridItem__femaleIcon"
                    size={25}
                  />
                </div>
                <span>Male</span>
              </Grid>
              <Grid
                className="userProfile__content__gridItem"
                item
                xs={6}
                sm={6}
              >
                <div className="userProfile__content__gridItem__iconContainer">
                  <ImPhone size={25} />
                </div>
                <span>+44 0023 51 36 21</span>
              </Grid>
              <Grid
                className="userProfile__content__gridItem"
                item
                xs={6}
                sm={6}
              >
                <div className="userProfile__content__gridItem__iconContainer">
                  <AiFillCar size={25} />
                </div>
                <span>Vehicle/Public Transport/Cycle/Bike</span>
              </Grid>
              <Grid
                className="userProfile__content__gridItem"
                item
                xs={6}
                sm={6}
              >
                <div className="userProfile__content__gridItem__iconContainer">
                  <MdEmail size={25} />
                </div>
                <span>abcd@gmail.com</span>
              </Grid>
              <Grid
                className="userProfile__content__gridItem"
                item
                xs={6}
                sm={6}
              >
                <div className="userProfile__content__gridItem__iconContainer">
                  <BiHandicap size={25} />
                </div>
                <span>Disabled</span>
              </Grid>
              <Grid
                className="userProfile__content__gridItem"
                item
                xs={6}
                sm={6}
              >
                <div className="userProfile__content__gridItem__iconContainer">
                  <BsGeo size={25} />
                </div>
                <span>National</span>
              </Grid>
              <Grid
                className="userProfile__content__gridItem"
                item
                xs={6}
                sm={6}
              >
                <div className="userProfile__content__gridItem__iconContainer">
                  <BiTime size={25} />
                </div>
                <span>Immediately</span>
              </Grid>
              <Grid
                className="userProfile__content__gridItem userProfile__content__gridItem--btn"
                item
                xs={6}
                sm={6}
              >
                <div
                  onClick={showEditProfile}
                  className="userProfile__content__gridItem__btn btn--primary"
                  variant="contained"
                  color="primary"
                >
                  Edit Profile
                </div>
              </Grid>
            </Grid>
          </>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
