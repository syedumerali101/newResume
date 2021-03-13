import React, { useState, useEffect, useRef } from "react";
import { ReactMic } from "react-mic";
import {
  MdFiberManualRecord,
  MdStop,
  MdPlayArrow,
  MdPause,
} from "react-icons/md";
import "./checkMic.scss";
import { Link } from "react-router-dom";
import paths from "../../../router/paths";

const CheckMic = () => {
  const [record, setRecord] = useState(false);
  const [audio, setAudio] = useState(null);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    setPlay(false);
    setAudio(null);
    setRecord(false);
    return () => {
      console.log("dsf");
      setPlay(false);
      setAudio(null);
      setRecord(false);
    };
  }, []);

  const startRecording = () => {
    if (!play) {
      setRecord(true);
    }
  };

  const stopRecording = () => {
    if (!play) {
      setRecord(false);
    }
  };

  const onStop = (recordedBlob) => {
    if (recordedBlob) {
      const url = URL.createObjectURL(recordedBlob.blob);
      setAudio(new Audio(url));
      console.log("run run");
    }
  };

  const playAudio = () => {
    if (!record && audio) {
      setPlay(true);
      audio.play();

      audio.onended = () => {
        setPlay(false);
      };
    }
  };

  const stopAudio = () => {
    if (audio) {
      setPlay(false);
      audio.pause();
    }
  };

  return (
    <div className="checkMic">
      <div className="checkMic__header">
        <div className="checkkMic__title title--lg">
          Is Your Microphone Working?
        </div>
      </div>
      <div className="checkMic__micContainer">
        <ReactMic
          record={record}
          className="sound-wave"
          onStop={onStop}
          noiseSuppression={true}
          strokeColor="#000000"
          backgroundColor="#eee"
        />
        <div className="checkMic__micContainer__actions">
          {record ? (
            <MdStop
              onClick={stopRecording}
              className="checkMic__micContainer__actions__btn"
              color={play ? "#eee" : "black"}
              size={25}
            />
          ) : (
            <MdFiberManualRecord
              onClick={startRecording}
              className="checkMic__micContainer__actions__btn"
              color={play ? "#eee" : "black"}
              size={25}
            />
          )}
          {play ? (
            <MdPause
              onClick={stopAudio}
              className="checkMic__micContainer__actions__btn"
              color={record ? "#eee" : "black"}
              size={27}
            />
          ) : (
            <MdPlayArrow
              onClick={playAudio}
              className="checkMic__micContainer__actions__btn"
              color={record ? "#eee" : "black"}
              size={27}
            />
          )}
        </div>

        <div className="checkMic__micContainer__footerBtn">
          <div></div>
          <Link
            to={`${paths.PRESENTATION}`}
            className="checkMic__micContainer__footerBtn__link btn--primary"
          >
            My Microphone Works
          </Link>
          <a href="https://www.google.com/" target="_blank">
            Having problems? Access setup tips here.
          </a>
        </div>
      </div>
    </div>
  );
};

export default CheckMic;
