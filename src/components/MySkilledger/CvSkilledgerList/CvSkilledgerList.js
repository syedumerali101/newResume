import React from "react";
import { MdModeEdit, MdContentCopy } from "react-icons/md";
import { IoTrash } from "react-icons/io5";
import "./cvSkilledgerList.scss";

const SKILLEDGER_LIST = [
  {
    name: "Senior Manager",
    created: `10.11.2020`,
  },
];

const CvSkilledgerList = () => {
  return (
    <div className="cvSkilledgerList">
      <div className="cvSkilledgerList__titles">
        <span>Name</span>
        <span>Created</span>
        <span>CV Skilledger</span>
        <span>Delete</span>
        <span>Edit</span>
      </div>
      <div className="cvSkilledgerList__content">
        {SKILLEDGER_LIST.map(({ name, created }) => (
          <div className="cvSkilledgerList__content__item">
            <span>{name}</span>
            <span>{created}</span>
            <span>
              <MdContentCopy size={25} />
            </span>
            <span>
              <IoTrash size={23} />
            </span>
            <span>
              <MdModeEdit size={25} />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CvSkilledgerList;
