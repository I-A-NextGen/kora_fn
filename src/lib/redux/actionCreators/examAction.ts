import { IExamFormData } from "@/components/ReadyToStart";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError, AxiosResponse } from "axios";
import { IQuestion } from "../features/exams/examReducer";

export interface IAttempt {
  success: boolean;
  message: string;
  data: {
    submitted?: boolean;
    currentIndex: number;
    correctAnswerId: string;
    questionId: string;
    selectedAnswerId: string;
    startTime: Date;
    endTime: Date;
    score: number;
    totalQuestions: number;
  };
}

export interface IExamAttemptData {
  questionId: string;
  selectedAnswerId: string;
}

export interface IExamSubmitResponseData {
  success: true;
  message: "Exam submitted successfully";
  data: {
    startTime: Date;
    endTime: Date;
    score: number;
    totalQuestions: number;
  };
}

export const fetchFreeExamAction = createAsyncThunk(
  "exam/free",
  async (_, { rejectWithValue }) => {
    try {
      const response: { success: boolean; message: string; data: any } =
        await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/exam/free`, {
          withCredentials: true,
        });
      return {
        data: response.data.data,
      };
    } catch (error) {
      let message = "Hari Ibitagenze neza, Ongera ugerageze!";
      let status = 500;
      if (error instanceof AxiosError && error.response?.status) {
        status = error.response?.status;
      }
      return rejectWithValue({ status, message });
    }
  },
);

export const fetchExamAction = createAsyncThunk(
  "exam",
  async (data: IExamFormData, { rejectWithValue }) => {
    try {
      const response: AxiosResponse<{
        success: boolean;
        message: string;
        data: {
          isPendingExam: boolean;
          questions: IQuestion[];
          currentIndex: number;
          score: number;
          startTime: number;
        };
      }> = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/exam?type=${data.type}`,
        {},
        { withCredentials: true },
      );

      return { ...response.data.data };
    } catch (error) {
      let message = "Hari Ibitagenze neza, Ongera ugerageze!";
      let status = 500;
      if (error instanceof AxiosError && error.response?.status) {
        status = error.response?.status;
        if (status === 404) {
        } else if (status === 403) {
          message = "Ifatabuguzi ryawe ryarangiye, Ongera ugure Ifatabuguzi.";
        }
      }
      return rejectWithValue({ status, message });
    }
  },
);

export const attemptAction = createAsyncThunk(
  "attempt-exam",
  async (data: IExamAttemptData, { rejectWithValue }) => {
    try {
      const response: AxiosResponse<IAttempt> = await axios.patch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/exam/attempt`,
        data,
        { withCredentials: true },
      );

      return response.data.data;
    } catch (error) {
      let message = "Hari Ibitagenze neza, Ongera ugerageze!";
      let status = 500;
      if (error instanceof AxiosError && error.response?.status) {
        status = error.response?.status;
        if (status === 404) {
        } else if (status === 403) {
          message = "Ifatabuguzi ryawe ryarangiye, Ongera ugure Ifatabuguzi.";
        }
      }
      return rejectWithValue({ status, message });
    }
  },
);

export const submitExamAction = createAsyncThunk(
  "submit-exam",
  async (_, { rejectWithValue }) => {
    try {
      const response: AxiosResponse<IExamSubmitResponseData> = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/exam/submit`,
        {},
        { withCredentials: true },
      );

      return response.data.data;
    } catch (error) {
      let message = "Hari Ibitagenze neza, Ongera ugerageze!";
      return rejectWithValue({ status, message });
    }
  },
);
