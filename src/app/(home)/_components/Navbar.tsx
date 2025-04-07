"use client";
import { Button } from "@/components/ui/button";
import { LogIn, Pen } from "lucide-react";
import { CgMenuRightAlt } from "react-icons/cg";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import Logo from "@/components/Logo";
import GetStarted from "./GetStarted";
import MobileMoneyPayment from "@/components/PaymentComp";

const Navbar = () => {
  const [width, setWidth] = useState(
    typeof window !== "undefined" && window.innerWidth,
  );
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMenu]);

  return (
    <nav
      className={`${isScrolled ? "bg-[#cfdbfa] bg-opacity-50 py-3 backdrop-blur-lg" : "py-9"} fixed top-0 z-50 flex w-dvw items-end justify-between px-[5%] duration-300 sm:items-center lg:px-[10%]`}
      role="navigation"
    >
      <Logo link />
      <div onClick={() => setShowMenu((prevValue) => !prevValue)}>
        <CgMenuRightAlt className="cursor-pointer text-3xl md:hidden" />
      </div>
      <div
        className={`${showMenu ? "flex" : "hidden"} fixed right-0 top-0 h-lvh w-[calc(100vw-20%)] animate-slideInToLeft flex-col items-center gap-4 gap-y-24 bg-[#e6ecfb] px-[5%] py-9 md:relative md:flex md:h-fit md:w-fit md:animate-none md:flex-row md:gap-8 md:bg-transparent md:px-0 md:py-0 lg:gap-32`}
      >
        <div
          className="self-end"
          onClick={() => setShowMenu((prevValue) => !prevValue)}
        >
          <IoClose className="cursor-pointer text-4xl md:hidden" />
        </div>
        <div className="mt-8 flex flex-col gap-x-6 gap-y-6 sm:mt-0 md:flex-row md:items-center lg:gap-x-10">
          <Link href="/">Ahabanza</Link>
          <Link href="/">Uko Bikora</Link>
          <Link href="/">Ibiciro</Link>
          <MobileMoneyPayment/>
        </div>
        <div className="flex gap-x-4">
          <GetStarted />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
