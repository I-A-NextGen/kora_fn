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
  setStartTime,
} from "@/lib/redux/features/exams/examReducer";
import ExamResult from "./components/ExamResult";
import { submitExamAction } from "@/lib/redux/actionCreators/examAction";

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
      if (timePassed <= EXAM_DURATION) {
        setTimeLeft(EXAM_DURATION - timePassed);
      } else {
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
    <div className="flex min-h-screen flex-col gap-16 bg-primary/10">
      <NavBar timeLeft={timeLeft ?? 0} />
      <div className="grid min-h-[calc(100svh-6rem)] place-items-center px-4 py-10">
        <Card className="flex min-h-[28rem] w-full flex-col justify-start border-none px-4 py-8 shadow-2xl sm:max-w-[38rem] md:min-h-[35rem] md:px-8 md:py-10">
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
    </div>
  );
}
