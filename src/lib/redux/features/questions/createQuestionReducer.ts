import { createSlice } from "@reduxjs/toolkit";
import { createQuestion } from "../../actionCreators/questionAction";
import { error } from "console";

interface IQuestionState {
  loading: boolean;
  error: unknown;
}

const initialState: IQuestionState = {
  loading: false,
  error: null,
};

const createQuestionSlice = createSlice({
  name: "CreateQuestion",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createQuestion.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createQuestion.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(createQuestion.rejected, (state) => {
        state.loading = false;
        state.error = null;
      });
  },
});

export default createQuestionSlice.reducer;
