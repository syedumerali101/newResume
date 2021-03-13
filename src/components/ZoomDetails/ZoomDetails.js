import { Switch, TextField } from "@material-ui/core";
import React from "react";

import "./zoomDetails.scss";

const ZoomDetails = () => {
  return (
    <div className="zoomDetails">
      <div className="zoomDetails__fields">
        <div className="zoomDetails__fields__field">
          <p className="label">
            <span>Salary Claim</span>
            <Switch
              // checked={state.checkedB}
              // onChange={handleChange}
              size="small"
              color="primary"
              name="checkedB"
              inputProps={{ "aria-label": "primary checkbox" }}
            />
          </p>
          <TextField
            className="zoomDetails__fields__field__input"
            placeholder="Enter salary claim"
            defaultValue=""
            variant="outlined"
          />
        </div>
        <div className="zoomDetails__fields__field">
          <p className="label">
            <span>Flexible Hours</span>{" "}
            <Switch
              // checked={state.checkedB}
              // onChange={handleChange}
              size="small"
              color="primary"
              name="checkedB"
              inputProps={{ "aria-label": "primary checkbox" }}
            />
          </p>
          <TextField
            className="zoomDetails__fields__field__input"
            placeholder="Enter flexible hours"
            defaultValue=""
            variant="outlined"
          />
        </div>
      </div>
      <div>
        <TextField
          className="addEducation__field__input"
          multiline
          rows={3}
          placeholder="Enter zoom details"
          defaultValue=""
          variant="outlined"
        />
      </div>
    </div>
  );
};

export default ZoomDetails;
