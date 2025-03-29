import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loginUser } from "../../actionCreators/authAction";

export interface IUser {
  _id: string;
  phoneNumber: string;
  firstName: string;
  lastName: string;
  marks: [];
  plan: {
    exams: 0;
    expires: Date;
  };
  attempt: {
    questions: string[];
    currentIndex: number;
    time: Date;
  };
  token: string;
}

interface ILogin {
  userLoginData: { message: string; user: IUser & { token: string } } | null;
  loading: boolean;
  error: string | null;
}

const initialState: ILogin = {
  userLoginData: null,
  loading: false,
  error: null,
};

const loginSlice = createSlice({
  name: "Login",
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.userLoginData = null;
        state.error = null;
      })
      .addCase(
        loginUser.fulfilled,
        (
          state,
          action: PayloadAction<{
            message: string;
            user: IUser & { token: string };
          }>,
        ) => {
          state.loading = false;
          state.userLoginData = {
            message: action.payload.message,
            user: action.payload.user,
          };
          state.error = null;
        },
      )
      .addCase(loginUser.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.userLoginData = null;
        state.error = (action.payload.message ||
          "Something went wrong!") as string;
      });
  },
});

export const { reset: userLoginReset } = loginSlice.actions;
export default loginSlice.reducer;
