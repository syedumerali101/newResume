import React from "react";
import Webcam from "react-webcam";
import { Link } from "react-router-dom";

import paths from "../../../router/paths";
import "./checkWebcam.scss";

const CheckWebcam = () => {
  return (
    <div className="checkWebcam">
      <div className="checkWebcam__header">
        <div className="checkWebcam__title title--lg">
          Is Your Camera Working?
        </div>
      </div>
      <div className="checkWebcam__webcamContainer">
        <div className="checkWebcam__webcamContainer__title">Webcam</div>
        <div className="checkWebcam__webcamContainer__video">
          <Webcam style={{ width: "100%", height: "100%" }} />
        </div>
        <div className="checkWebcam__webcamContainer__action">
          <div></div>
          <Link
            to={`${paths.CHECK_MIC}`}
            className="checkWebcam__webcamContainer__action__link btn--primary"
          >
            My Camera Works
          </Link>
          <a href="https://www.google.com/" target="_blank">
            Having problems? Access setup tips here.
          </a>
        </div>
      </div>
    </div>
  );
};

export default CheckWebcam;
