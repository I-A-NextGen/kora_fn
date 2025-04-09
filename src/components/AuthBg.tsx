"use client";
import { useAppSelector } from "@/lib/redux/store";
import Image from "next/image";

const AuthBg = () => {
  const { loading: authLoading, isAuth } = useAppSelector(
    (state) => state.userAuth,
  );

  return (
    <div
      className={`${authLoading || isAuth ? "lg:hidden" : ""} fixed left-0 top-0 hidden h-screen w-[50%] items-center justify-center lg:flex`}
    >
      <Image
        src={"/Traffic Light.png"}
        alt=""
        width={350}
        height={350}
        className="object-contain"
      />
    </div>
  );
};

export default AuthBg;
