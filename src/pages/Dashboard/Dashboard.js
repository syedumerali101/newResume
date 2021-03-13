import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { logout } from "../../redux/actions/userLoginAction";

import { Switch, Link, useHistory, useLocation } from "react-router-dom";
import { RouteWithSubRoutes } from "../../router";
import PATHS from "../../router/paths";
import { IoMdSettings } from "react-icons/io";
import { CgLogOff } from "react-icons/cg";
import { IoIosMenu } from "react-icons/io";
import { BsPersonFill } from "react-icons/bs";
import { IoCheckmarkCircle, IoVideocam, IoDocument } from "react-icons/io5";
import { SiSkillshare } from "react-icons/si";
import { FaFolder } from "react-icons/fa";
import "./dashboard.scss";
import Modal from "react-modal";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { Avatar } from "@material-ui/core";
import AvatarImg from "../../assets/images/avatar.png";
import Register from "../../components/Register/Register";

const drawerWidth = 250;

const DRAWER_DATA = [
  {
    title: "My Certified Career",
    icon: IoCheckmarkCircle,
    color: "#409E14",
    path: "my-certified-career/career-list",
  },
  {
    title: "My Skilledger",
    icon: SiSkillshare,
    color: "#0A63A4",
    path: `${PATHS.MY_SKILLEDGER}/${PATHS.CREATE_NEW_ONLINE_SKILLEDGER}/${PATHS.TIMELINE}`,
  },
  {
    title: "Pitcher Video",
    icon: IoVideocam,
    path: `${PATHS.PITCHER_VIDEO}`,
  },
  {
    title: "My Docledger",
    icon: FaFolder,
    color: "#054277",
    path: `${PATHS.MY_DOCLEDGER}`,
  },
  {
    title: "Documentation",
    icon: IoDocument,
    path: `${PATHS.DOCUMENTATION}`,
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    position: "relative",
  },
  drawerOpen: {
    width: drawerWidth,
    zIndex: 1,
    paddingTop: 68,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    paddingTop: 68,

    zIndex: 1,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  listItemIcon: {
    paddingLeft: 8,
  },
}));

const Dashboard = ({ routes, props, location }) => {
  const classes = useStyles();
  const history = useHistory();
  const { pathname } = useLocation();
  const [open, setOpen] = React.useState(true);

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);

  const { userInfo } = userLogin;

  const redirect = location.search ? location.search.split("=")[1] : "/";

  const logoutHandler = () => {
    console.log("logout");
    dispatch(logout());
    history.push(redirect);
  };
  

  return (
    <div className="dashboard">
      {/* --- HEADER --- */}
      <header className="dashboard__header">
        <div className="dashboard__header__logoContainer">
          <IoIosMenu
            onClick={() => setOpen((prev) => !prev)}
            className="dashboard__header__logoContainer__menuIcon"
            size={40}
          />
          <div className="title--lg">Skilledger</div>
        </div>

        {/* <div className="dashboard__header__centerTitle title--lg">
          Welcome {userInfo.data.first_name} {userInfo.data.last_name} ?
          {userInfo.data.first_name} {userInfo.data.last_name} : User
        </div> */}

        {userInfo ? (
          <div className="dashboard__header__centerTitle title--lg">
            Welcome {userInfo.data.first_name} {userInfo.data.last_name}
          </div>
        ) : (
          <div className="dashboard__header__centerTitle title--lg">
            Welcome User
          </div>
        )}

        <div className="dashboard__header__right">
          {pathname.includes("create-new-online-skilledger") ? (
            <div className="btn--secondary preview-btn">Preview</div>
          ) : null}
        </div>
      </header>
      {/* --- DRAWER --- */}
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className="dashboard__sidebar__avatar">
          <Avatar
            src={AvatarImg}
            alt="avatar"
            className="dashboard__sidebar__avatar__img"
          />
        </div>
        <List>
          {DRAWER_DATA.map((item, index) => (
            <Link className="link" to={`/dashboard/${item.path}`}>
              <ListItem button key={item.title}>
                <ListItemIcon className={classes.listItemIcon}>
                  <item.icon
                    // onClick={() => setOpen((prev) => !prev)}
                    color={item.color}
                    size={25}
                    className="dashboard__header__logoContainer__menuIcon"
                  />
                </ListItemIcon>
                <ListItemText
                  className={`listItemTxt ${!open && "li"}`}
                  primary={item.title}
                />
              </ListItem>
            </Link>
          ))}
        </List>
        <div
          className={`dashboard__sidebar__actionBtns ${
            !open && "dashboard__sidebar__actionBtns--closed"
          }`}
        >
          <div
            onClick={logoutHandler}
            className={`dashboard__sidebar__actionBtns__icon ${
              !open && "dashboard__sidebar__actionBtns__icon--closed"
            }`}
          >
            <CgLogOff size={25} />
          </div>
          <div
            className={`dashboard__sidebar__actionBtns__icon ${
              !open && "dashboard__sidebar__actionBtns__icon--closed"
            }`}
          >
            <IoMdSettings size={25} />
          </div>
          <div
            onClick={() => history.push("/dashboard/user-profile")}
            className={`dashboard__sidebar__actionBtns__icon ${
              !open && "dashboard__sidebar__actionBtns__icon--closed"
            }`}
          >
            <BsPersonFill size={25} />
          </div>
        </div>
      </Drawer>

      {/* --- CONTENT --- */}
      <main
        className={`dashboard__content ${
          open ? "dashboard__content--open" : "dashboard__content--close"
        }`}
      >
        <div className="dashboard__content__inner">
          {pathname === "/dashboard" && (
            <div className="dashboard__content__inner--upper">
              <div className="title--md">
                Create your Skilledger, keep it free for life
              </div>
              <div
                onClick={() => history.push("/dashboard/user-profile")}
                className="dashboard__content__inner__titleBtn"
              >
                <span>Start to create your profile</span>{" "}
                <BsPersonFill size={25} />
              </div>
            </div>
          )}
          {pathname !== "/dashboard" && (
            <div className="dashboard__content__inner--lower">
              <Switch>
                {routes.map((route) => (
                  <RouteWithSubRoutes key={route.key} {...route} />
                ))}
              </Switch>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
