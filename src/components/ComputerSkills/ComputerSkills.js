import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { HiPlusCircle } from "react-icons/hi";
import { AiFillFolder, AiFillFolderOpen } from "react-icons/ai";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./computerSkills.scss";

const FOLDERS = [
  {
    key: "general",
    title: "General",
  },
  {
    key: "software",
    title: "Software",
  },
  {
    key: "gSuite",
    title: "G-Suite",
  },
  {
    key: "office",
    title: "Office",
  },
];

const DOCUMENTS = {
  office: [
    { fileName: "Team Work", id: 1 },
    { fileName: "lorem ipsum", id: 12 },
    {
      fileName: "Lorem  2",
      id: 31,
    },
  ],
  gSuite: [
    { fileName: "Team Work", id: 1 },
    { fileName: "lorem ipsum", id: 12 },
    {
      fileName: "Lorem  2",
      id: 31,
    },
  ],
  software: [
    { fileName: "Team Work", id: 1 },
    { fileName: "lorem ipsum", id: 12 },
    {
      fileName: "Lorem  2",
      id: 31,
    },
  ],
  general: [
    { fileName: "Team Work", id: 1 },
    { fileName: "lorem ipsum", id: 12 },
    {
      fileName: "Lorem  2",
      id: 31,
    },
  ],
};

const ComputerSkills = () => {
  const [activeFolder, setActiveFolder] = useState([]);
  const [documents, setDocuments] = useState({
    general: [],
    software: [],
    gSuite: [],
    office: [],
  });
  return (
    <div className="computerSkills">
      <Grid container>
        <Grid className="computerSkills__gridItem" item xs={7}>
          <div className="computerSkills__tags">
            {Object.keys(documents).map((key) => (
              <div className="computerSkills__tags__container">
                <div className="computerSkills__tags__title">
                  {key === "gSuite" ? "G-Suite" : key}
                </div>
                <div className="computerSkills__tags--inner">
                  {documents[key].length ? (
                    documents[key].map((doc) => (
                      <div key={doc.id} className="computerSkills__tags__tag">
                        <span />
                        <span>{doc.fileName}</span>

                        <IoCloseSharp
                          onClick={() =>
                            setDocuments((prev) => ({
                              ...prev,
                              [key]: prev[key].filter((x) => x.id !== doc.id),
                            }))
                          }
                          className="computerSkills__tags__tag__close"
                          size={25}
                        />
                      </div>
                    ))
                  ) : (
                    <span className="no-msg">Add some documents.</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Grid>
        <Grid className="computerSkills__gridItem" item xs={5}>
          <div className="computerSkills__right__content">
            <div className="computerSkills__right__content__title">
              Add a Skilledger Model
            </div>
            <div>Computer Skills</div>
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
                      {DOCUMENTS[folder.key].map((doc) => (
                        <div
                          onClick={() =>
                            setDocuments((prev) =>
                              prev[folder.key].findIndex(
                                (x) => x.id === doc.id,
                              ) === -1
                                ? {
                                    ...prev,
                                    [folder.key]: [...prev[folder.key], doc],
                                  }
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

export default ComputerSkills;
