import React, { useState } from "react";
import { Switch } from "@material-ui/core";
import { MdModeEdit } from "react-icons/md";
import { IoTrash, IoCheckmarkCircle } from "react-icons/io5";
import { GiSandsOfTime } from "react-icons/gi";

import "./listItem.scss";
import { Fragment } from "react";

const ListItemEducation = ({ education, route }) => {
  const {
    id,
    degree_title,
    education_type,
    domain,
    status,
    ending_date,
    description,
    is_approved,
  } = education;

  const [toggle, setToggle] = useState(false);
  const [educationArray, setEducationArray] = useState([]);

  const handleChange = (id) => {
    setToggle(!toggle);
    // if (toggle == true) {
    //   // console.log(id, "your Id");
    //   console.log(id, "your Id");
    // } else {
    //   console.log(toggle, "toggle");
    // }
    console.log(toggle == true ? id : toggle, "value");

    // const educationArray = [1];
    setEducationArray(educationArray.push(id));
    // educationArray.push(id);
    for (var i = 0; i < educationArray.length; i++) {
      console.log(educationArray[i]);
    }
  };

  return (
    <div className="listItem">
      <div className="listItem__row">
        <div className="listItem__row__content">
          <div className="listItem__row__col listItem__row__content__col">
            <p>{degree_title}</p>
            <p>{ending_date}</p>
          </div>
          <div className="listItem__row__col listItem__row__content__col">
            <p>{domain}</p>
            <p>{status}</p>
          </div>
          <div className="listItem__row__col listItem__row__content__col">
            <p>{education_type}</p>
            <p>{description}</p>
          </div>
        </div>
        <div className="listItem__row__actions">
          {route === "timeline" ? null : (
            <>
              <div className="listItem__row__col listItem__row__col--action">
                <p className="listItem__row__col__iconContainer">
                  <MdModeEdit
                    className="listItem__row__col__iconContainer__icon"
                    size={20}
                  />
                </p>
              </div>
              <div className="listItem__row__col listItem__row__col--action">
                <p className="listItem__row__col__iconContainer">
                  <IoTrash
                    className="listItem__row__col__iconContainer__icon"
                    size={20}
                  />
                </p>
              </div>
            </>
          )}

          <div
            style={{
              position: "relative",
              height: "100%",
              display: "flex",
              alignItems: "center",
            }}
            className="listItem__row__col listItem__row__col--action"
          >
            {route === "timeline" ? (
              <div style={{ left: -2 }} className="timeline-titles">
                Status
              </div>
            ) : null}
            <p className="listItem__row__col__iconContainer">
              {is_approved ? (
                <IoCheckmarkCircle
                  color="green"
                  className="listItem__row__col__iconContainer__icon"
                  size={20}
                />
              ) : (
                <GiSandsOfTime
                  className="listItem__row__col__iconContainer__icon"
                  size={20}
                />
              )}
            </p>
          </div>
          {route === "timeline" ? (
            <div
              style={{
                position: "relative",
                height: "100%",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div className="timeline-titles">Hide/Show</div>
              <Switch
                // checked={state.checkedB}
                checked={toggle}
                onClick={() => handleChange(id)}
                // onChange={handleChange}
                color="primary"
                name="checkedB"
                inputProps={{ "aria-label": "primary checkbox" }}
              />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ListItemEducation;
