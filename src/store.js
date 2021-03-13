import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import { composeWithDevTools } from "redux-devtools-extension";

import {
  userLoginReducer,
  userRegisterReducer,
  userUpdateProfileReducer,
  addEducationReducer,
  addExperienceReducer,
  addFormationReducer,
  getInteractiveTimeline,
  getInteractiveTimelineReducer,
} from "./redux/reducers/usersReducer";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userUpdateProfile: userUpdateProfileReducer,
  addEducation: addEducationReducer,
  addExperience: addExperienceReducer,
  addFormation: addFormationReducer,
  getInteractiveTimeline: getInteractiveTimelineReducer,
});

const userInfoFormStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const userEducationInfoFormStorage = localStorage.getItem("userEducationInfo")
  ? JSON.parse(localStorage.getItem("userEducationInfo"))
  : null;

const userFormationInfoStorage = localStorage.getItem("userFormationInfo")
  ? JSON.parse(localStorage.getItem("userFormationInfo"))
  : null;

const userInteractiveTimelineStorage = localStorage.getItem(
  "userInteractiveTimeline",
)
  ? JSON.parse(localStorage.getItem("userInteractiveTimeline"))
  : null;

let initialState = {
  userLogin: { userInfo: userInfoFormStorage },
  addEducation: { userEducationInfo: userEducationInfoFormStorage },
  addFormation: { userFormationInfo: userFormationInfoStorage },
  getInteractiveTimeline: {
    userInteractiveTimeline: userInteractiveTimelineStorage,
  },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
