"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Clock } from "lucide-react";
import { questions } from "@/lib/utils";
import Link from "next/link";
import Logo from "@/components/Logo";
import NavBar from "./components/NavBar";

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState<number>(0);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [feedback, setFeedback] = useState<boolean | null>(null);
  const [timeLeft, setTimeLeft] = useState<number>(1200);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setShowResult(true);
    }
  }, [timeLeft]);

  const handleAnswerSelection = (option: string) => {
    setSelectedAnswer(option);
  };

  const handleSubmit = () => {
    if (
      questions[currentQuestion] &&
      selectedAnswer === questions[currentQuestion].answer
    ) {
      setScore(score + 1);
      setFeedback(true);
    } else {
      setFeedback(false);
    }

    if (currentQuestion + 1 < questions.length) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setFeedback(null);
      }, 1000);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="flex min-h-screen flex-col gap-16 bg-primary/10">
      <NavBar timeLeft={timeLeft} />
      <div className="grid min-h-[calc(100svh-4rem)] place-items-center py-10">
        <Card className="max-w-[38rem] border-none px-8 py-10 shadow-2xl">
          <CardHeader className="mb-5 p-0">
            <CardTitle className="text-gray-500">
              {showResult
                ? "Ikizamini kirarangiye!"
                : `Ikibazo cya ${currentQuestion + 1}`}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {showResult ? (
              <div className="text-center">
                <p className="text-lg font-semibold">
                  Amanota yawe: {score} / {questions.length}
                </p>
                <Button onClick={() => window.location.reload()}>
                  Ongera utangire
                </Button>
              </div>
            ) : (
              <div className="flex flex-col gap-6">
                {questions[currentQuestion] &&
                typeof questions[currentQuestion].question === "string" ? (
                  <p className="font-medium">
                    {questions[currentQuestion].question}
                  </p>
                ) : (
                  <div className="flex h-full flex-col items-center gap-5">
                    <p className="w-full font-semibold">
                      {questions[currentQuestion]?.text}
                    </p>
                    <Image
                      src={
                        (
                          questions[currentQuestion]?.question as {
                            image: string;
                          }
                        )?.image || ""
                      }
                      alt="Question"
                      width={180}
                      height={180}
                    />
                  </div>
                )}
                <div className="flex flex-col gap-3">
                  {questions[currentQuestion]?.options.map((option, index) => (
                    <button
                      key={index}
                      className={`flex w-full items-center rounded-sm border border-black/50 px-5 py-3 ${
                        selectedAnswer === option.text
                          ? "bg-blue-700/25"
                          : "bg-white"
                      } ${
                        feedback !== null &&
                        option.text === questions[currentQuestion]?.answer
                          ? "bg-green-500/50 text-white"
                          : feedback !== null && selectedAnswer === option.text
                            ? "bg-red-500/50 text-white"
                            : ""
                      }`}
                      onClick={() => handleAnswerSelection(option.text)}
                      disabled={feedback !== null}
                    >
                      {option.image && (
                        <Image
                          src={option.image}
                          alt={option.text}
                          width={40}
                          height={40}
                        />
                      )}
                      <span className="text-justify text-[.9rem]">
                        {option.text}
                      </span>
                    </button>
                  ))}
                </div>
                <Button
                  className="w mt-4 h-12 disabled:bg-black/50"
                  onClick={handleSubmit}
                  disabled={!selectedAnswer || feedback !== null}
                >
                  Emeza igisubizo
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
