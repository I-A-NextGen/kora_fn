import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userLogoutAction } from "../../actionCreators/authAction";

interface ILogout {
  isLoggedOut: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: ILogout = {
  isLoggedOut: false,
  loading: false,
  error: null,
};

const logoutSlice = createSlice({
  name: "Login",
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogoutAction.pending, (state) => {
        state.loading = true;
        state.isLoggedOut = false;
        state.error = null;
      })
      .addCase(userLogoutAction.fulfilled, (state, action) => {
        state.loading = false;
        state.isLoggedOut = true;
        state.error = null;
      })
      .addCase(
        userLogoutAction.rejected,
        (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.isLoggedOut = false;
          state.error = (action.payload.message ||
            "Hari Ibitagenze neza, ongera ugerageze!") as string;
        },
      );
  },
});

export const { reset: userLogoutReset } = logoutSlice.actions;
export default logoutSlice.reducer;
