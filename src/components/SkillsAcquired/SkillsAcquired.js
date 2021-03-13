import {
  Accordion,
  AccordionSummary,
  Grid,
  MenuItem,
  AccordionDetails,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import { AiFillFolder, AiFillFolderOpen } from "react-icons/ai";
import { HiPlusCircle } from "react-icons/hi";
import React, { useState } from "react";
import { FORMATIONS, YEAR_END } from "../../constants/options";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./skillsAcquired.scss";

const FOLDERS = [
  {
    key: "diploma",
    title: "Diploma",
  },
  {
    key: "formation",
    title: "Formation",
  },
  {
    key: "license",
    title: "License",
  },
  {
    key: "habilitation",
    title: "Habilitation",
  },
  {
    key: "authorization",
    title: "Authorization",
  },
  {
    key: "accreditation",
    title: "Accreditation",
  },
];

const DOCUMENTS = [
  { fileName: "Bachelor +4", id: 1 },
  { fileName: "lorem ipsum", id: 12 },
  {
    fileName:
      "1899234--23429882400234dsfsf-2342988240.1899234--23429882400234dsfsf-2342988240.1899234--23429882400234dsfsf-2342988240.1899234--23429882400234dsfsf-2342988240.1899234--23429882400234dsfsf-2342988240.jpg",
    id: 31,
  },
];

const SkillsAcquired = () => {
  const [activeFolder, setActiveFolder] = useState([]);
  const [documents, setDocuments] = useState([]);
  return (
    <div className="skillsAcquired">
      <Grid container>
        <Grid item xs={7}>
          <div className="skillsAcquired__fieldContainer">
            <p className="label">Years of Exprience For This Job</p>
            <TextField
              className="skillsAcquired__input"
              placeholder="Example: 2 years, < 1 year"
              defaultValue=""
              variant="outlined"
            />
          </div>
          <div className="skillsAcquired__fieldContainer">
            <p className="label">Type</p>
            <Select
              variant="outlined"
              defaultValue="none"
              className="skillsAcquired__input"
              // value={state.age}
              // onChange={handleChange}

              // inputProps={{
              //   name: 'age',
              //   id: 'outlined-age-native-simple',
              // }}
            >
              {FORMATIONS.map((type, index) => (
                <MenuItem
                  key={type.label}
                  disabled={type.value === "none"}
                  value={type.value}
                >
                  {type.label}
                </MenuItem>
              ))}
            </Select>
          </div>
          <div className="skillsAcquired__fieldContainer skillsAcquired__selectedDocs">
            {!documents.length ? (
              <span>No documents selected</span>
            ) : (
              documents.map((doc) => (
                <div key={doc.id} className="skillsAcquired__folders__file">
                  <HiPlusCircle size={20} color="#396fd4" />{" "}
                  <span className="file__txt">{doc.fileName}</span>
                </div>
              ))
            )}
          </div>
          <div className="skillsAcquired__fieldContainer">
            <p className="label">Name Title Type</p>
            <TextField
              className="skillsAcquired__input"
              placeholder="Example: Bachelor +4 commercial"
              defaultValue=""
              variant="outlined"
            />
          </div>
          <div className="skillsAcquired__fieldContainer">
            <p className="label">Type</p>
            <Select
              variant="outlined"
              defaultValue="none"
              className="skillsAcquired__input"
              // value={state.age}
              // onChange={handleChange}

              // inputProps={{
              //   name: 'age',
              //   id: 'outlined-age-native-simple',
              // }}
            >
              {YEAR_END.map((type, index) => (
                <MenuItem
                  key={type.label}
                  disabled={type.value === "none"}
                  value={type.value}
                >
                  {type.label}
                </MenuItem>
              ))}
            </Select>
          </div>
          <div className="skillsAcquired__fieldContainer skillsAcquired__btnContainer">
            <button className="btn--primary skillsAcquired__btnContainer__btn">
              Save
            </button>
          </div>
        </Grid>
        <Grid className="skillsAcquired__right" item xs={5} md={5} lg={5}>
          <div className="skillsAcquired__right__content">
            <div className="skillsAcquired__right__content__title">
              Add From Docledger List
            </div>
            <div className="skillsAcquired__fieldContainer">
              <p className="label">Folder</p>
              <Select
                variant="outlined"
                defaultValue="none"
                className="skillsAcquired__input"
                // value={state.age}
                // onChange={handleChange}

                // inputProps={{
                //   name: 'age',
                //   id: 'outlined-age-native-simple',
                // }}
              >
                {FORMATIONS.map((type, index) => (
                  <MenuItem
                    key={type.label}
                    disabled={type.value === "none"}
                    value={type.value}
                  >
                    {type.label}
                  </MenuItem>
                ))}
              </Select>
            </div>
            <div className="skillsAcquired__folders">
              {FOLDERS.map((folder) => (
                <Accordion
                  key={folder.key}
                  onChange={() => {
                    setActiveFolder((prev) =>
                      prev.includes(folder.key)
                        ? prev.filter((x) => x !== folder.key)
                        : [...prev, folder.key],
                    );
                  }}
                >
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>
                      {activeFolder.includes(folder.key) ? (
                        <AiFillFolderOpen size={40} color="#45818E" />
                      ) : (
                        <AiFillFolder size={40} color="#45818E" />
                      )}{" "}
                      <span className="skillsAcquired__folders__title">
                        {folder.title}
                      </span>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className="skillsAcquired__folders__files">
                      {DOCUMENTS.map((doc) => (
                        <div
                          onClick={() =>
                            setDocuments((prev) =>
                              prev.findIndex((x) => x.id === doc.id) === -1
                                ? [...prev, doc]
                                : prev,
                            )
                          }
                          key={doc.id}
                          className="skillsAcquired__folders__file"
                        >
                          <HiPlusCircle size={20} color="#396fd4" />{" "}
                          <span className="file__txt">{doc.fileName}</span>
                        </div>
                      ))}
                    </div>
                  </AccordionDetails>
                </Accordion>
              ))}
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default SkillsAcquired;
