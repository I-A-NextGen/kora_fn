"use client";

import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import AddNewQuestion from "@/app/(app)/_components/AddNewQuestion";

const page = () => {
  return (
    <>
      <div className="flex h-full flex-col gap-4">
        <div>
          <h4>EXAMS</h4>
          <p>ku wa 25, Gashyantare, 2025</p>
        </div>
        <div className="flex h-full items-center justify-center rounded-md bg-white shadow-2xl">
          <AddNewQuestion />
        </div>
      </div>
    </>
  );
};

export default page;
