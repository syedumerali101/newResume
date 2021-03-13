import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_LOGOUT,
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
  FORMATION_UPDATE_FAIL,
  FORMATION_UPDATE_REQUEST,
  FORMATION_UPDATE_SUCCESS,
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAIL,
  INTERACTIVE_TIMELINE_REQUEST,
  INTERACTIVE_TIMELINE_SUCCESS,
  INTERACTIVE_TIMELINE_FAIL,
} from "../constants/usersConstants";

import axios from "axios";
import { BASE_URL } from "../services/config";
import {
  API_LOGIN,
  API_SIGN_UP,
  API_EDIT_PROFILE,
  API_USER_EDUCATION,
  API_USER_EXPERIENCE,
  API_USER_FORMATION,
  API_CREATE_SKILLEDGER,
  API_INTERACTIVE_TIMELINE,
} from "../services/links";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      BASE_URL + API_LOGIN,
      { email, password },
      config,
    );

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({
    type: USER_LOGOUT,
  });
};

export const register = (
  username,
  email,
  password,
  first_name,
  last_name,
  phone,
  address,
) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      BASE_URL + API_SIGN_UP,
      { username, email, password, first_name, last_name, phone, address },
      config,
    );

    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data,
    });

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateUserProfile = (
  id,
  gender,
  transport_type,
  handicap,
  nationality,
  job_seeking_type,
  geo_mobility,
  disponsibility,
) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_UPDATE_PROFILE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.data.token}`,
      },
    };

    debugger;
    const { data } = await axios.post(
      BASE_URL + API_EDIT_PROFILE,
      {
        id,
        gender,
        transport_type,
        handicap,
        nationality,
        job_seeking_type,
        geo_mobility,
        disponsibility,
      },
      config,
    );

    dispatch({
      type: USER_UPDATE_PROFILE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_UPDATE_PROFILE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const addEducationAction = (
  degree_title,
  domain,
  Reference,
  description,
  education_type,
  status,
  ending_date,
  type_of_proof,
  value_of_proof,
) => async (dispatch, getState) => {
  try {
    dispatch({
      type: EDUCTAION_UPDATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.data.token}`,
      },
    };

    const { data } = await axios.post(
      BASE_URL + API_USER_EDUCATION,
      {
        degree_title,
        domain,
        Reference,
        description,
        education_type,
        status,
        ending_date,
        type_of_proof,
        value_of_proof,
      },
      config,
    );
    dispatch({
      type: EDUCATION_UPDATE_SUCCESS,
      payload: data,
    });
    localStorage.setItem("userEducationInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: EDUCATION_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const addFormationAction = (
  formation_title,
  domain,
  city,
  year_end_formation,
  Status,
  description,
  type_of_proof,
  value_of_proof,
  reference,
) => async (dispatch, getState) => {
  try {
    dispatch({
      type: FORMATION_UPDATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.data.token}`,
      },
    };

    const { data } = await axios.post(
      BASE_URL + API_USER_FORMATION,
      {
        formation_title,
        domain,
        city,
        year_end_formation,
        Status,
        description,
        type_of_proof,
        value_of_proof,
        reference,
      },
      config,
    );
    dispatch({
      type: FORMATION_UPDATE_SUCCESS,
      payload: data,
    });

    localStorage.setItem("userFormationInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: FORMATION_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const addExperienceAction = (
  job_title,
  company_name,
  city,
  domain,
  description,
  reference,
  start_date,
  end_date,
  type_of_proof,
) => async (dispatch, getState) => {
  try {
    dispatch({
      type: EXPERIENCE_UPDATE_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.data.token}`,
      },
    };

    const { data } = await axios.post(
      BASE_URL + API_USER_EXPERIENCE,
      {
        job_title,
        company_name,
        city,
        domain,
        description,
        reference,
        start_date,
        end_date,
        type_of_proof,
      },
      config,
    );
    dispatch({
      type: EXPERIENCE_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: EXPERIENCE_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const createSkilledgerAction = () =>
  //entities

  async (dispatch, getState) => {
    try {
      dispatch({
        type: FETCH_REQUEST,
      });
      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.data.token}`,
        },
      };

      const { data } = await axios.post(
        BASE_URL + API_CREATE_SKILLEDGER,
        {
          //entities
        },
        config,
      );
      dispatch({
        type: FETCH_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: FETCH_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const getInteractiveTimelineAction = () => async (
  dispatch,
  getState,
) => {
  try {
    dispatch({
      type: INTERACTIVE_TIMELINE_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.data.token}`,
      },
    };

    const { data } = await axios.get(
      BASE_URL + API_INTERACTIVE_TIMELINE,

      config,
    );

    dispatch({
      type: INTERACTIVE_TIMELINE_SUCCESS,
      payload: data,
    });

    localStorage.setItem("userInteractiveTimeline", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: INTERACTIVE_TIMELINE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
