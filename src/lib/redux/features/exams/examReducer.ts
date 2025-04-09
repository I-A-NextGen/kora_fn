import { createSlice, isAnyOf, PayloadAction } from "@reduxjs/toolkit";
import {
  attemptAction,
  fetchExamAction,
  fetchFreeExamAction,
  IAttempt,
  IExamSubmitResponseData,
  submitExamAction,
} from "../../actionCreators/examAction";

export const EXAM_DURATION = 1080; // In seconds

export interface IQuestion {
  _id: string;
  question: string;
  photo?: string;
  isFree: boolean;
  isRoadSign?: boolean;
  answers: Array<{
    value: string;
    isCorrect?: boolean;
    _id: string;
  }>;
  lang: "kiny" | "en";
  createdAt: Date;
  updatedAt: Date;
}

interface IExam {
  score: number;
  endTime: number;
  startTime: number;
  isAtEnd: boolean;
  currentQuestionIndex: number;
  correctAnswerId: string | null;
  questionId: string | null;
  selectedAnswerId: string | null;
  percentage: number;
  questions: Array<IQuestion>;
}

const initialState: {
  isExamSubmitted: boolean;
  isExamFree: boolean;
  isFreeExamAttempted: boolean;
  loading: boolean;
  exam: IExam | null;
  error: string | null;
} = {
  isExamSubmitted: false,
  isExamFree: false,
  isFreeExamAttempted: false,
  loading: false,
  exam: null,
  error: null,
};
const examSlice = createSlice({
  name: "exam",
  initialState,
  reducers: {
    setSelectedAnswer: (
      state,
      action: PayloadAction<{ selectedId?: string }>,
    ) => {
      if (state.exam) {
        if (action.payload.selectedId) {
          state.exam.selectedAnswerId = action.payload.selectedId;
        } else {
          state.exam.selectedAnswerId = null;
          state.exam.correctAnswerId = null;
        }
      }
    },
    resetExam: () => initialState,
    resetExamError: (state) => {
      state.error = null;
    },
    resetIsFreeExamAttempted: (state) => {
      state.isFreeExamAttempted = false;
    },
    setStartTime: (state) => {
      if (state.exam && !state.exam.startTime) {
        state.exam.startTime = Date.now();
      }
    },
    finishExam: (state) => {
      if (state.exam) {
        state.isExamSubmitted = true;
        state.exam.isAtEnd = false;
        state.exam.percentage = (state.exam.score * 100) / 20;
        state.exam.endTime =
          Date.now() - state.exam.startTime > 1080 * 1000
            ? state.exam.startTime + 1080 * 1000
            : Date.now();
      }
    },
    freeExamAttempt: (
      state,
      action: PayloadAction<{
        isCurrentQuestionCorrect: Boolean;
        correctAnswerId: string;
      }>,
    ) => {
      if (state.exam && state.exam.currentQuestionIndex <= 19) {
        if (state.exam?.currentQuestionIndex !== 19) {
          state.exam.currentQuestionIndex += 1;
        } else {
          state.exam.isAtEnd = true;
        }
        state.exam.correctAnswerId = action.payload.correctAnswerId;

        if (action.payload.isCurrentQuestionCorrect) {
          state.exam.score += 1;
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchFreeExamAction.fulfilled,
        (state, action: PayloadAction<{ data: Array<IQuestion> }>) => {
          state.loading = false;
          state.isFreeExamAttempted = false;
          state.isExamSubmitted = false;
          state.isExamFree = true;
          state.exam = {
            score: 0,
            startTime: 0,
            isAtEnd: false,
            endTime: 0,
            currentQuestionIndex: 0,
            correctAnswerId: null,
            questionId: null,
            selectedAnswerId: null,
            percentage: 0,
            questions: action.payload.data,
          };
          state.error = null;
        },
      )
      .addCase(fetchFreeExamAction.rejected, (state, action) => {
        const payload = action.payload as { status: number; message: string };
        return {
          ...initialState,
          isFreeExamAttempted: payload.status.toString().startsWith("40"),
          error: payload.message,
        };
      })
      .addCase(
        fetchExamAction.fulfilled,
        (
          state,
          action: PayloadAction<{
            isPendingExam: boolean;
            questions: Array<IQuestion>;
            currentIndex: number;
            score: number;
            startTime: number;
          }>,
        ) => {
          state.loading = false;
          state.isFreeExamAttempted = false;
          state.isExamSubmitted = false;
          state.isExamFree = false;
          state.exam = {
            score: action.payload.score,
            startTime: action.payload.isPendingExam
              ? action.payload.startTime
              : 0,
            endTime: 0,
            isAtEnd: false,
            currentQuestionIndex: action.payload.currentIndex,
            correctAnswerId: null,
            questionId: null,
            selectedAnswerId: null,
            percentage: 0,
            questions: action.payload.questions,
          };
          state.error = null;
        },
      )
      .addCase(fetchExamAction.rejected, (state, action) => {
        const payload = action.payload as { status: number; message: string };
        return {
          ...initialState,
          error: payload.message,
        };
      })
      .addCase(
        attemptAction.fulfilled,
        (state, action: PayloadAction<IAttempt["data"]>) => {
          state.loading = false;
          if (state.exam) {
            if (action.payload.submitted) {
              state.isExamSubmitted = true;
              state.exam.percentage = (action.payload.score * 100) / 20;
              state.exam.score = action.payload.score;
              state.exam.endTime = new Date(action.payload.endTime).getTime();
            } else {
              state.exam = {
                ...state.exam,
                isAtEnd:
                  action.payload.currentIndex ===
                  state.exam.currentQuestionIndex,
                currentQuestionIndex: action.payload.currentIndex,
                correctAnswerId: action.payload.correctAnswerId,
                questionId: action.payload.questionId,
                selectedAnswerId: action.payload.selectedAnswerId,
                score: action.payload.score,
              };
            }
          }
        },
      )
      .addCase(attemptAction.rejected, (state, action) => {
        const payload = action.payload as { status: number; message: string };
        state.loading = false;
        state.error = payload.message;
      })
      .addCase(
        submitExamAction.fulfilled,
        (state, action: PayloadAction<IExamSubmitResponseData["data"]>) => {
          if (state.exam) {
            state.isExamSubmitted = true;
            state.exam.percentage = (action.payload.score * 100) / 20;
            state.exam.startTime = new Date(action.payload.startTime).getTime();
            state.exam.endTime = new Date(action.payload.endTime).getTime();
            state.exam.score = action.payload.score;
          }
        },
      )
      .addCase(submitExamAction.rejected, (state, action) => {
        const payload = action.payload as { message: string };
        return {
          ...initialState,
          error: payload.message,
        };
      })
      .addMatcher(
        isAnyOf(fetchFreeExamAction.pending, fetchExamAction.pending),
        (state) => {
          state.loading = true;
          state.isFreeExamAttempted = false;
          state.exam = null;
          state.error = null;
        },
      )
      .addMatcher(
        isAnyOf(attemptAction.pending, submitExamAction.pending),
        (state) => {
          state.loading = true;
          state.error = null;
        },
      );
  },
});

export const {
  resetIsFreeExamAttempted,
  resetExamError,
  setStartTime,
  freeExamAttempt,
  setSelectedAnswer,
  resetExam,
  finishExam,
} = examSlice.actions;
export default examSlice.reducer;
