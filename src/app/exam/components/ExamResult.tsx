"use client";
import { Button } from "@/components/ui/button";
import { resetExam } from "@/lib/redux/features/exams/examReducer";
import { useAppDispatch } from "@/lib/redux/store";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const ExamResult = ({
  score,
  percentage,
  timeUsed,
  totalQuestions,
  redirectToDashboard,
}: {
  score: number;
  percentage: number;
  timeUsed: number; // time in seconds
  totalQuestions: number;
  redirectToDashboard: boolean;
}) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const success = score >= 12;
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="relative size-52">
        <Image
          src={`${success ? "/success.png" : "/failed-kin.png"}`}
          fill
          className={`${success ? "" : "-rotate-[17deg]"}`}
          alt={`${success ? "loose-logo" : "win-logo"}`}
        />
      </div>
      <h2
        className={`${success ? "text-green-600" : "text-red-600"} w-[70%] text-center text-xl font-semibold leading-6`}
      >
        {success
          ? "Congratulations, Watsinze imyitozo!"
          : "Watsinzwe imyitozo. Ntucike intege, ongera ugerageze!"}
      </h2>
      <div className="flex w-[16rem] flex-col gap-2">
        <p className="flex justify-between">
          <span className="">Amanota yawe:</span>
          <span className="w-14 font-sans font-semibold">
            {score}/{totalQuestions}
          </span>
        </p>
        <p className="flex justify-between">
          <span className="">Ijanisha:</span>
          <span className="w-14 font-sans font-semibold">{percentage}%</span>
        </p>
        <p className="flex justify-between">
          <span className="">Iminota wakoresheje:</span>
          <span className="w-14 font-sans font-semibold">
            {Math.floor(timeUsed / 60)
              .toString()
              .padStart(2, "0")}
            :{(timeUsed % 60).toString().padStart(2, "0")}
          </span>
        </p>
        <p className="flex justify-between">
          <span className="">Ibibazo byose:</span>
          <span className="w-14 font-semibold">{totalQuestions}</span>
        </p>
      </div>
      <Button
        className="mt-10 h-12 rounded-md px-8 text-base"
        onClick={() => {
          dispatch(resetExam());
          router.replace("/");
        }}
      >
        {redirectToDashboard ? "Subira kuri konti yawe" : "Subira ahabanza"}
      </Button>
    </div>
  );
};

export default ExamResult;
