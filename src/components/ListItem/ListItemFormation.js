import React from "react";
import { Switch } from "@material-ui/core";
import { MdModeEdit } from "react-icons/md";
import { IoTrash, IoCheckmarkCircle } from "react-icons/io5";
import { GiSandsOfTime } from "react-icons/gi";

import "./listItem.scss";
import { Fragment } from "react";

const ListItemFormation = ({ formation, route }) => {
  const {
    formation_title,
    domain,
    city,
    year_end_formation,
    Status,
    description,
    type_of_proof,
    value_of_proof,
    reference,
    is_active,
    is_approved,
  } = formation;
  return (
    <div className="listItem">
      <div className="listItem__row">
        <div className="listItem__row__content">
          <div className="listItem__row__col listItem__row__content__col">
            <p>{formation_title}</p>
            <p>{year_end_formation}</p>
          </div>
          <div className="listItem__row__col listItem__row__content__col">
            <p>{domain}</p>
            <p>{city}</p>
          </div>
          <div className="listItem__row__col listItem__row__content__col">
            <p>{Status}</p>
            <p>{value_of_proof}</p>
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

export default ListItemFormation;
