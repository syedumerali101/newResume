const EDUCATION_TYPES = [
  { value: "none", label: "Select education type" },
  {
    value: "BEPC 3eme",
    label: "BEPC 3eme",
  },
  { value: "2nd, 1ere, terminal acheve", 
  label: "2nd, 1ere, terminal acheve" },
  { value: "CAP / BEP", label: "CAP / BEP" },
  { value: "other", label: "Other" }
  
];

const YEAR_END = [
  { value: "none", label: "Select year" },
  { value: 2020, label: 2020 },
  { value: 2019, label: 2019 },
  { value: 2018, label: 2018 },
  { value: 2017, label: 2017 },
  { value: 2016, label: 2016 },
  { value: 2015, label: 2015 },
  { value: 2014, label: 2014 },
  { value: 2013, label: 2013 },
  { value: 2012, label: 2012 },
  { value: 2011, label: 2011 },
  { value: 2010, label: 2010 },
];

const STATUS = [
  { value: "none", label: "Select status" },
  { value: "obtained", label: "Obtained" },
  { value: "level", label: "Level" },
  { value: "obtained out france", label: "Obtained out France" },
];

const VALIDITY = [
  { value: "none", label: "Select validity" },
  { value: "permanent", label: "Permanent" },
  { value: "in process", label: "In process" },
  { value: "expired", label: "Expired" },
];

const PROOFS = [
  { value: "none", label: "Select type of proof" },
  { value: "from my docledger", label: "From my docledger" },
  { value: "upload from computer", label: "Upload from computer" },
  { value: "a website link", label: "A website link" },
  { value: "a video link", label: "A Vvdeo link" },
];

const FOLDERS = [
  { value: "none", label: "Select a folder" },
  { value: "folder work certificate", label: "Folder work certificate" },
  { value: "xxx certificate", label: "XXX certificate" },
  { value: "xxx certificat", label: "XXX certificat" },
  { value: "etc", label: "etc" },
];

const FORMATIONS = [
  { value: "none", label: "Select a formation" },
  { value: "certification", label: "Certification" },
  { value: "formation", label: "Formation" },
  { value: "license", label: "License" },
  { value: "habilitation", label: "Habilitation" },
  { value: "accreditation", label: "Accreditation" },
  { value: "diploma", label: "Diploma" },
  { value: "authorization", label: "Authorization" },
];

const GEO_MOBILITIES = [
  { value: "none", label: "Select geo mobility" },
  { value: "communal", label: "Communal" },
  { value: "departmental", label: "Departmental" },
  { value: "regional", label: "Regional" },
  { value: "national", label: "national" },
  { value: "international", label: "International" },
];

const DISPONIBILITIES = [
  { value: "none", label: "Select disponibility" },
  { value: "immediately", label: "Immediately" },
  { value: "prior in process", label: "Prior in process" },
  { value: "prior notice > 1 month", label: "Prior notice > 1 month" },
  { value: "prior notice > 2 months", label: "Prior notice > 2 months" },
];

export {
  STATUS,
  YEAR_END,
  EDUCATION_TYPES,
  PROOFS,
  FOLDERS,
  FORMATIONS,
  VALIDITY,
  GEO_MOBILITIES,
  DISPONIBILITIES,
};
