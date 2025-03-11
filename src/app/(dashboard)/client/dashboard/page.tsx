import { Clock, Flag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import DashHeader from "../../components/DashHeader";
import StartExamCard from "../../components/StartExamCard";

const page = () => {
  return (
    <>
      <div className="flex min-h-screen flex-col gap-3 md:gap-8">
        <DashHeader title="Mwiriwe, Kalisa!" />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-3">
          <div className="relative flex h-44 flex-row items-end gap-4 overflow-hidden rounded-2xl bg-white px-8 py-6 shadow-lg md:h-60 md:shadow-2xl">
            <Image
              src="/DashEllipse.png"
              className="absolute -right-5 -top-3 md:-right-2 md:-top-2"
              alt="Friend 03"
              width={150}
              height={150}
            />

            <div className="flex flex-row items-center gap-6 rounded-2xl">
              <div className="flex flex-col">
                <h1 className="-mb-1 text-[3.5rem] font-semibold md:text-[5rem]">
                  100
                </h1>
                <p className="font-medium tracking-tight text-gray-200">
                  Ibibazo wakoze
                </p>
              </div>
              <div className="flex flex-col gap-1 font-medium text-primary">
                <span className="inline-flex gap-1">
                  <Clock size={22} />
                  <span>:&nbsp;&nbsp;4h</span>
                </span>
                <span className="inline-flex gap-1">
                  <Flag size={22} />
                  <span>:&nbsp;&nbsp;90/200</span>
                </span>
              </div>
            </div>
          </div>
          <div className="relative flex h-44 flex-row items-end gap-4 overflow-hidden rounded-2xl bg-white px-8 py-6 shadow-lg md:h-60 md:shadow-2xl">
            <Image
              src="/DashEllipse.png"
              className="absolute -right-5 -top-3 md:-right-2 md:-top-2"
              alt="Friend 03"
              width={150}
              height={150}
            />
            <p className="absolute left-8 top-4 text-[.8rem] font-semibold">
              iki cyumweru
            </p>

            <div className="flex flex-col">
              <div className="-mb-1 flex items-end">
                <h1 className="text-[3.5rem] font-semibold md:text-[5rem]">
                  10
                </h1>
                <span className="mb-1 h-fit text-2xl leading-3 md:text-4xl">
                  %
                </span>
              </div>
              <p className="font-medium tracking-tight text-gray-600">
                Amahirwe Yawe yo gutsinda
              </p>
            </div>
          </div>
          <StartExamCard />
        </div>
        <div className="">
          <div className="min-h-72 w-full rounded-2xl bg-blue-700 shadow-lg md:shadow-2xl" />
        </div>
      </div>
    </>
  );
};

export default page;
