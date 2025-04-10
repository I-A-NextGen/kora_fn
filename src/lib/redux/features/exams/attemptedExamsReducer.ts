import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  fetchAllAttemptedExams,
  IAttemptedExamsResponseData,
} from "../../actionCreators/examAction";

const initialState: {
  loading: boolean;
  attemptedExams: IAttemptedExamsResponseData["data"] | null;
  error: string | null;
} = {
  loading: false,
  attemptedExams: null,
  error: null,
};
const attemptedExamsSlice = createSlice({
  name: "attemptedExams",
  initialState,
  reducers: {
    resetError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchAllAttemptedExams.pending, (state) => {
        state.loading = false;
        state.attemptedExams = null;
        state.error = null;
      })
      .addCase(
        fetchAllAttemptedExams.fulfilled,
        (state, action: PayloadAction<IAttemptedExamsResponseData["data"]>) => {
          state.loading = false;
          state.attemptedExams = action.payload;
          state.error = null;
        },
      )
      .addCase(fetchAllAttemptedExams.rejected, (state, action: any) => {
        state.loading = false;
        state.attemptedExams = null;
        state.error = action.payload.message;
      }),
});
export const { resetError: resetAttemptedExamsError } =
  attemptedExamsSlice.actions;
export default attemptedExamsSlice.reducer;
