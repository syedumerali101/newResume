import { Avatar, Grid, TextField } from "@material-ui/core";
import React, { useState ,useSelector} from "react";
import AvatarImg from "../../assets/images/avatar.png";
import { BiPlus } from "react-icons/bi";
import { AiFillCar } from "react-icons/ai";
import { BsGeo } from "react-icons/bs";
import { BiTime } from "react-icons/bi";
import { BsFillBriefcaseFill, BsUpload } from "react-icons/bs";
import PATHS from "../../router/paths";

import "./createSkilledger.scss";
import { useRouteMatch, Link, Switch, NavLink } from "react-router-dom";
import { RouteWithSubRoutes } from "../../router";


const TABS = [
  { title: "Timeline", path: PATHS.TIMELINE },
  { title: "Video", path: PATHS.VIDEO },
  { title: "My Assets", path: `${PATHS.MY_ASSETS}/${PATHS.SKILLS_ACQUIRED}` },
  { title: "Zoom Details", path: PATHS.ZOOM_DETAILS },
  { title: "CV Skilledger", path: PATHS.CV_SKILLEDGER },
  { title: "Interactive Timeline", path: PATHS.INTERACTIVE_TIMELINE },
];


const CreateSkilledger = ({ routes }) => {
  const [skilledger_title,setSkilledger_title]=useState("");
  const [image, setImage] = useState({
    file: {},
    url: null,
  });

  const { path } = useRouteMatch();
  console.log("||", path);
  const handleImage = (event) => {
    if (
      event.target.files &&
      event.target.files.length &&
      event.target.files[0]
    ) {
      console.log("run", event.target.files);
      let reader = new FileReader();
      reader.onload = (e) => {
        console.log("eve", e.target.result);
        setImage((prev) => ({
          ...prev,
          url: e.target.result,
        }));
        // setImage({
        //   file: event.target.files[0],
        //   url: e.target.result,
        // });
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };
  console.log(skilledger_title,"the title is");

  return (
    <div className="createSkilledger">
      <Grid className="gridContainer" container>
        <Grid
          item
          xs={2}
          className="createSkilledger__gridItem createSkilledger__gridItem--avatarGrid"
        >
          <input
            accept="image/*"
            id="profile-btn"
            onChange={handleImage}
            type="file"
            hidden
          />
          <label
            htmlFor="profile-btn"
            className="createSkilledger__gridItem__avatar"
          >
            <Avatar
              variant="rounded"
              htmlFor="profile-btn"
              src={image.url || AvatarImg}
              alt="avatar"
              className="createSkilledger__gridItem__avatar__img avatar__img"
            />
            <BiPlus className="avatar__plus" size={40} color="white" />
          </label>
        </Grid>
        <Grid
          item
          xs={5}
          className="createSkilledger__gridItem createSkilledger__gridItem--secondGrid"
        >
          <div className="title--lg">Omer Javed</div>
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
          <div className="createSkilledger__gridItem__fieldContainer">
            <p className="label">Choose Title</p>
            <TextField
              className="createSkilledger__gridItem__fieldContainer__field"
              variant="outlined"
              size="large"
              placeholder="Choose title (Example Manager Senior)"
              value={skilledger_title}

              onChange={event=>setSkilledger_title(event.target.value)}
            />
          </div>
          <div className="createSkilledger__gridItem__uploadBtns">
            <div className="createSkilledger__gridItem__uploadBtns__btn">
              <p className="label">Upload CV</p>
              <button className="btn--primary createSkilledger__gridItem__uploadBtns__btn__act">
                <input
                  id="profile-btn"
                  onChange={() => console.log("e")}
                  type="file"
                  hidden
                />
                <span>Upload CV</span>
                <span>
                  <BsUpload color="white" size={25} />
                </span>
              </button>
            </div>
            <div className="createSkilledger__gridItem__uploadBtns__btn">
              <p className="label">Upload Cover Letter</p>
              <button className="btn--primary createSkilledger__gridItem__uploadBtns__btn__act">
                <input
                  id="profile-btn"
                  onChange={() => console.log("e")}
                  type="file"
                  hidden
                />
                <span>Upload cover letter</span>
                <span>
                  <BsUpload color="white" size={25} />
                </span>
              </button>
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

export default CreateSkilledger;
