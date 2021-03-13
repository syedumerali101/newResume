import React, { useState, useEffect } from "react";
import { Button, Checkbox, Grid, TextField } from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import { addExperienceAction } from "../../../../redux/actions/userLoginAction";
import { useDispatch, useSelector } from "react-redux";

import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";

import "./addWorkExprience.scss";
import ProofGrid from "../ProofGrid";

import Loader from "../../../../components/Loader/loader";
import Message from "../../../../components/Message/message";

const AddWorkExprience = () => {
  const [job_title, setTitle] = useState("");
  const [company_name, setComapnyName] = useState("");
  const [city, setPostalCode] = useState("");
  const [domain, setDomain] = useState("");
  const [description, setDescription] = useState("");
  const [reference, setReference] = useState("");
  const [start_date, setStartDate] = useState("");
  const [end_date, setEndDate] = useState("");
  const [currentlyinpost, setCurrently] = useState("")

  // const [value,SetValue]=useState("");
  const [workExprience, setWorkExprience] = useState({
    proof: "none",
    folder: "none",
    formation: "none",
    websiteLink: "",
    videoLink: "",
  });
  const { proof, folder, formation, websiteLink, videoLink } = workExprience;
  const HandleChange = (event) => {
    let isChecked = event.target.Checked;

  }

  const dispatch = useDispatch();
  const addExperience = useSelector((state) => state.addExperience);
  const { loading, error, userExperience } = addExperience;
  console.log(currentlyinpost, "checkbox value is");

  const HandleStartDateChannge = (date) => {

    setStartDate(date);


  };
  const type_of_proof = workExprience.toString();
  const HandleEndDateChange = (date) => {

    setEndDate(date);
  }
  const submittHandler = (event) => {
    event.preventDefault();
    dispatch(
      addExperienceAction(
        job_title,
        company_name,
        city,
        domain,
        description,
        reference,
        start_date,
        end_date,
        type_of_proof

      ),
    );
  };
  const handleChange = (e) => {
    if (e.target.name === "proof") {
      if (e.target.value !== proof) {
        setWorkExprience((prev) => ({
          ...prev,
          folder: "none",
          formation: "none",
          websiteLink: "",
          videoLink: "",
        }));
      }
    }
    setWorkExprience((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  console.log("add", workExprience);
  return (
    <div className="addWorkExprience">
      {error && <Message>{error}</Message>}
      {loading && <Loader />}
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <div className="addWorkExprience__field">
            <p className="label">Job Title*</p>
            <TextField
              required
              className="addWorkExprience__field__input"
              fullWidth
              variant="outlined"
              size="medium"
              required
              placeholder="Manager Senior"
              value={job_title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="addWorkExprience__field">
            <p className="label">Company Name*</p>
            <TextField
              required
              className="addWorkExprience__field__input"
              fullWidth
              variant="outlined"
              size="medium"
              required
              placeholder="Enter title"
              value={company_name}
              onChange={(event) => setComapnyName(event.target.value)}
            />
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="addWorkExprience__field">
            <p className="label">City*</p>
            <TextField
              required
              value={city}
              onChange={event => setPostalCode(event.target.value)}
              className="addWorkExprience__field__input"
              fullWidth
              variant="outlined"
              size="medium"
              required
              placeholder="Enter postal code"
            // value={postalCode}
            // onChange={event => setPostalCode(event.target.value)}
            />
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="addWorkExprience__field">
            <p className="label">Domain</p>
            <TextField
              required
              className="addWorkExprience__field__input"
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
          <div className="addWorkExprience__field addWorkExprience__field--checkbox">
            <p className="label">Currently In Post</p>
            <div>
              <Checkbox
                id="currentlyInPost"
                color="primary"
                inputProps={{ "aria-label": "secondary checkbox" }}
                value={currentlyinpost}
                onChange={event => HandleChange(event)}

              />
              <label style={{ cursor: "pointer" }} htmlFor="currentlyInPost">
                Currently in post
              </label>
            </div>
          </div>
        </Grid>
        {/* <Grid item xs={6}>
          <div className="addWorkExprience__field addWorkExprience__field__datePicker">
            <p className="label">Date Start*</p>
            <MuiPickersUtilsProvider className="" utils={DateFnsUtils}>
              <KeyboardDatePicker
                required
                inputVariant="outlined"
                disableToolbar
                variant="inline"
               
                format="-MM-DD"
                margin="normal"
                 value={start_date}
                 onChange={HandleStartDateChannge}
               
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </MuiPickersUtilsProvider>
          </div>
        </Grid> 

        { <Grid item xs={6}>
          <div className="addWorkExprience__field addWorkExprience__field__datePicker">
            <p className="label">Date End*</p>
            <MuiPickersUtilsProvider className="" utils={DateFnsUtils}>
              <KeyboardDatePicker
                required
                inputVariant="outlined"
                disableToolbar
                variant="inline"
              
                 format="YYYY-MM-DD"
                margin="normal"
                  value={end_date}
                 onChange={HandleEndDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </MuiPickersUtilsProvider>
          </div>
        </Grid> */}
       
       <TextField
   
    label="End Date"
    type="date"
    defaultValue="2020-05-24"
    value={start_date}
    onChange={event=>setStartDate(event.target.value)}
    className="addWorkExprience__field__datePicker"
    InputLabelProps={{
      shrink: true,
    }}
  />
       <TextField
   
    label="Start Date"
    type="date"
    defaultValue="2020-05-24"
    value={end_date}
    onChange={event=>setEndDate(event.target.value)}
    className="addWorkExprience__field__datePicker"
    InputLabelProps={{
      shrink: true,
    }}
  />
        {/* <input label="Start Date" placeholder="date start" value={start_date} type="date" onChange={event=>setStartDate(event.target.value)}></input> 
         <input label="End Date" placeholder="date start" value={end_date} type="date" onChange={event=>setEndDate(event.target.value)}></input>  */}
        <Grid item xs={12}>
          <div className="addWorkExprience__field">
            <p className="label">Description</p>
            <TextField
              className="addWorkExprience__field__input"
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
        <ProofGrid handleChange={handleChange} data={workExprience} />
        <Grid item xs={12}>
          <div className="addWorkExprience__field">
            <p className="label">Reference</p>
            <TextField
              className="addWorkExprience__field__input"
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

export default AddWorkExprience;
