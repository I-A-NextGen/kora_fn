import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError, AxiosResponse } from "axios";

export type UserRegistrationData = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
};

export const registerUser = createAsyncThunk(
  "auth/sign-up",
  async (data: UserRegistrationData, { rejectWithValue }) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { confirmPassword, ...userData } = data;

      const response: AxiosResponse<{ message: string; user: unknown }> =
        await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/api/user/register`,
          userData,
        );
      return {
        message:
          "Kwiyandikisha byegenze neza! Shyiramo imyirondoro yawe kugirango ukomeze.",
        user: response.data.user,
      };
    } catch (error) {
      let message = "Kwiyandikisha ntago byakunze! Ongera ugerageze.";
      if (error instanceof AxiosError) {
        const status = error.response?.status;
        if (status === +"409") {
          message = "Imyirondoro watanze, yarakoreshejwe.";
        }
      }
      return rejectWithValue({ message });
    }
  },
);
