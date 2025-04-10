import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userLoginAction } from "../../actionCreators/authAction";

export interface IUser {
  _id: string;
  phoneNumber: string;
  firstName: string;
  lastName: string;
  role: "client" | "admin";
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
}

interface ILogin {
  userLoginData: {user: IUser } | null;
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
      .addCase(userLoginAction.pending, (state) => {
        state.loading = true;
        state.userLoginData = null;
        state.error = null;
      })
      .addCase(
        userLoginAction.fulfilled,
        (
          state,
          action: PayloadAction<{
            user: IUser;
          }>,
        ) => {
          state.loading = false;
          state.userLoginData = {
            user: action.payload.user,
          };
          state.error = null;
        },
      )
      .addCase(
        userLoginAction.rejected,
        (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.userLoginData = null;
          state.error = (action.payload.message ||
            "Hari Ibitagenze neza, ongera ugerageze!") as string;
        },
      );
  },
});

export const { reset: userLoginReset } = loginSlice.actions;
export default loginSlice.reducer;
