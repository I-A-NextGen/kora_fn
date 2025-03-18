import { combineReducers } from "@reduxjs/toolkit";
import createQuestion from "./questions/createQuestionReducer";

const rootReducer = combineReducers({
  createQuestion: createQuestion,
});

export default rootReducer;
