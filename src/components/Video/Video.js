import { MenuItem, Select, Switch } from "@material-ui/core";
import React from "react";
import video1 from "../../assets/videos/video.mp4";

import "./video.scss";

const VIDEO_OPTIONS = [
  { value: "none", label: "Choose on video list" },
  { value: "option1", label: "Option 1" },
  { label: "other", value: "other" },
];

const Video = () => {
  return (
    <div className="video">
      <div className="video__inputContainer">
        <Select
          variant="outlined"
          defaultValue="none"
          className="video__input"
          // value={state.age}
          // onChange={handleChange}

          // inputProps={{
          //   name: 'age',
          //   id: 'outlined-age-native-simple',
          // }}
        >
          {VIDEO_OPTIONS.map((option, index) => (
            <MenuItem
              key={option.label}
              disabled={option.value === "none"}
              value={option.value}
            >
              {option.label}
            </MenuItem>
          ))}
        </Select>
        <Switch
          className="video__switch"
          // checked={state.checkedB}
          // onChange={handleChange}
          color="primary"
          name="checkedB"
          inputProps={{ "aria-label": "primary checkbox" }}
        />
      </div>

      <video
        className="video__box"
        src={video1}
        controls="controls"
        // autoplay="true"
      />
    </div>
  );
};

export default Video;
