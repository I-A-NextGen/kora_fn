"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  attemptAction,
  submitExamAction,
} from "@/lib/redux/actionCreators/examAction";
import {
  finishExam,
  IQuestion,
  freeExamAttempt,
  setSelectedAnswer,
} from "@/lib/redux/features/exams/examReducer";
import { useAppDispatch, useAppSelector } from "@/lib/redux/store";
import { isURL } from "@/utils/isUrl";
import { ArrowRightToLine, Check, X } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { PulseLoader } from "react-spinners";

const QuestionCard = () => {
  const [hasConfirmedAnswer, setHasConfirmedAnswer] = useState<boolean>(false);
  const [moveToNext, setMoveToNext] = useState<boolean>(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [counter, setCounter] = useState(10);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const dispatch = useAppDispatch();
  const { loading, isExamFree, exam, error, isExamSubmitted } = useAppSelector(
    (state) => state.exam,
  );

  const [question, setQuestion] = useState<IQuestion>(
    exam!.questions[currentQuestionIndex]!,
  );

  useEffect(() => {
    setQuestion(exam!.questions[currentQuestionIndex]!);
  }, [currentQuestionIndex]);

  useEffect(() => {
    if (
      currentQuestionIndex === 0 &&
      exam?.currentQuestionIndex &&
      exam?.currentQuestionIndex > 1
    ) {
      setCurrentQuestionIndex(exam?.currentQuestionIndex);
    }
  }, []);

  useEffect(() => {
    if (exam?.isAtEnd && !isExamSubmitted) {
      intervalRef.current = setInterval(() => {
        if (counter === 0) {
          if (isExamFree) {
            dispatch(finishExam());
            return;
          } else {
            dispatch(submitExamAction());
          }
          if (intervalRef.current) clearInterval(intervalRef.current);
        }
        setCounter((prevData) => {
          if (counter > 0) return prevData - 1;
          if (intervalRef.current) clearInterval(intervalRef.current);
          return prevData;
        });
      }, 1000);
      return () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
      };
    }
  }, [exam?.isAtEnd, counter]);

  useEffect(() => {
    if (hasConfirmedAnswer) {
      handleSubmit();
    }
  }, [hasConfirmedAnswer]);

  useEffect(() => {
    if (error) {
      setHasConfirmedAnswer(false);
    }
  }, [error]);

  useEffect(() => {
    if (!!exam?.correctAnswerId) {
      setMoveToNext(true);
    }
  }, [exam]);

  useEffect(() => {});
  const handleSubmit = () => {
    if (exam?.selectedAnswerId) {
      if (isExamFree) {
        const correctAnswerId = question.answers.find(
          (answer) => answer.isCorrect,
        );
        const isCurrentQuestionCorrect = !!question.answers.find(
          (answer) => answer._id === exam?.selectedAnswerId,
        )?.isCorrect;
        dispatch(
          freeExamAttempt({
            isCurrentQuestionCorrect,
            correctAnswerId: correctAnswerId?._id || "",
          }),
        );
      } else {
        dispatch(
          attemptAction({
            questionId: question._id,
            selectedAnswerId: exam?.selectedAnswerId,
          }),
        );
      }
    }
  };

  return (
    <>
      <CardHeader className="mb-3 p-0 md:mb-5">
        <CardTitle className="text-gray-500">
          <span>{`Ikibazo cya `}</span>
          <span className="font-sans">{` ${currentQuestionIndex + 1}/${exam?.questions.length}`}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-6">
          <div className="flex h-full flex-col items-center gap-5">
            <p className="w-full text-justify text-[1.1rem] font-semibold leading-6 md:text-lg">
              {question.question!}
            </p>
            {question.isRoadSign && question.photo && (
              <div className="relative flex size-56 items-center px-8">
                <Image
                  src={question.photo ?? ""}
                  alt={`Question-${currentQuestionIndex + 1}`}
                  fill
                  className=""
                />
              </div>
            )}
          </div>
          <div className="flex flex-wrap justify-between gap-3">
            {question.answers.map((answer, index) =>
              !isURL(answer.value) ? (
                <button
                  key={answer._id}
                  className={`relative flex w-full items-center rounded-sm border border-black/50 px-4 md:px-5  py-[10px] md:py-3 text-black hover:bg-primary/20 ${
                    exam?.selectedAnswerId === answer._id ? "bg-primary/25" : ""
                  } ${
                    hasConfirmedAnswer &&
                    exam?.correctAnswerId &&
                    exam?.correctAnswerId === answer._id &&
                    "!bg-green-500/40"
                  } ${
                    hasConfirmedAnswer &&
                    exam?.correctAnswerId &&
                    !(exam?.correctAnswerId === answer._id) &&
                    exam?.selectedAnswerId === answer._id &&
                    "!bg-red-500/30"
                  } `}
                  onClick={() =>
                    dispatch(setSelectedAnswer({ selectedId: answer._id }))
                  }
                  disabled={hasConfirmedAnswer}
                >
                  {hasConfirmedAnswer && exam?.correctAnswerId && (
                    <div className="absolute right-3 md:right-5">
                      {exam?.correctAnswerId === answer._id && (
                        <Check strokeWidth={4} className="text-green-700" />
                      )}
                      {!(exam?.correctAnswerId === answer._id) &&
                        exam?.selectedAnswerId === answer._id && (
                          <X strokeWidth={4} className="text-red-600" />
                        )}
                    </div>
                  )}
                  <span className="text-justify text-[.9rem] leading-4">
                    {answer.value}
                  </span>
                </button>
              ) : (
                <div
                  onClick={() =>
                    !hasConfirmedAnswer &&
                    dispatch(setSelectedAnswer({ selectedId: answer._id }))
                  }
                  key={answer._id}
                  className="group relative h-40 w-[calc(50%-0.4rem)] cursor-pointer overflow-hidden rounded-sm border border-black"
                >
                  <div
                    className={`absolute top-0 z-10 size-full hover:bg-primary/50 ${
                      exam?.selectedAnswerId === answer._id
                        ? "bg-primary/40"
                        : ""
                    } ${
                      hasConfirmedAnswer &&
                      exam?.correctAnswerId &&
                      exam?.correctAnswerId === answer._id &&
                      "!bg-green-500/40"
                    } ${
                      hasConfirmedAnswer &&
                      exam?.correctAnswerId &&
                      !(exam?.correctAnswerId === answer._id) &&
                      exam?.selectedAnswerId === answer._id &&
                      "!bg-red-500/30"
                    } `}
                  >
                    {hasConfirmedAnswer && exam?.correctAnswerId && (
                      <div className="flex size-full items-center justify-center">
                        {exam?.correctAnswerId === answer._id && (
                          <Check
                            strokeWidth={3}
                            size={55}
                            className="!size-fit text-green-600"
                          />
                        )}
                        {!(exam?.correctAnswerId === answer._id) &&
                          exam?.selectedAnswerId === answer._id && (
                            <X
                              strokeWidth={3}
                              size={55}
                              className="!size-fit text-red-600"
                            />
                          )}
                      </div>
                    )}
                  </div>
                  <Image
                    src={answer.value}
                    fill
                    className="duration-300 group-hover:scale-125"
                    alt={"answer-" + (index + 1)}
                  />
                </div>
              ),
            )}
          </div>
          <Button
            className="w mt-4 h-12 rounded-md disabled:bg-black/50"
            onClick={() => {
              if (exam?.isAtEnd && !isExamSubmitted) {
                if (isExamFree) {
                  dispatch(finishExam());
                  return;
                } else {
                  dispatch(submitExamAction());
                }
              }
              if (hasConfirmedAnswer) {
                if (exam && moveToNext) {
                  setCurrentQuestionIndex(exam?.currentQuestionIndex);
                  setMoveToNext(false);
                  setHasConfirmedAnswer(false);
                  dispatch(setSelectedAnswer({}));
                }
              } else {
                setHasConfirmedAnswer(!!exam?.selectedAnswerId);
              }
            }}
            disabled={!exam?.selectedAnswerId || loading}
          >
            <span className="flex items-center gap-2">
              {!loading &&
                !exam?.isAtEnd &&
                (!hasConfirmedAnswer ? (
                  "Emeza Igisubizo"
                ) : (
                  <>
                    <span>Ikibazo Gikurikira </span>
                    <ArrowRightToLine
                      size={22}
                      strokeWidth={2.2}
                      className="!size-fit animate-bounce-x"
                    />
                  </>
                ))}
              {!loading && exam?.isAtEnd && (
                <span>
                  Reba Amanota ({counter.toString().padStart(2, "0")})
                </span>
              )}
              {loading && <PulseLoader size={10} color="#fff" margin={3} />}
            </span>
          </Button>
        </div>
      </CardContent>
    </>
  );
};

export default React.memo(QuestionCard);
