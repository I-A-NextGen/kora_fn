"use client";

import Goback from "@/components/GoBack";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-8 text-blue-700">
      <h1 className="w-1/3 text-center">
        The page you are looking is not found
      </h1>
      <Goback />
    </div>
  );
};

export default NotFound;
