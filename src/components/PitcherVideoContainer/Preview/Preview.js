import React, { useEffect, useRef, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import "./preview.scss";
import NarrationParagraph from "./NarrationParagraph.js";

const Preview = () => {
  const { state } = useLocation();
  const [span, setSpan] = useState(null);
  const [videoPlayed, setVideoPlayed] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const videoRef = useRef();
  const narrationParagraphRef = useRef();
  const history = useHistory();

  useEffect(() => {
    console.log("state", state);
    if (!state.url || state.url === "") {
      history.goBack();
    }
  }, []);

  const handlePlay = () => {
    setShowLogo(true);

    setTimeout(() => {
      narrationParagraphRef.current.startNarration();
    }, 500);
    narrationParagraphRef.current.resumeNarration();
    setVideoPlayed(true);
    videoRef.current.play();
  };

  const handlePause = () => {
    narrationParagraphRef.current.pauseNarration();
    setVideoPlayed(false);
  };

  const handleEnd = () => {
    narrationParagraphRef.current.resetNarration();
    narrationParagraphRef.current.pauseNarration();
    setShowLogo(false);
  };

  const addEventListener = () => {
    span.addEventListener("webkitAnimationEnd", onAnimationEnd);
  };

  const onAnimationEnd = () => {
    span.classList.add("-isRead");
    span.classList.remove("-isReading");
  };

  return (
    <div className="preview">
      <div className="checkWebcam__header">
        <div className="checkWebcam__title title--lg">Preview</div>
      </div>
      <div className="preview__video">
        <div className="preview__video__recording">
          {showLogo && (
            <div className={showLogo && "preview__video__recording__showLogo"}>
              <div>LOGO</div>
            </div>
          )}

          <video
            onChange={(e) => console.log("e", e)}
            ref={videoRef}
            onEnded={handleEnd}
            onPause={handlePause}
            onPlay={handlePlay}
            style={{ width: "100%", height: "100%" }}
            src={state.url}
            // controls
          />
        </div>
        {/* <button onClick={triggerHighlight}>TRigger</button> */}
        <div className="narration">
          <NarrationParagraph
            data={state.presentation}
            ref={narrationParagraphRef}
          />
        </div>
        <button className="preview__btn btn--primary" onClick={handlePlay}>
          Preview
        </button>
        <button
          className="preview__btn btn--primary"
          onClick={() => console.log("dave")}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Preview;
