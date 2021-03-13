import { Button, Grid, MenuItem, Select, TextField } from "@material-ui/core";
import React, { useState, useEffect } from "react";

import { Link, useHistory } from "react-router-dom";

import PATHS from "../../../../router/paths";

import { EDUCATION_TYPES, STATUS, YEAR_END } from "constants/options";

import { addEducationAction } from "../../../../redux/actions/userLoginAction";

import { useDispatch, useSelector } from "react-redux";

import ProofGrid from "../ProofGrid";

import Loader from "../../../../components/Loader/loader";
import Message from "../../../../components/Message/message";

import "./addEducation.scss";

const AddEducation = () => {
  const history = useHistory();
  const [degree_title, setdegreeTitle] = useState("");
  const [domain, setDomain] = useState("");
  const [description, setDescription] = useState("");
  const [Reference, setReference] = useState("");
  const [education_type, setEducation_type] = useState("");
  const [status, setStatus] = useState("");
  const [ending_date, setEnding_date] = useState("");

  const [education, setEducation] = useState({
    proof: "none",
    folder: "none",
    formation: "none",
    websiteLink: "",
    videoLink: "",
  });
  const { proof, folder, formation, websiteLink, videoLink } = education;

  const dispatch = useDispatch();

  const addEducation = useSelector((state) => state.addEducation);

  const { loading, error, userEducationInfo } = addEducation;

  useEffect(() => {
    if (userEducationInfo) {
      console.log("Information exists");
    } else {
      console.log(userEducationInfo, "didn't exist");
    }
  }, [history, userEducationInfo]);

  const submittHandler = (event) => {
    event.preventDefault();
    dispatch(
      addEducationAction(
        degree_title,
        domain,
        Reference,
        description,
        education_type,
        status,
        ending_date,
        type_of_proof,
        value_of_proof,
      ),
    );
  };

  let value_of_proof = education.proof;

  let type_of_proof = education.formation
    ? education.formation
    : education.folder
    ? education.folder
    : education.websiteLink
    ? education.videoLink
    : education.videoLink;

  const handleChange = (e) => {
    if (e.target.name === "proof") {
      if (e.target.value !== proof) {
        setEducation((prev) => ({
          ...prev,
          folder: "none",
          formation: "none",
          websiteLink: "",
          videoLink: "",
        }));
      }
    }

    setEducation((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="addEducation">
      {error && <Message>{error}</Message>}
      {loading && <Loader />}
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <div className="addEducation__field">
            <p className="label">Title Education/Degree*</p>
            <TextField
              className="addEducation__field__input"
              fullWidth
              variant="outlined"
              size="medium"
              required
              placeholder="Enter title"
              value={degree_title}
              onChange={(event) => setdegreeTitle(event.target.value)}
            />
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="addEducation__field">
            <p className="label">Education Type</p>

            <Select
              variant="outlined"
              defaultValue="none"
              className="addEducation__field__input"
              onChange={(event) => setEducation_type(event.target.value)}
              // inputProps={{
              //   name: 'age',
              //   id: 'outlined-age-native-simple',
              // }}
            >
              {EDUCATION_TYPES.map((type, index) => (
                <MenuItem
                  key={type.label}
                  disabled={type.value === "none"}
                  value={type.value}
                >
                  {type.label}
                </MenuItem>
              ))}
            </Select>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="addEducation__field">
            <p className="label">Domain</p>
            <TextField
              className="addEducation__field__input"
              fullWidth
              variant="outlined"
              size="medium"
              required
              placeholder="Enter domain"
              value={domain}
              onChange={(event) => setDomain(event.target.value)}
            />
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="addEducation__field">
            <p className="label">Status</p>

            <Select
              variant="outlined"
              defaultValue="none"
              className="addEducation__field__input"
              onChange={(event) => setStatus(event.target.value)}
            >
              {STATUS.map((x, index) => (
                <MenuItem
                  key={x.label}
                  disabled={x.value === "none"}
                  value={x.value}
                >
                  {x.label}
                </MenuItem>
              ))}
            </Select>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="addEducation__field">
            <p className="label">Year End</p>

            <Select
              variant="outlined"
              defaultValue="none"
              className="addEducation__field__input"
              onChange={(event) => setEnding_date(event.target.value)}

              // value={state.age}
              // onChange={handleChange}

              // inputProps={{
              //   name: 'age',
              //   id: 'outlined-age-native-simple',
              // }}
            >
              {YEAR_END.map((year, index) => (
                <MenuItem
                  key={year.label}
                  disabled={year.value === "none"}
                  value={year.value}
                >
                  {year.label}
                </MenuItem>
              ))}
            </Select>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className="addEducation__field">
            <p className="label">Description</p>
            <TextField
              className="addEducation__field__input"
              multiline
              rows={3}
              placeholder="Enter description"
              defaultValue=""
              variant="outlined"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </div>
        </Grid>
        <ProofGrid handleChange={handleChange} data={education} />

        <Grid item xs={12}>
          <div className="addEducation__field">
            <p className="label">Reference</p>
            <TextField
              className="addEducation__field__input"
              multiline
              rows={2}
              placeholder="Enter school name, city etc"
              defaultValue=""
              variant="outlined"
              value={Reference}
              onChange={(event) => setReference(event.target.value)}
            />
          </div>
        </Grid>
        <Grid className="addEducation__field__btnContainer" item xs={12}>
          <Button
            // onClick={() => history.push("/register")}
            color="primary"
            className="addEducation__field__btnContainer__btn"
            size="large"
            variant="contained"
            onClick={(event) => submittHandler(event)}
          >
            SEND TO VERIFICATION
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default AddEducation;
