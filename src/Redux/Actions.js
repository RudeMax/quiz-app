import Axios from "axios";

import {
  LOGIN_USER,
  FETCH_QUIZ_REQUEST,
  FETCH_QUIZ_SUCCESS,
  FETCH_QUIZ_FAILURE,
  SET_RESULT,
  SET_CHART,
  UPDATE_RESULT,
  REFRESH_QUIZ,
} from "./Types";

export const loginUser = (name) => {
  return {
    type: LOGIN_USER,
    payload: name,
  };
};

export const fetchQuiz = () => async (dispatch) => {
  dispatch({ type: FETCH_QUIZ_REQUEST });
  try {
    const response = await Axios.get(
      "https://opentdb.com/api.php?amount=10&category=23&type=multiple"
    );
    dispatch({ type: FETCH_QUIZ_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_QUIZ_FAILURE, error: error.message });
  }
};

export const updateResult = (data) => {
  return {
    type: UPDATE_RESULT,
    payload: data,
  };
};

export const refreshQuiz = () => {
  return {
    type: REFRESH_QUIZ,
  };
};

export const setResult = (result) => {
  return {
    type: SET_RESULT,
    payload: result,
  };
};

export const setChart = (chart) => {
  return {
    type: SET_CHART,
    payload: chart,
  };
};
