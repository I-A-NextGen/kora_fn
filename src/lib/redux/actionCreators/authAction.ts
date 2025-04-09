import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
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

export const userRegisterationAction = createAsyncThunk(
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

export const userLoginAction = createAsyncThunk(
  "auth/login",
  async (data: UserLoginData, { rejectWithValue }) => {
    try {
      const response: AxiosResponse<{
        user: IUser;
      }> = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/user/login`,
        data,
        { withCredentials: true },
      );
      return {
        user: response.data.user,
      };
    } catch (error) {
      let message = "Nimero ya telefone cyangwa ijambo banga ntago ari byo.";
      if (
        error instanceof AxiosError &&
        (error.message === "Network Error" ||
          error.response?.status.toString().startsWith("50"))
      )
        message =
          "Kwinjira mursi konti yanyu ntago byakunze! Ongera ugerageze.";

      return rejectWithValue({ message });
    }
  },
);

export const userLogoutAction = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      const response: AxiosResponse<{
        user: IUser;
      }> = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/user/logout`,
        {},
        { withCredentials: true },
      );
      return {
        user: response.data.user,
      };
    } catch (error) {
      let message = "Hari Ibitagenze neza, Ongera ugerageze!";

      return rejectWithValue({ message });
    }
  },
);

export const userAuthAction = createAsyncThunk(
  "auth/me",
  async (_, { rejectWithValue }) => {
    try {
      const response: AxiosResponse<{
        message: string;
        user: IUser;
      }> = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/user/auth/me`,
        { withCredentials: true },
      );
      return {
        user: response.data.user,
      };
    } catch (error) {
      let message = "Hari Ibitagenze neza, Ongera ugerageze!";

      return rejectWithValue({ message });
    }
  },
);
