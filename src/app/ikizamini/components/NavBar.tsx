import Logo from "@/components/Logo";
import { Clock } from "lucide-react";
import { useEffect, useState } from "react";

const NavBar = ({ timeLeft }: { timeLeft: number }) => {
  return (
    <div className="sticky top-0 flex h-16 items-center justify-between bg-white px-[5%]">
      <div onClick={(e) => e.preventDefault()}>
        <Logo link={false} />
      </div>
      <div className="flex w-32 items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-[6px] text-white">
        <Clock size={20} />
        <p className="font-sans text-lg font-semibold tracking-wide">
          {Math.floor(timeLeft / 60)}:
          {(timeLeft % 60).toString().padStart(2, "0")}
        </p>
      </div>
    </div>
  );
};

export default NavBar;
