import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  userAuthAction,
  userLoginAction,
} from "../../actionCreators/authAction";
import { IUser } from "./loginReducer";

const initialState: {
  loading: boolean;
  isAuth: boolean;
  hasPendingExam: boolean;
  user: IUser | null;
} = {
  loading: false,
  isAuth: false,
  hasPendingExam: false,
  user: null,
};
const authSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: { reset: () => initialState },
  extraReducers: (builder) => {
    builder
      .addCase(
        userLoginAction.fulfilled,
        (state, action: PayloadAction<{ user: IUser }>) => {
          state.loading = false;
          state.isAuth = true;
          state.user = action.payload.user;
        },
      )
      .addCase(userAuthAction.pending, (state) => {
        state.loading = true;
        state.isAuth = false;
        state.hasPendingExam = false;
        state.user = null;
      })
      .addCase(
        userAuthAction.fulfilled,
        (
          state,
          action: PayloadAction<{
            message: string;
            user: IUser;
            hasPendingExam: boolean;
          }>,
        ) => {
          if (action.payload) {
            state.isAuth = true;
            state.hasPendingExam = !!action.payload.hasPendingExam;
            state.user = action.payload.user;
          } else {
            state.isAuth = false;
            state.user = null;
          }
          state.loading = false;
        },
      )
      .addCase(userAuthAction.rejected, (state) => {
        state.loading = false;
        state.isAuth = false;
        state.hasPendingExam = false;
        state.user = null;
      });
  },
});

export const { reset: userAuthReset } = authSlice.actions;
export default authSlice.reducer;
