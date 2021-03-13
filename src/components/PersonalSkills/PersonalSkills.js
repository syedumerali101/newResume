import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import "./personalSkills.scss";
import { IoCloseSharp } from "react-icons/io5";
import { HiPlusCircle } from "react-icons/hi";
import { AiFillFolder, AiFillFolderOpen } from "react-icons/ai";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const FOLDERS = [
  {
    key: "general",
    title: "General",
  },
  {
    key: "managementSkills",
    title: "Management Skills",
  },
  {
    key: "industrialSkills",
    title: "Industrial Skills",
  },
];

const DOCUMENTS = [
  { fileName: "Team Work", id: 1 },
  { fileName: "lorem ipsum", id: 12 },
  {
    fileName: "Lorem  2",
    id: 31,
  },
  {
    fileName: "Lorem 3",
    id: 331,
  },
  {
    fileName: "Lorem 4",
    id: 314,
  },
];

const PersonalSkills = () => {
  const [activeFolder, setActiveFolder] = useState([]);
  const [documents, setDocuments] = useState([]);
  return (
    <div className="personalSkills">
      <Grid container>
        <Grid className="personalSkills__gridItem" item xs={7}>
          <div className="personalSkills__tags">
            {documents.length
              ? documents.map((doc) => (
                  <div key={doc.id} className="personalSkills__tags__tag">
                    <span />
                    <span>{doc.fileName}</span>

                    <IoCloseSharp
                      onClick={() =>
                        setDocuments((prev) =>
                          prev.filter((x) => x.id !== doc.id),
                        )
                      }
                      className="personalSkills__tags__tag__close"
                      size={25}
                    />
                  </div>
                ))
              : "Add some documents."}
          </div>
        </Grid>
        <Grid className="personalSkills__gridItem" item xs={5}>
          <div className="personalSkills__right__content">
            <div className="personalSkills__right__content__title">
              Add a Skilledger Model
            </div>
            <div>Personal Skills</div>
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

export default PersonalSkills;
