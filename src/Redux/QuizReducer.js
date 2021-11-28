import {
  FETCH_QUIZ_REQUEST,
  FETCH_QUIZ_SUCCESS,
  FETCH_QUIZ_FAILURE,
  SET_RESULT,
  SET_CHART,
  UPDATE_RESULT,
  REFRESH_QUIZ,
} from "./Types";

const initState = {
  isQuizFetching: false,
  isQuizFetched: false,
  quizFetchError: "",
  quizData: null,
  quizResult: 0,
  chart: [],
};

const quizReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_QUIZ_REQUEST:
      return {
        ...state,
        isQuizFetching: true,
      };
    case FETCH_QUIZ_SUCCESS:
      localStorage.setItem("quizData", JSON.stringify(action.payload.results));
      return {
        ...state,
        isQuizFetching: false,
        isQuizFetched: true,
        quizData: action.payload.results,
      };
    case FETCH_QUIZ_FAILURE:
      console.log("ERROR:", action.error);
      return {
        ...state,
        isQuizFetching: false,
        isQuizFetched: false,
        quizFetchError: action.error,
      };
    case SET_RESULT:
      return {
        ...state,
        quizResult: state.quizResult + action.payload,
      };
    case SET_CHART:
      return {
        ...state,
        chart: action.payload,
      };
    case UPDATE_RESULT:
      return {
        ...state,
        chart: [...state.chart, action.payload],
      };

    case REFRESH_QUIZ:
      return {
        ...state,
        quizResult: "",
        quizData: null,
        chart: [],
      };
    default:
      return state;
  }
};

export default quizReducer;
