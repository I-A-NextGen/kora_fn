import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError, AxiosResponse } from "axios";
import { IUser } from "../features/user/loginReducer";

export type UserRegistrationData = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
};

export type UserLoginData = {
  phoneNumber: string;
  password: string;
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
          message = "Imyirondoro (Nimero ya telefone) watanze, yarakoreshejwe.";
        }
      }
      return rejectWithValue({ message });
    }
  },
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (data: UserLoginData, { rejectWithValue }) => {
    try {
      const response: AxiosResponse<{
        message: string;
        user: IUser & { token: string };
      }> = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/user/login`,
        data,
      );
      return {
        message:
          "Kwiyandikisha byegenze neza! Shyiramo imyirondoro yawe kugirango ukomeze.",
        user: response.data.user,
      };
    } catch (error) {
      let message = "Nimero ya telefone cyangwa ijambo banga ntago ari byo.";

      return rejectWithValue({ message });
    }
  },
);
