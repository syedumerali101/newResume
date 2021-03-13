import { Grid, Slider } from "@material-ui/core";
import React, { useState } from "react";
import { FaFlagUsa, FaFlagCheckered, FaFontAwesomeFlag } from "react-icons/fa";
import "./language.scss";

const LANGUAGES = [
  {
    language: "English",
    icon: FaFlagUsa,
    id: 1,
  },
  {
    language: "French",
    icon: FaFlagCheckered,
    id: 2,
  },
  {
    language: "Spanish",
    icon: FaFontAwesomeFlag,
    id: 3,
  },
];

const Language = () => {
  const [languages, setLanguages] = useState([]);
  const [value, setValue] = useState({
    1: 0,
    2: 0,
    3: 0,
  });
  console.log("the value is :",value);
  return (
    <div className="language">
      <Grid container>
        <Grid
          className="language__gridItem language__gridItem--left"
          item
          xs={7}
        >
          <Grid item xs={6}>
            <div className="language__title">Flag</div>
            <div className="language__selected">
              {languages.map((lang) => (
                <div className="language__selected__flag">
                  <lang.icon size={30} />
                  <span>{lang.language}</span>
                </div>
              ))}
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className="language__title">Level</div>
            <div className="language__selected language__selected--right">
              {languages.map((x) => (
                <div className="language__selected__flag">
                  <Slider
                    className="language__slider"
                    min={0}
                    max={100}
                    value={value[x.id]}
                    onChange={(e, newVal) =>
                      setValue((prev) => ({ ...prev, [x.id]: newVal }))
                      
                    }
                    
                  />
                </div>
              ))}
            </div>
          </Grid>
        </Grid>
        <Grid className="language__gridItem" item xs={5}>
          <div className="language__right__content">
            <div className="language__right__content__title">
              Add a Skilledger Model
            </div>
            <div>Language</div>
            <div className="language__right__content__languages">
              {LANGUAGES.map((lang) => (
                <div
                  onClick={() => {
                    setLanguages((prev) =>
                      prev.findIndex((x) => x.id === lang.id) === -1
                        ? [...prev, lang]
                        : prev,
                    );
                  }}
                  className="language__right__content__languages--inner"
                >
                  <lang.icon size={30} />
                  <p>{lang.language}</p>
                </div>
              ))}
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Language;
