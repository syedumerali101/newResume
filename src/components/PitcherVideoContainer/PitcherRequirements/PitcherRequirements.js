import { Grid } from "@material-ui/core";
import React from "react";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { MdWifi, MdLaptop, MdSmartphone } from "react-icons/md";
import { useHistory, Link } from "react-router-dom";
import PATHS from "router/paths";
import "./pitcherRequirements.scss";

const PitcherRequirements = () => {
  const history = useHistory();
  return (
    <div className="pitcherRequirements">
      <div className="pitcherRequirements__header">
        <div className="title--lg pitcherRequirements__title">
          What You'll Need to Get Started:
        </div>
      </div>

      <Grid className="pitcherRequirements__grid" container>
        {/* <Grid className="pitcherRequirements__gridItem" item xs={1}></Grid> */}
        <Grid className="pitcherRequirements__gridItem" item xs={6}>
          <div className="pitcherRequirements__requirement">
            <MdWifi size={90} color="#415bf6" />
            <div className="pitcherRequirements__requirement__txt">
              Internet Connection
            </div>
          </div>
          <div className="pitcherRequirements__requirement">
            <MdLaptop size={90} color="#415bf6" />
            <div className="pitcherRequirements__requirement__txt">
              Computer with webcam
            </div>
          </div>
          <div className="pitcherRequirements__requirement">
            <MdSmartphone size={90} color="#415bf6" />
            <div className="pitcherRequirements__requirement__txt">
              Smartphone
            </div>
          </div>
        </Grid>
        <Grid className="pitcherRequirements__gridItem" item xs={6}>
          The key to acing an interview is practice, so be sure to check out our
          interview. Deferred revenue represents cash received from customers
          for services asset account of inventory is reduced by the amount of
          the write-down, and so is shareholders’ equity. The income statement
          is hit with an expense in either COGS or a separate line item for the
          amount of the write-down, reducing net income. On the cash flow
          statement, the write-down is added back to CFO as it’s a non-cash
          expense but must not be double-counted in the changes of non-cash
          working capital by the amount of the write-down so be sure to check
          out our interview.
        </Grid>
      </Grid>
      <div className="pitcherRequirements__btnContainer">
        <Link
          to={`${PATHS.CHECK_WEBCAM}`}
          className="pitcherRequirements__btnContainer__btn btn--primary"
        >
          Start
        </Link>
      </div>
    </div>
  );
};

export default PitcherRequirements;
