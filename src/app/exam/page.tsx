"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import NavBar from "./components/NavBar";
import { useAppDispatch, useAppSelector } from "@/lib/redux/store";
import QuestionCard from "./components/QuestionCard";
import { useRouter } from "next/navigation";
import {
  EXAM_DURATION,
  finishExam,
  resetExamError,
  setStartTime,
} from "@/lib/redux/features/exams/examReducer";
import ExamResult from "./components/ExamResult";
import { submitExamAction } from "@/lib/redux/actionCreators/examAction";
import { toast } from "sonner";
import { PuffLoader } from "react-spinners";

export default function Quiz() {
  const [timeLeft, setTimeLeft] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const {
    exam,
    loading,
    isExamFree,
    isFreeExamAttempted,
    isExamSubmitted,
    error,
  } = useAppSelector((state) => state.exam);

  const { isAuth } = useAppSelector((state) => state.userAuth);

  useEffect(() => {
    if (error) {
      toast.info(error);
      dispatch(resetExamError());
    }
  }, [error]);

  useEffect(() => {
    dispatch(setStartTime());
  }, []);

  useEffect(() => {
    if (!exam || (isExamFree && isFreeExamAttempted)) {
      router.replace("/");
    }
  }, [exam]);

  useEffect(() => {
    if (isExamSubmitted) return;

    intervalRef.current = setInterval(() => {
      const timePassed = Math.floor(
        (Date.now() - Number(exam?.startTime ?? 0)) / 1000,
      );
      if (exam && timePassed <= EXAM_DURATION) {
        setTimeLeft(EXAM_DURATION - timePassed);
      } else if (exam && !isExamSubmitted) {
        if (isExamFree) {
          dispatch(finishExam());
        } else {
          dispatch(submitExamAction());
        }
        if (intervalRef.current) clearInterval(intervalRef.current);
      }
    }, 1000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [exam?.startTime, exam?.endTime]);

  return (
    <div className="flex min-h-screen flex-col justify-center gap-1 bg-primary/10">
      <NavBar timeLeft={timeLeft ?? 0} />
      {exam ? (
        <div className="mt-12 flex min-h-[calc(100svh-2.65rem)] items-center justify-center px-4">
          <Card className="flex min-h-[28rem] w-full flex-col justify-start border-none px-4 py-8 shadow-2xl sm:max-w-[38rem] sm:px-8 sm:py-10 md:min-h-[35rem]">
            {!isExamSubmitted && exam?.questions.length && <QuestionCard />}
            {isExamSubmitted && exam && (
              <ExamResult
                score={exam.score}
                timeUsed={Math.ceil((exam.endTime - exam.startTime) / 1000)}
                percentage={exam.percentage}
                totalQuestions={20}
                redirectToDashboard={false}
              />
            )}
          </Card>
        </div>
      ) : (
        <div className="col-span-2 flex w-full flex-col items-center justify-center text-primary">
          <PuffLoader color="#1935ca" />
          <p>Ihangane akanya gato...</p>
        </div>
      )}
    </div>
  );
}
