import { combineReducers } from "@reduxjs/toolkit";
import createQuestion from "./questions/createQuestionReducer";
import registerReducer from "./user/registerReducer";
import loginReducer from "./user/loginReducer";

const rootReducer = combineReducers({
  createQuestion: createQuestion,
  userRegistration: registerReducer,
  userLogin: loginReducer,
});

export default rootReducer;
