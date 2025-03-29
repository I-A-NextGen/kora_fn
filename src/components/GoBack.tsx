"use client";
import { useRouter } from "next/navigation";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useEffect, useState } from "react";

const GoBack = ({
  className,
  toHome,
}: {
  className?: string;
  toHome?: boolean;
}) => {
  const router = useRouter();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={
        (isScrolled
          ? "bg-white/55 px-6 shadow-xl backdrop-blur-md duration-100 "
          : " ") +
        className +
        " z-10 flex cursor-pointer items-center gap-x-2 rounded-3xl py-2 font-medium text-primary hover:font-semibold"
      }
      onClick={() => {
        if (toHome) router.push("/");
        else router.back();
      }}
    >
      <div className="flex size-8 items-center justify-center rounded-full border border-blue-700/70 bg-white/60">
        <IoMdArrowRoundBack className="text-lg" />
      </div>
      <span>Subira {toHome ? "ahabanza" : "inyuma"}</span>
    </div>
  );
};

export default GoBack;
