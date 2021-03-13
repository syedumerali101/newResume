import { Grid, MenuItem, TextField, Select, Button } from "@material-ui/core";

import React, { useState, useEffect } from "react";

import { Link, useHistory } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import Loader from "../../../../components/Loader/loader";
import Message from "../../../../components/Message/message";

import { addFormationAction } from "../../../../redux/actions/userLoginAction";

import { VALIDITY, YEAR_END } from "constants/options";
import ProofGrid from "../ProofGrid";
import "./addFormation.scss";

const AddFormation = () => {
  const history = useHistory();
  const [formation_title, setFormation_title] = useState("");
  const [domain, setDomain] = useState("");
  const [city, setCity] = useState("");
  const [year_end_formation, setYear_end_formation] = useState("");
  const [Status, setStatus] = useState("");
  const [description, setDescription] = useState("");
  const [reference, setReference] = useState("");

  const [formationData, setFormationData] = useState({
    proof: "none",
    folder: "none",
    formation: "none",
    websiteLink: "none",
    videoLink: "none",
  });
  const { proof, folder, formation, websiteLink, videoLink } = formationData;

  const dispatch = useDispatch();

  const addFormation = useSelector((state) => state.addFormation);

  const { loading, error, userFormationInfo } = addFormation;

  useEffect(() => {
    if (userFormationInfo) {
      console.log("Information exists");
    } else {
      console.log(userFormationInfo, "didn't exist");
    }
  }, [history, userFormationInfo]);

  const submittHandler = (event) => {
    event.preventDefault();
    let type_of_proof;
    if (formationData.folder && formationData.folder != "none") {
      type_of_proof = formationData.folder;
    }
    if (formationData.formation && formationData.formation != "none") {
      type_of_proof = formationData.formation;
    }
    if (formation.websiteLink && formation.websiteLink != "none") {
      type_of_proof = formation.websiteLink;
    } else {
      type_of_proof = "a website link";
    }
    if (formation.videoLink && formation.videoLink != "none") {
      type_of_proof = formation.videoLink;
    } else {
      type_of_proof = "A video link";
    }
    dispatch(
      addFormationAction(
        formation_title,
        domain,
        city,
        year_end_formation,
        Status,
        description,
        type_of_proof,
        value_of_proof,
        reference,
      ),
    );
  };

  let value_of_proof = formationData.proof;

  // let type_of_proof = formationData.formation
  //   ? formationData.formation
  //   : formationData.folder
  //   ? formationData.folder
  //   : formation.websiteLink
  //   ? formation.videoLink
  //   : formation.videoLink;

  // let type_of_proof =
  //   formationData.folder ||
  //   formationData.formation ||
  //   formation.websiteLink ||
  //   formation.videoLink;

  const handleChange = (e) => {
    if (e.target.name === "proof") {
      if (e.target.value !== proof) {
        setFormationData((prev) => ({
          ...prev,
          folder: "none",
          formation: "none",
          websiteLink: "",
          videoLink: "",
        }));
      }
    }
    setFormationData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div className="addFormation">
      {error && <Message>{error}</Message>}
      {loading && <Loader />}
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <div className="addFormation__field">
            <p className="label">Title Formation*</p>
            <TextField
              className="addFormation__field__input"
              fullWidth
              variant="outlined"
              size="medium"
              required
              placeholder="Enter title"
              value={formation_title}
              onChange={(event) => setFormation_title(event.target.value)}
            />
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="addFormation__field">
            <p className="label">Domain</p>
            <TextField
              className="addFormation__field__input"
              fullWidth
              variant="outlined"
              size="medium"
              placeholder="Enter domain"
              value={domain}
              onChange={(event) => setDomain(event.target.value)}
            />
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="addFormation__field">
            <p className="label">City*</p>
            <TextField
              className="addFormation__field__input"
              fullWidth
              variant="outlined"
              size="medium"
              required
              placeholder="Enter postal code"
              value={city}
              onChange={(event) => setCity(event.target.value)}
            />
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="addEducation__field">
            <p className="label">Year End</p>

            <Select
              variant="outlined"
              defaultValue="none"
              className="addEducation__field__input"
              onChange={(event) => setYear_end_formation(event.target.value)}

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
        <Grid item xs={6}>
          <div className="addFormation__field">
            <p className="label">Validity</p>

            <Select
              variant="outlined"
              defaultValue="none"
              className="addEducation__field__input"
              onChange={(event) => setStatus(event.target.value)}
              // value={state.age}
              // onChange={handleChange}

              // inputProps={{
              //   name: 'age',
              //   id: 'outlined-age-native-simple',
              // }}
            >
              {VALIDITY.map((x, index) => (
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
        <Grid item xs={12}>
          <div className="addFormation__field">
            <p className="label">Description</p>
            <TextField
              className="addFormation__field__input"
              multiline
              rows={3}
              placeholder="Enter specifics of the position, example: 'management of a team of 20 people...'"
              defaultValue=""
              variant="outlined"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </div>
        </Grid>
        <ProofGrid handleChange={handleChange} data={formationData} />
        <Grid item xs={12}>
          <div className="addFormation__field">
            <p className="label">Reference</p>
            <TextField
              className="addFormation__field__input"
              multiline
              rows={2}
              placeholder="Enter contact name, company contact, phone contact etc..."
              defaultValue=""
              variant="outlined"
              value={reference}
              onChange={(event) => setReference(event.target.value)}
            />
          </div>
        </Grid>
        <Grid className="addFormation__field__btnContainer" item xs={12}>
          <Button
            // onClick={() => history.push("/register")}
            color="primary"
            className="addFormation__field__btnContainer__btn"
            size="large"
            variant="contained"
            onClick={(event) => submittHandler(event)}
          >
            Send to verification
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default AddFormation;
