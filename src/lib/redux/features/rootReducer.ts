import { combineReducers } from "@reduxjs/toolkit";
import createQuestion from "./questions/createQuestionReducer";
import registerReducer from "./user/registerReducer";
import loginReducer from "./user/loginReducer";
import logoutReducer from "./user/logoutReducer";
import authReducer from "./user/authReducer";
import statsReducer from "./stats/statsReducer";
import examReducer from "./exams/examReducer";
import attemptedExamsReducer from "./exams/attemptedExamsReducer";

const rootReducer = combineReducers({
  createQuestion: createQuestion,
  userRegistration: registerReducer,
  userLogin: loginReducer,
  userLogout: logoutReducer,
  userAuth: authReducer,
  stats: statsReducer,
  exam: examReducer,
  attemptedExams: attemptedExamsReducer,
});

export default rootReducer;
