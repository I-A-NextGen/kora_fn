import Logo from "@/components/Logo";
import { Clock } from "lucide-react";

const NavBar = ({ timeLeft }: { timeLeft: number }) => {
  return (
    <div className="sticky top-0 flex h-16 items-center justify-between bg-white px-[5%]">
      <div onClick={(e) => e.preventDefault()}>
        <Logo link={false} />
      </div>
      <div className="flex w-[8.5rem] items-center justify-center gap-2 rounded-3xl bg-primary px-6 py-[6px] text-white">
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
