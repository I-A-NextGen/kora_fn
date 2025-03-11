"use client";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { IoMdArrowRoundBack } from "react-icons/io";

const Goback = ({ className }: { className?: string }) => {
  const router = useRouter();
  return (
    <div
      className={
        className +
        " z-10 flex cursor-pointer items-center gap-x-2 font-medium text-primary hover:font-semibold"
      }
      onClick={() => router.back()}
    >
      <div className="flex size-8 items-center justify-center rounded-full border border-blue-700/70 bg-white/60">
        <IoMdArrowRoundBack className="text-lg" />
      </div>
      <span>Go back</span>
    </div>
  );
};

export default Goback;
