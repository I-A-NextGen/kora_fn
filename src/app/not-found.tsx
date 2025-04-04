"use client";

import GoBack from "@/components/GoBack";

const NotFound = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-8 text-blue-700">
      <h1 className="w-1/3 text-center">
        The page you are looking is not found
      </h1>
      <GoBack />
    </div>
  );
};

export default NotFound;
