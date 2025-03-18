import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createQuestion } from "../../actionCreators/questionAction";
import { error } from "console";

interface INewQuestionState {
  loading: boolean;
  error: {
    error: unknown;
    message: string;
  } | null;
  data?: {
    message: string;
  };
}

const initialState: INewQuestionState = {
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
      .addCase(createQuestion.fulfilled, (state, action) => {
        state.loading = false;
        state.data = { message: action.payload.message };
        state.error = null;
      })
      .addCase(createQuestion.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as INewQuestionState["error"];
      });
  },
});

export default createQuestionSlice.reducer;
