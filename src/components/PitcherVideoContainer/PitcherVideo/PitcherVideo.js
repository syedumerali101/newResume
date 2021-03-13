import React from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import paths from "../../../router/paths";

import "./pitcherVideo.scss";
const PitcherVideo = () => {
  const { path } = useRouteMatch();
  const history = useHistory();

  const navigate = () => {
    history.push(`${path}/${paths.PITCHER_REQUIREMENTS}`);
  };

  return (
    <div className="pitcherVideo">
      <div className="pitcherVideo__videoContainer">No video, create one!</div>
      <div className="pitcherVideo__actions">
        <button className="btn--primary" onClick={navigate}>
          Create My Pitcher
        </button>
      </div>
    </div>
  );
};

export default PitcherVideo;
