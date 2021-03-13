import React, { useState } from "react";
import QRCode from "qrcode.react";
import "./cvSkilledger.scss";
import { Avatar } from "@material-ui/core";
import AvatarImg from "../../assets/images/avatar.png";
import { BsDownload } from "react-icons/bs";

import CoverLetter from "../../assets/images/cover_letter.png";

const CvSkilledger = () => {
  const [messageVisible, setMessageVisible] = useState(false);

  const generate = () => {
    setMessageVisible(true);
  };

  return (
    <div className="cvSkilledger">
      {!messageVisible ? (
        <button onClick={generate} className="cvSkilledger__btn btn--primary">
          Generate My CV Skilledger
        </button>
      ) : null}
      {messageVisible ? (
        <div className="cvSkilledger__message">
          <p>Congratulation! your CV Skilledger "Title" has been created.</p>
          <div className="cvSkilledger__message__qrCode">
            <QRCode size={40} value="http://examplejanet.com/" /> or{" "}
            <a href=" http://examplejanet.com/">http://examplejanet.com/</a>
          </div>
          <button
            onClick={() => setMessageVisible(false)}
            className="btn--secondary"
          >
            OK
          </button>
        </div>
      ) : null}

      <div className="cvSkilledger__digital">
        <h1>Senior Manager</h1>
        <div className="cvSkilledger__digital__avatar">
          <Avatar
            htmlFor
            src={AvatarImg}
            alt="avatar"
            className="userProfile__content__gridItem__avatar__img avatar__img cvSkilledger__digital__avatar__img"
          />
          <h3>John Doe</h3>
        </div>
        <div className="cvSkilledger__digital__images">
          <div>
            <span className="cvSkilledger__digital__images__title">
              CV Resume <BsDownload size={22} />
            </span>
            <img
              className="documentation__docImages__img"
              src={CoverLetter}
              alt="coverLetter"
            />
          </div>
          <div>
            <span className="cvSkilledger__digital__images__title">
              Cover Letter <BsDownload size={22} />
            </span>

            <img
              className="documentation__docImages__img"
              src={CoverLetter}
              alt="coverLetter"
            />
          </div>
        </div>
        <div className="cvSkilledger__digital__urls">
          <div className="cvSkilledger__digital__urls__qrcode">
            <QRCode size={120} value="http://examplejanet.com/" />
          </div>
          <div className="cvSkilledger__digital__urls__links">
            <h1>View my skilledger profile</h1>
            <p>Flash Qrcode or use link for direct access</p>
            <a href="http://examplejanet.com/">
              a short link:johndoeskilledgerprofile.com
            </a>
          </div>
        </div>
        <footer>
          <h1>Skilledger Digital Resume Career Certified</h1>
        </footer>
      </div>
    </div>
  );
};

export default CvSkilledger;
