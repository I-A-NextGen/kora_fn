import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { registerUser } from "../../actionCreators/authAction";

interface IRegistration {
  userRegistrationData: { message: string; data: unknown } | null;
  loading: boolean;
  error: string | null;
}

const initialState: IRegistration = {
  userRegistrationData: null,
  loading: false,
  error: null,
};

const registerSlice = createSlice({
  name: "Registration",
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.userRegistrationData = null;
        state.error = null;
      })
      .addCase(
        registerUser.fulfilled,
        (state, action: PayloadAction<{ message: string; user: unknown }>) => {
          state.loading = false;
          state.userRegistrationData = {
            message: action.payload.message,
            data: action.payload.user,
          };
          state.error = null;
        },
      )
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .addCase(registerUser.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.userRegistrationData = null;
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        state.error = (action.payload.message ||
          "Something went wrong!") as string;
      });
  },
});

export const { reset: userRegistrationReset } = registerSlice.actions;
export default registerSlice.reducer;
