import React from "react";
import { MdModeEdit } from "react-icons/md";
import { IoTrash } from "react-icons/io5";
import { IoIosCopy } from "react-icons/io";
import QRCode from "qrcode.react";

import "./digitalSkilledgerList.scss";

const SKILLEDGER_LIST = [
  {
    name: "Senior Manager",
    created: `10.11.2020`,
    qrCode: "http://examplejanet.com/",
    link: "http://examplejanet.com/",
  },
];

const DigitalSkilledgerList = () => {
  return (
    <div className="skilledgerList">
      <div className="skilledgerList__titles">
        <div className="skilledgerList__titles__data">
          <span>Name</span>
          <span>Created</span>
          <span>QRCode</span>
          <span>Link</span>
        </div>
        <div className="skilledgerList__titles__actions">
          <span>Delete</span>
          <span>Edit</span>
          <span>Copy</span>
        </div>
      </div>
      <div className="skilledgerList__content">
        {SKILLEDGER_LIST.map(({ name, created, qrCode, link }) => (
          <div className="skilledgerList__content__item">
            <div className="skilledgerList__titles__data">
              <span>{name}</span>
              <span>{created}</span>
              <span>
                <QRCode size={30} value="http://examplejanet.com/" />
              </span>
              <span>
                <a href={link} target="__blank">
                  {link}
                </a>
              </span>
            </div>
            <div className="skilledgerList__titles__actions">
              <span>
                <IoTrash className="icon" size={23} />
              </span>
              <span>
                <MdModeEdit className="icon" size={25} />
              </span>
              <span>
                <IoIosCopy className="icon" size={23} />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DigitalSkilledgerList;
