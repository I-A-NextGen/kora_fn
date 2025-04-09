"use client";
import { CgMenuRightAlt } from "react-icons/cg";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import Logo from "@/components/Logo";
import GetStarted from "./GetStarted";
import { useAppSelector } from "@/lib/redux/store";
import { useAuthMe } from "@/hooks/useAuthMe";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import NavBarUser from "@/app/(dashboard)/components/NavBarUser";
import { toast } from "sonner";
import NavBarUserContent from "@/app/(dashboard)/components/NavBarUserContent";
import { CircleDollarSign, Cog, Home } from "lucide-react";

const Navbar = () => {
  const [width, setWidth] = useState(
    typeof window !== "undefined" && window.innerWidth,
  );
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  // User Auth
  const { authMe } = useAuthMe();
  const {
    loading: authLoading,
    user,
    isAuth,
  } = useAppSelector((state) => state.userAuth);

  useEffect(() => {
    if (!user || !isAuth) {
      authMe();
    }
  }, [isAuth]);

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
    let timer: NodeJS.Timeout;
    timer = setTimeout(() => {
      toast.dismiss();
    }, 3000);
    return () => clearTimeout(timer);
  }, [isAuth]);

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
        className={`${showMenu ? "flex" : "hidden"} fixed right-0 top-0 h-lvh w-[calc(100vw-20%)] animate-slideInToLeft flex-col items-center justify-center gap-4 bg-[#e6ecfb] px-[5%] py-9 sm:w-[calc(100vw-30%)] md:relative md:flex md:h-fit md:w-fit md:animate-none md:flex-row md:gap-8 md:bg-transparent md:px-0 md:py-0 lg:gap-32`}
      >
        <div
          className="absolute right-[5%] top-5"
          onClick={() => setShowMenu((prevValue) => !prevValue)}
        >
          <IoClose className="cursor-pointer text-4xl md:hidden" />
        </div>
        <div className="flex w-[90%] flex-col gap-x-6 gap-y-2 sm:mt-0 sm:w-[80%] md:flex-row md:items-center lg:gap-x-10">
          <a
            href="#home"
            className="flex h-[2.7rem] items-center gap-2 rounded-md pl-5 hover:bg-primary hover:text-white md:pl-0 md:hover:bg-transparent md:hover:text-black"
            onClick={() => setShowMenu(false)}
          >
            <Home strokeWidth={1.7} size={21} className="md:hidden" />

            <span className="!text-[.9rem] font-normal lg:!text-base">
              Ahabanza
            </span>
          </a>
          <a
            className="flex h-[2.7rem] items-center gap-2 rounded-md pl-5 hover:bg-primary hover:text-white md:pl-0 md:hover:bg-transparent md:hover:text-black"
            href="#how-it-works"
            onClick={() => setShowMenu(false)}
          >
            <Cog strokeWidth={1.7} size={21} className="md:hidden" />
            <span className="text-nowrap !text-[.9rem] font-normal lg:!text-base">
              Uko Bikora
            </span>
          </a>
          <a
            href="#pricing"
            className="flex h-[2.7rem] items-center gap-2 rounded-md pl-5 hover:bg-primary hover:text-white md:pl-0 md:hover:bg-transparent md:hover:text-black"
            onClick={() => setShowMenu(false)}
          >
            <CircleDollarSign
              strokeWidth={1.7}
              size={21}
              className="md:hidden"
            />
            <span className="!text-[.9rem] font-normal lg:!text-base">
              Ibiciro
            </span>
          </a>
        </div>
        <div className="flex w-[90%] gap-x-4 sm:w-[80%]">
          {!authLoading ? (
            isAuth ? (
              <>
                <NavBarUser className="hidden md:flex" />
                <div className="mt-10 w-full border-t border-black pt-1 md:hidden">
                  <NavBarUserContent />
                </div>
              </>
            ) : (
              <div className="mt-5 md:mt-0">
                <GetStarted />
              </div>
            )
          ) : (
            <div>
              <Skeleton
                baseColor="#d1d7ed"
                highlightColor="#f1f5f9"
                width={170}
                height={45}
                style={{
                  borderRadius: "1.5rem",
                }}
                inline
              />
              <Skeleton
                baseColor="#d1d7ed"
                highlightColor="#f1f5f9"
                width={45}
                height={45}
                className="ml-3"
                circle
                inline
              />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
