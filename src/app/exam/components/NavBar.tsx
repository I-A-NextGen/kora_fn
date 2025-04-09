import Logo from "@/components/Logo";
import { Clock } from "lucide-react";

const NavBar = ({ timeLeft }: { timeLeft: number }) => {
  return (
    <div className="fixed w-full top-0 flex h-16 items-center justify-between bg-white px-[5%] lg:px-[10%]">
      <Logo link={false} />
      <div className="flex w-[7.5rem] items-center justify-center gap-2 rounded-3xl bg-primary px-4 md:px-6 py-1 text-white md:w-[8.5rem] md:py-[6px]">
        <Clock size={22} strokeWidth={2.5} className="" />
        <p className="w-3/5 font-sans text-lg font-semibold tracking-wide">
          {Math.floor(timeLeft / 60)
            .toString()
            .padStart(2, "0")}
          :{(timeLeft % 60).toString().padStart(2, "0")}
        </p>
      </div>
    </div>
  );
};

export default NavBar;
