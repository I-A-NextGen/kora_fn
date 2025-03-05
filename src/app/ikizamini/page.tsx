"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Clock } from "lucide-react";
import { questions } from "@/lib/utils";
import Link from "next/link";



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
    <div className="flex min-h-screen flex-col bg-gray-100">
      <div className="flex justify-between p-8">
        <Link href={"/"}><h1>Kora</h1></Link>
        <span className="inline-flex items-center gap-4 rounded-2xl bg-blue-700 p-2 px-4 text-white">
          <Clock />
          <p>
            igihe gisigaye: {Math.floor(timeLeft / 60)}:
            {(timeLeft % 60).toString().padStart(2, "0")}
          </p>
        </span>
      </div>
      <div className="grid h-[720px] place-items-center">
        <Card className="w-full max-w-lg p-5">
          <CardHeader>
            <CardTitle className="text-center">
              {showResult
                ? "Ikizamini kirarangiye!"
                : `Ikibazo ${currentQuestion + 1}`}
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
              <div>
                {questions[currentQuestion] &&
                typeof questions[currentQuestion].question === "string" ? (
                  <p className="mb-4 font-medium">
                    {questions[currentQuestion].question}
                  </p>
                ) : (
                  <div className="flex h-full flex-col items-center">
                    <p className="mb-4 font-medium">
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
                      width={200}
                      height={200}
                    />
                  </div>
                )}
                {questions[currentQuestion]?.options.map((option, index) => (
                  <button
                    key={index}
                    className={`flex w-full items-center space-x-2 rounded-lg border p-4 ${
                      selectedAnswer === option.text
                        ? "bg-blue-500 text-white"
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
                    <span>{option.text}</span>
                  </button>
                ))}
                <Button
                  className="mt-4 w-full"
                  onClick={handleSubmit}
                  disabled={!selectedAnswer || feedback !== null}
                >
                  Ohereza Igisubizo
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
