import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { AiFillFolder, AiFillFolderOpen } from "react-icons/ai";
import { HiArrowCircleRight } from "react-icons/hi";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import "./myDocledger.scss";

// replace(/([A-Z])/g, ' $1').trim()

const FOLDERS = {
  myPapers: {
    title: "My Papers",
    documents: [
      { fileName: "Bachelor +4", id: 1 },
      { fileName: "lorem ipsum", id: 12 },
      {
        fileName:
          "1899234--23429882400234dsfsf-2342988240.1899234--23429882400234dsfsf-2342988240.1899234--23429882400234dsfsf-2342988240.1899234--23429882400234dsfsf-2342988240.1899234--23429882400234dsfsf-2342988240.jpg",
        id: 31,
      },
    ],

    folders: [
      {
        key: "identity",
        title: "Identity",
      },
      {
        key: "driving-license",
        title: "Driving License",
      },
      {
        key: "working license",
        title: "Working License",
      },
    ],
  },
  workPaper: {
    title: "Work Paper",
    documents: [
      { fileName: "Bachelor +4", id: 1 },
      { fileName: "lorem ipsum", id: 12 },
      {
        fileName:
          "1899234--23429882400234dsfsf-2342988240.1899234--23429882400234dsfsf-2342988240.1899234--23429882400234dsfsf-2342988240.1899234--23429882400234dsfsf-2342988240.1899234--23429882400234dsfsf-2342988240.jpg",
        id: 31,
      },
    ],

    folders: [
      {
        key: "certificate",
        title: "Certificate",
      },
      {
        key: "contract",
        title: "Contract",
      },
      {
        key: "salary",
        title: "Salary",
      },
      {
        key: "letter",
        title: "Letter",
      },
      {
        key: "trainee",
        title: "Trainee",
      },
      {
        key: "other",
        title: "Other",
      },
    ],
  },
  education: {
    title: "Education",
    documents: [
      { fileName: "Bachelor +4", id: 1 },
      { fileName: "lorem ipsum", id: 12 },
      {
        fileName:
          "1899234--23429882400234dsfsf-2342988240.1899234--23429882400234dsfsf-2342988240.1899234--23429882400234dsfsf-2342988240.1899234--23429882400234dsfsf-2342988240.1899234--23429882400234dsfsf-2342988240.jpg",
        id: 31,
      },
    ],

    folders: [
      {
        key: "diploma",
        title: "Diploma",
      },
    ],
  },
  formation: {
    title: "Formation",
    documents: [
      { fileName: "Bachelor +4", id: 1 },
      { fileName: "lorem ipsum", id: 12 },
      {
        fileName:
          "1899234--23429882400234dsfsf-2342988240.1899234--23429882400234dsfsf-2342988240.1899234--23429882400234dsfsf-2342988240.1899234--23429882400234dsfsf-2342988240.1899234--23429882400234dsfsf-2342988240.jpg",
        id: 31,
      },
    ],

    folders: [
      {
        key: "accreditation",
        title: "Accreditation",
      },
      {
        key: "habilitation",
        title: "Habilitation",
      },
      {
        key: "license",
        title: "License",
      },
      {
        key: "authorization",
        title: "Authorization",
      },
      {
        key: "certification",
        title: "Certification",
      },
      {
        key: "other",
        title: "Other",
      },
    ],
  },
  various: {
    title: "Various",
    documents: [
      { fileName: "Bachelor +4", id: 1 },
      { fileName: "lorem ipsum", id: 12 },
      {
        fileName:
          "1899234--23429882400234dsfsf-2342988240.1899234--23429882400234dsfsf-2342988240.1899234--23429882400234dsfsf-2342988240.1899234--23429882400234dsfsf-2342988240.1899234--23429882400234dsfsf-2342988240.jpg",
        id: 31,
      },
    ],

    folders: [
      {
        key: "rename",
        title: "Rename",
      },
    ],
  },
};

const MyDocledger = () => {
  const [activeFolder, setActiveFolder] = useState([]);

  return (
    <div className="myDocledger">
      <header>
        <div className="myDocledger__title">
          Welcome To Your Private Docledger
        </div>
        <div className="myDocledger__search">
          <TextField
            className="myDocledger__search__field"
            size="small"
            id="outlined-search"
            placeholder="Search..."
            type="search"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AiOutlineSearch size={25} />
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div className="myDocledger__folders">
          <Grid container>
            {Object.keys(FOLDERS).map((key) => {
              const folder = FOLDERS[key];
              const { title, folders, documents } = folder;
              return (
                <Grid
                  className="myDocledger__folders__folder"
                  key={title}
                  item
                  lg={3}
                >
                  <div className="myDocledger__folders__folder__title">
                    {title}
                  </div>
                  {folders.map((folder) => (
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
                          {documents.map((doc) => (
                            <div key={doc.id} className="file">
                              <input type="checkbox" />
                              <HiArrowCircleRight
                                size={20}
                                color="#396fd4"
                              />{" "}
                              <span className="file__txt">{doc.fileName}</span>
                            </div>
                          ))}
                        </div>
                      </AccordionDetails>
                    </Accordion>
                  ))}
                </Grid>
              );
            })}
          </Grid>
        </div>
      </header>
    </div>
  );
};

export default MyDocledger;
