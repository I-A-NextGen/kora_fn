import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";

export interface INewQuestionData {
  question: string;
  questionPhoto?: FileList | null;
  answerImages?: FileList | null;
  answerType: "text" | "image";
  answerText?: (string | undefined)[];
  lang: "kiny" | "en";
  isFree: boolean;
  isRoadSign: boolean;
  isCorrect: "0" | "1" | "2" | "3";
}

const sanitizeData = (data: INewQuestionData) => {
  // Converting data into FormData for file upload
  const formData = new FormData();

  const answers = [...Array<number>(4)].map((_, i) => {
    if (data.answerText?.[i] && data.answerType === "text")
      return {
        value: data.answerText[i],
        isCorrect: data.isCorrect === i.toString(),
      };
    return {
      isCorrect: data.isCorrect === i.toString(),
    };
  });

  const answerImages =
    data.answerType === "image"
      ? Array.from({ length: 4 }, (_, i) =>
          // eslint-disable-next-line @typescript-eslint/no-unsafe-return
          data.answerImages?.[i] ? data.answerImages[i] : null,
        ).filter(Boolean)
      : undefined;

  if (data.questionPhoto?.[0]) {
    formData.append("photo", data.questionPhoto[0]); // Only 1 file allowed
  }

  if (data.answerType === "image" && data.answerImages?.length) {
    Array.from(data.answerImages).forEach((file) => {
      formData.append("answerImages", file); // Multer expects the same key for multiple files
    });
  }
  formData.append("question", data.question);
  formData.append("lang", data.lang);
  formData.append("isFree", String(data.isFree));
  formData.append("isRoadSign", String(data.isRoadSign));
  formData.append("answerType", data.answerType);
  formData.append("answers", JSON.stringify(answers));

  return formData;
};

export const createQuestion = createAsyncThunk(
  "question/new",
  async (data: INewQuestionData, { rejectWithValue }) => {
    try {
      const sanitizedData = sanitizeData(data);
      const response: AxiosResponse<{
        data: INewQuestionData;
        message: string;
      }> = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/question`,
        sanitizedData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );
      return response.data;
    } catch (error) {
      const errMessage = "Something went wrong, please try again.";

      return rejectWithValue({ message: errMessage });
    }
  },
);
