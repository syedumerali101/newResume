import { TextField } from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import {
  MdFiberManualRecord,
  MdStop,
  MdPlayArrow,
  MdPause,
} from "react-icons/md";
import "./recordVideoWithScript.scss";
import { useHistory } from "react-router-dom";
import paths from "../../../router/paths";

const RecordVideoWithScript = () => {
  const webcamRef = React.useRef(null);
  const mediaRecorderRef = React.useRef(null);
  const [capturing, setCapturing] = React.useState(false);
  const [recordedChunks, setRecordedChunks] = React.useState([]);
  const [presentation, setPresentation] = useState("");
  const history = useHistory();

  const handleStartCaptureClick = React.useCallback(() => {
    setInterval(() => {
      handleStopCaptureClick();
    }, 120000);
    setCapturing(true);
    mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
      mimeType: "video/webm",
    });
    mediaRecorderRef.current.addEventListener(
      "dataavailable",
      handleDataAvailable,
    );
    mediaRecorderRef.current.start();
  }, [webcamRef, setCapturing, mediaRecorderRef]);

  const handleDataAvailable = React.useCallback(
    ({ data }) => {
      if (data.size > 0) {
        setRecordedChunks((prev) => prev.concat(data));
      }
    },
    [setRecordedChunks],
  );

  const handleStopCaptureClick = React.useCallback(() => {
    mediaRecorderRef.current.stop();
    setCapturing(false);
  }, [mediaRecorderRef, webcamRef, setCapturing]);

  const handleDownload = () => {
    if (recordedChunks.length) {
      const blob = new Blob(recordedChunks, {
        type: "video/webm",
      });
      const url = URL.createObjectURL(blob);
      // const a = document.createElement("a");
      // document.body.appendChild(a);
      // a.style = "display: none";
      // a.href = url;
      // a.download = "react-webcam-stream-capture.webm";
      // a.click();
      return url;
      // window.URL.revokeObjectURL(url);
      // setRecordedChunks([]);
    }
  };

  const handleChange = (e) => {
    setPresentation(e.target.value);
  };

  const handleSubmit = () => {
    const url = handleDownload();
    console.log("url", url);
    const updated = presentation
      .split(".")
      .filter((x) => x !== "")
      .map((sentence, idx) => ({
        content: `${sentence}.`.trim(),
        duration: sentence.trim().split(" ").length * 300,
        delay: sentence.trim().split(" ").length * 40,
        id: idx,
      }));
    console.log("updated", updated);
    history.push(`${paths.PREVIEW}`, {
      presentation: updated,
      url,
    });
  };

  return (
    <div className="video">
      <div className="checkWebcam__header">
        <div className="checkWebcam__title title--lg">Create Presentation</div>
      </div>
      <div className="video__presentation">
        <>
          <div className="video__presentation__video">
            <Webcam
              style={{ width: "100%", height: "100%" }}
              audio={true}
              ref={webcamRef}
            />
            <div className="video__presentation__actions">
              <MdFiberManualRecord
                onClick={() => {
                  capturing
                    ? handleStopCaptureClick()
                    : handleStartCaptureClick();
                }}
                className={`checkMic__micContainer__actions__btn ${
                  capturing && "capturing"
                }`}
                color={"red"}
                size={25}
              />
            </div>
          </div>
          <div className="video__presentation__field">
            <p className="label">Write Your Presentation Script</p>
            <TextField
              onChange={handleChange}
              value={presentation}
              className="video__presentation__field__input"
              multiline
              rows={8}
              placeholder="Please add a period after every sentence or wherever you take a little 1 or 1/2 second pause."
              defaultValue=""
              variant="outlined"
            />
          </div>
          <button
            disabled={capturing || !recordedChunks.length}
            onClick={handleSubmit}
            className="video__presentation__btn btn--primary"
          >
            I Am Ready
          </button>

          {/* {recordedChunks.length > 0 && (
            <button onClick={handleDownload}>Play</button>
          )} */}
        </>
      </div>
    </div>
  );
};

export default RecordVideoWithScript;
