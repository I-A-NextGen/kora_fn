import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

export type StatsData = {
  totalExams: number;
  totalQuestions: number;
  totalMarks: number;
  totalTime: number;
  examsThisWeek: number;
  winsThisWeek: number;
  winningPossibility: string;
};

export const fetchStats = createAsyncThunk<
  StatsData,
  void,
  { rejectValue: string }
>("stats/fetchStats", async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/exam/stats`,
      {
        withCredentials: true,
      },
    );
    return response.data.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      const errorMessage =
        error.response?.status === 500
          ? "Internal Server Error"
          : error.message;
      return rejectWithValue(errorMessage);
    }
    return rejectWithValue("An unexpected error occurred");
  }
});
