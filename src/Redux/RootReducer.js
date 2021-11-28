import { combineReducers } from "redux";
import loginReducer from "./LoginReducer";
import quizReducer from "./QuizReducer";

const rootReducer = combineReducers({
  login: loginReducer,
  quiz: quizReducer,
});

export default rootReducer;
