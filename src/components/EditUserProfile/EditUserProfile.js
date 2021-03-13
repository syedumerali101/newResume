import {
  Grid,
  TextField,
  Switch,
  Select,
  MenuItem,
  Avatar,
} from "@material-ui/core";
import AvatarImg from "../../assets/images/avatar.png";

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, updateUserProfile } from "../../redux/actions/userLoginAction";
import { Link, useHistory } from "react-router-dom";

import { DISPONIBILITIES, GEO_MOBILITIES } from "../../constants/options";
import "./editUserProfile.scss";
import { BiPlus } from "react-icons/bi";
import { Phone } from "@material-ui/icons";

const EditUserProfile = ({ hideEditProfile }) => {
  const history = useHistory();
  const [gender, setGender] = useState("");
  const [transport_type, setTransport_type] = useState("");
  const [handicap, sethandicap_type] = useState("");
  const [nationality, setnationalityp_type] = useState("");
  const [job_seeking_type, setjob_seeking_type] = useState("");
  const [geo_mobility, setgeo_mobility] = useState("");
  const [disponsibility, setdisponsibility] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  // const { userInfo } = userUpdateProfile;

  const id = userInfo.data.token;

  // useEffect(() => {
  //   if (!userProfileInfo) {
  //     console.log("No");
  //   } else {
  //     setGender(gender);
  //     setTransport_type(transport_type);
  //     sethandicap_type(handicap);
  //     setnationalityp_type(nationality);
  //     setjob_seeking_type(job_seeking_type);
  //     setgeo_mobility(geo_mobility);
  //     setdisponsibility(disponsibility);
  //   }
  // }, [history, userInfo]);
  useEffect(() => {
    if (!userInfo) {
      console.log("Yes userInfo doest not exist");
    } else {
      console.log("userInfo", userInfo);
    }
  }, [history, userInfo]);

  const submitHandler = (e) => {
    debugger;
    e.preventDefault();
    dispatch(
      updateUserProfile(
        id,
        gender,
        transport_type,
        handicap,
        nationality,
        job_seeking_type,
        geo_mobility,
        disponsibility,
      ),
    );
  };

  const [image, setImage] = useState({
    file: {},
    url: null,
  });
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

  const check = () => {
    hideEditProfile();
  };
  return (
    <div className="editUserProfile">
      <Grid container spacing={3}>
        <Grid
          className="editUserProfile__gridItem editUserProfile__gridItem--avatarGrid"
          item
          xs={12}
          sm={12}
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
            className="editUserProfile__gridItem__avatar"
          >
            <Avatar
              htmlFor
              src={image.url || AvatarImg}
              alt="avatar"
              className="editUserProfile__gridItem__avatar__img avatar__img"
            />
            <BiPlus className="avatar__plus" size={40} color="white" />
          </label>
        </Grid>
        <Grid className="editUserProfile__gridItem" item xs={6} sm={6}>
          <p className="label">gender</p>
          <TextField
            className="editUserProfile__input"
            fullWidth
            variant="outlined"
            size="medium"
            required
            placeholder="Enter location"
            value={gender}
            onChange={(event) => setGender(event.target.value)}
          />
        </Grid>

        <Grid className="editUserProfile__gridItem" item xs={6} sm={6}>
          <p className="label">transport_type</p>
          <TextField
            className="editUserProfile__input"
            fullWidth
            variant="outlined"
            size="medium"
            required
            placeholder="Enter location"
            value={transport_type}
            onChange={(event) => setTransport_type(event.target.value)}
          />
        </Grid>
        <Grid className="editUserProfile__gridItem" item xs={6} sm={6}>
          <p className="label">handicap_type</p>
          <TextField
            className="editUserProfile__input"
            fullWidth
            variant="outlined"
            size="medium"
            required
            placeholder="Enter location"
            value={handicap}
            onChange={(event) => sethandicap_type(event.target.value)}
          />
        </Grid>
        <Grid className="editUserProfile__gridItem" item xs={6} sm={6}>
          <p className="label">nationalityp_type</p>
          <TextField
            className="editUserProfile__input"
            fullWidth
            variant="outlined"
            size="medium"
            required
            placeholder="Enter location"
            value={nationality}
            onChange={(event) => setnationalityp_type(event.target.value)}
          />
        </Grid>
        <Grid className="editUserProfile__gridItem" item xs={6} sm={6}>
          <p className="label">job_seeking_type(</p>
          <TextField
            className="editUserProfile__input"
            fullWidth
            variant="outlined"
            size="medium"
            required
            placeholder="Enter location"
            value={job_seeking_type}
            onChange={(event) => setjob_seeking_type(event.target.value)}
          />
        </Grid>
        <Grid className="editUserProfile__gridItem" item xs={6} sm={6}>
          <p className="label">geo_mobility</p>
          <TextField
            className="editUserProfile__input"
            fullWidth
            variant="outlined"
            size="medium"
            required
            placeholder="Enter location"
            value={geo_mobility}
            onChange={(event) => setgeo_mobility(event.target.value)}
          />
        </Grid>
        <Grid className="editUserProfile__gridItem" item xs={6} sm={6}>
          <p className="label">disponsibility</p>
          <TextField
            className="editUserProfile__input"
            fullWidth
            variant="outlined"
            size="medium"
            required
            placeholder="Enter location"
            value={disponsibility}
            onChange={(event) => setdisponsibility(event.target.value)}
          />
        </Grid>
        {/* 
        <Grid className="editUserProfile__gridItem" item xs={6} sm={6}>
          <p className="label">Location</p>
          <TextField
            className="editUserProfile__input"
            fullWidth
            type="number"
            variant="outlined"
            size="medium"
            required
            placeholder="Enter phone number"
            // value={PhoneNo}
            // onChange={(Event) => SetPhoneNO(Event.target.value)}
          />
        </Grid>
        <Grid className="editUserProfile__gridItem" item xs={6} sm={6}>
          <p className="label">Gender</p>
          <div className="editUserProfile__gridItem__radioGroup">
            <label className="editUserProfile__gridItem__radioGroup__label">
              <input name="gender" type="radio" />
              Male
            </label>
            <label className="editUserProfile__gridItem__radioGroup__label">
              <input name="gender" type="radio" />
              Female
            </label>
          </div>
        </Grid>
        <Grid className="editUserProfile__gridItem" item xs={6} sm={6}>
          <p className="label">Phone</p>
          <TextField
            className="editUserProfile__input"
            fullWidth
            type="number"
            variant="outlined"
            size="medium"
            required
            placeholder="Enter phone number"
            // value={PhoneNo}
            // onChange={(Event) => SetPhoneNO(Event.target.value)}
          />
        </Grid>
        <Grid className="editUserProfile__gridItem" item xs={6} sm={6}>
          <p className="label">Daily Commute</p>
          <TextField
            className="editUserProfile__input"
            fullWidth
            variant="outlined"
            size="medium"
            required
            placeholder="Enter daily commute"
            // value={Commute}
            // onChange={(Event) => SetCommute(Event.target.value)}
          />
        </Grid>
        <Grid className="editUserProfile__gridItem" item xs={6} sm={6}>
          <p className="label">Email</p>
          <TextField
            className="editUserProfile__input"
            fullWidth
            variant="outlined"
            size="medium"
            required
            placeholder="Enter email"
            // value={Email}
            // onChange={(Event) => SetEmail(Event.target.value)}
          />
        </Grid>
        <Grid className="editUserProfile__gridItem" item xs={6} sm={6}>
          <p className="label">Disabled</p>
          <div className="editUserProfile__gridItem__radioGroup">
            <span className="editUserProfile__gridItem__radioGroup__switchLabel">
              Handicap worker (yes/no)
            </span>
            <Switch
              // checked={state.checkedB}
              // onChange={handleChange}
              color="primary"
              name="checkedB"
              inputProps={{ "aria-label": "primary checkbox" }}
            />
          </div>
        </Grid>
        <Grid className="editUserProfile__gridItem" item xs={6} sm={6}>
          <p className="label">Geo Mobility</p>
          <Select
            variant="outlined"
            defaultValue="none"
            className="editUserProfile__input"
            // value={state.age}
            // onChange={handleChange}

            // inputProps={{
            //   name: 'age',
            //   id: 'outlined-age-native-simple',
            // }}
          >
            {GEO_MOBILITIES.map((type, index) => (
              <MenuItem
                key={type.label}
                disabled={type.value === "none"}
                value={type.value}
              >
                {type.label}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid className="editUserProfile__gridItem" item xs={6} sm={6}>
          <p className="label">Disponibility</p>
          <Select
            variant="outlined"
            defaultValue="none"
            className="editUserProfile__input"
            // value={state.age}
            // onChange={handleChange}

            // inputProps={{
            //   name: 'age',
            //   id: 'outlined-age-native-simple',
            // }}
          >
            {DISPONIBILITIES.map((type, index) => (
              <MenuItem
                key={type.label}
                disabled={type.value === "none"}
                value={type.value}
              >
                {type.label}
              </MenuItem>
            ))}
          </Select>
        </Grid> */}
        <Grid className="editUserProfile__gridItem" item item xs={4} sm={4}>
          <div
            onClick={(e) => submitHandler(e)}
            className="editUserProfie__btn btn--primary"
          >
            Save
          </div>
        </Grid>
        <Grid className="editUserProfile__gridItem" item item xs={4} sm={4}>
          <div
            onClick={hideEditProfile}
            className="editUserProfie__btn btn--secondary"
          >
            Cancel
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default EditUserProfile;
