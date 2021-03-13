import React from "react";
import PATHS from "./paths";
import CareerList from "../components/MyCertifiedCareer/CareerList";
import Login from "../components/Login";
import MyCertifiedCareer from "../components/MyCertifiedCareer";
import MySkilledger from "../components/MySkilledger";
import Register from "../components/Register";
import UserProfile from "../components/UserProfile";
import Auth from "../pages/Auth";
import Dashboard from "../pages/Dashboard";
import CreateSkilledger from "../components/CreateSkilledger";
import Timeline from "../components/Timeline";
import Video from "../components/Video";
import MyAssets from "../components/MyAssets";
import SkillsAcquired from "../components/SkillsAcquired";
import PersonalSkills from "../components/PersonalSkills";
import ComputerSkills from "../components/ComputerSkills";
import Language from "../components/Language";
import ZoomDetails from "../components/ZoomDetails";
import CvSkilledger from "../components/CvSkilledger";
import InteractiveTimeline from "../components/MyCertifiedCareer/InteractiveTimeline";
import PitcherVideoContainer from "../components/PitcherVideoContainer";
import PitcherRequirements from "../components/PitcherVideoContainer/PitcherRequirements";
import CheckWebcam from "../components/PitcherVideoContainer/CheckWebcam";
import CheckMic from "../components/PitcherVideoContainer/CheckMic";
import RecordVideoWithScript from "../components/PitcherVideoContainer/RecordVideoWithScript";
import Preview from "../components/PitcherVideoContainer/Preview";
import DigitalSkilledgerList from "../components/MySkilledger/DigitalSkilledgerList";
import CvSkilledgerList from "../components/MySkilledger/CvSkilledgerList";
import MyDocledger from "../components/MyDocledger";
import Documentation from "../components/Documentation";

const routes = [
  {
    path: "/dashboard",
    component: Dashboard,
    key: "Dashboard",
    routes: [
      {
        path: "/dashboard/my-certified-career",
        component: MyCertifiedCareer,
        key: "MyCertifiedCareer",
        // isAuthRequired: true,
        routes: [
          {
            path: `/${PATHS.DASHBOARD}/${PATHS.MY_CERTIFIED_CAREER}/${PATHS.CAREER_LIST}`,
            component: CareerList,
            key: "CareerList",
          },
          {
            path: `/${PATHS.DASHBOARD}/${PATHS.MY_CERTIFIED_CAREER}/${PATHS.INTERACTIVE_TIMELINE}`,

            component: InteractiveTimeline,
            key: "InteractiveTimeline",
          },
        ],
      },
      {
        path: `/${PATHS.DASHBOARD}/${PATHS.MY_SKILLEDGER}`,
        component: MySkilledger,
        key: "MySkilledger",
        routes: [
          {
            path: `/${PATHS.DASHBOARD}/${PATHS.MY_SKILLEDGER}/${PATHS.CREATE_NEW_ONLINE_SKILLEDGER}`,
            key: "CreateSkilledger",
            component: CreateSkilledger,
            routes: [
              {
                path: `/${PATHS.DASHBOARD}/${PATHS.MY_SKILLEDGER}/${PATHS.CREATE_NEW_ONLINE_SKILLEDGER}/${PATHS.TIMELINE}`,
                component: Timeline,
                key: "Timeline",
              },
              {
                path: `/${PATHS.DASHBOARD}/${PATHS.MY_SKILLEDGER}/${PATHS.CREATE_NEW_ONLINE_SKILLEDGER}/${PATHS.VIDEO}`,
                component: Video,
                key: "Video",
              },
              {
                path: `/${PATHS.DASHBOARD}/${PATHS.MY_SKILLEDGER}/${PATHS.CREATE_NEW_ONLINE_SKILLEDGER}/${PATHS.MY_ASSETS}`,
                component: MyAssets,
                key: "MyAssets",
                routes: [
                  {
                    path: `/${PATHS.DASHBOARD}/${PATHS.MY_SKILLEDGER}/${PATHS.CREATE_NEW_ONLINE_SKILLEDGER}/${PATHS.MY_ASSETS}/${PATHS.SKILLS_ACQUIRED}`,
                    key: "SkillsAcquired",
                    component: SkillsAcquired,
                  },
                  {
                    path: `/${PATHS.DASHBOARD}/${PATHS.MY_SKILLEDGER}/${PATHS.CREATE_NEW_ONLINE_SKILLEDGER}/${PATHS.MY_ASSETS}/${PATHS.PERSONAL_SKILLS}`,
                    key: "PersonalSkills",
                    component: PersonalSkills,
                  },
                  {
                    path: `/${PATHS.DASHBOARD}/${PATHS.MY_SKILLEDGER}/${PATHS.CREATE_NEW_ONLINE_SKILLEDGER}/${PATHS.MY_ASSETS}/${PATHS.COMPUTER_SKILLS}`,
                    key: "ComputerSkills",
                    component: ComputerSkills,
                  },
                  {
                    path: `/${PATHS.DASHBOARD}/${PATHS.MY_SKILLEDGER}/${PATHS.CREATE_NEW_ONLINE_SKILLEDGER}/${PATHS.MY_ASSETS}/${PATHS.LANGUAGE}`,
                    key: "Language",
                    component: Language,
                  },
                ],
              },
              {
                path: `/${PATHS.DASHBOARD}/${PATHS.MY_SKILLEDGER}/${PATHS.CREATE_NEW_ONLINE_SKILLEDGER}/${PATHS.ZOOM_DETAILS}`,
                component: ZoomDetails,
                key: "ZoomDetails",
              },
              {
                path: `/${PATHS.DASHBOARD}/${PATHS.MY_SKILLEDGER}/${PATHS.CREATE_NEW_ONLINE_SKILLEDGER}/${PATHS.CV_SKILLEDGER}`,
                component: CvSkilledger,
                key: "CvSkilledger",
              },
            ],
          },
          {
            path: `/${PATHS.DASHBOARD}/${PATHS.MY_SKILLEDGER}/${PATHS.DIGITAL_SKILLEDGER_LIST}`,
            key: "DigitalSkilledgerList",
            component: DigitalSkilledgerList,
          },
          {
            path: `/${PATHS.DASHBOARD}/${PATHS.MY_SKILLEDGER}/${PATHS.CV_SKILLEDGER_LIST}`,
            key: "DigitalSkilledgerList",
            component: CvSkilledgerList,
          },
        ],
      },
      {
        path: `/${PATHS.DASHBOARD}/${PATHS.PITCHER_VIDEO}`,
        key: "PitcherVideo",
        component: PitcherVideoContainer,
        routes: [
          {
            path: `/${PATHS.DASHBOARD}/${PATHS.PITCHER_VIDEO}/${PATHS.PITCHER_REQUIREMENTS}`,
            key: "PitcherRequiremtns",
            component: PitcherRequirements,
          },
          {
            path: `/${PATHS.DASHBOARD}/${PATHS.PITCHER_VIDEO}/${PATHS.CHECK_WEBCAM}`,
            key: "CheckWebcam",
            component: CheckWebcam,
          },
          {
            path: `/${PATHS.DASHBOARD}/${PATHS.PITCHER_VIDEO}/${PATHS.CHECK_MIC}`,
            key: "CheckMic",
            component: CheckMic,
          },
          {
            path: `/${PATHS.DASHBOARD}/${PATHS.PITCHER_VIDEO}/${PATHS.PRESENTATION}`,
            key: "Presentation",
            component: RecordVideoWithScript,
          },
          {
            path: `/${PATHS.DASHBOARD}/${PATHS.PITCHER_VIDEO}/${PATHS.PREVIEW}`,
            key: "Preview",
            component: Preview,
          },
        ],
      },
      {
        path: `/${PATHS.DASHBOARD}/${PATHS.MY_DOCLEDGER}`,
        key: "MyDocledger",
        component: MyDocledger,
      },
      {
        path: `/${PATHS.DASHBOARD}/${PATHS.DOCUMENTATION}`,
        key: "Documentation",
        component: Documentation,
        routes: [
          {
            path: `/${PATHS.DASHBOARD}/${PATHS.DOCUMENTATION}/${PATHS.TIMELINE}`,
            component: InteractiveTimeline,
            key: "Timeline",
          },
        ],
      },
      {
        path: "/dashboard/user-profile",
        component: UserProfile,
        key: "UserProfile",
      },
    ],
  },
  {
    path: `/`,
    component: Auth,
    key: "Auth",
    routes: [
      {
        path: `/`,
        component: Login,
        key: "Login",
        exact: true,

        // isAuthRequired: true,
      },
      {
        path: `/${PATHS.REGISTER}`,
        component: Register,
        key: "Register",
        exact: true,

        // isAuthRequired: true,
      },
    ],
  },
];

export default routes;
