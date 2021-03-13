import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_SUCCESS,
  USER_UPDATE_PROFILE_FAIL,
  USER_UPDATE_PROFILE_RESET,
  EDUCTAION_UPDATE_REQUEST,
  EDUCATION_UPDATE_SUCCESS,
  EDUCATION_UPDATE_FAIL,
  EXPERIENCE_UPDATE_REQUEST,
  EXPERIENCE_UPDATE_SUCCESS,
  EXPERIENCE_UPDATE_FAIL,
  FORMATION_UPDATE_REQUEST,
  FORMATION_UPDATE_SUCCESS,
  FORMATION_UPDATE_FAIL,
  INTERACTIVE_TIMELINE_FAIL,
  INTERACTIVE_TIMELINE_SUCCESS,
  INTERACTIVE_TIMELINE_REQUEST,
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAIL,
} from "../constants/usersConstants";

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {
        loading: true,
        data: {},
      };
    case USER_LOGIN_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
      };
    case USER_LOGIN_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return {
        loading: true,
      };
    case USER_REGISTER_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
      };
    case USER_REGISTER_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const userUpdateProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_UPDATE_PROFILE_REQUEST:
      return {
        loading: true,
      };
    case USER_UPDATE_PROFILE_SUCCESS:
      return {
        loading: false,
        success: true,
        userInfo: action.payload,
      };
    case USER_UPDATE_PROFILE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const addEducationReducer = (state = [[]], action) => {
  switch (action.type) {
    case EDUCTAION_UPDATE_REQUEST:
      return {
        loading: true,
      };
    case EDUCATION_UPDATE_SUCCESS:
      return {
        loading: false,
        success: true,
        userEducationInfo: action.payload,
      };
    case EDUCATION_UPDATE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const addFormationReducer = (state = [[]], action) => {
  switch (action.type) {
    case FORMATION_UPDATE_REQUEST:
      return {
        loading: true,
      };
    case FORMATION_UPDATE_SUCCESS:
      return {
        loading: false,
        success: true,
        userFormationInfo: action.payload,
      };
    case FORMATION_UPDATE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const addExperienceReducer = (state = {}, action) => {
  switch (action.type) {
    case EXPERIENCE_UPDATE_REQUEST:
      return {
        loading: true,
      };
    case EXPERIENCE_UPDATE_SUCCESS:
      return {
        loading: false,
        success: true,
        userExperience: action.payload,
      };
    case EXPERIENCE_UPDATE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getInteractiveTimelineReducer = (state = {}, action) => {
  switch (action.type) {
    case INTERACTIVE_TIMELINE_REQUEST:
      return {
        loading: true,
      };
    case INTERACTIVE_TIMELINE_SUCCESS:
      return {
        loading: false,
        success: true,
        userInteractiveTimeline: action.payload,
      };
    case INTERACTIVE_TIMELINE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export const createSkilledgerReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        loading: true,
      };
    case FETCH_SUCCESS:
      return {
        loading: false,
        success: true,
        allInfo: action.payload,
      };
    case FETCH_FAIL:
      return {
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
