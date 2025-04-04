"use client";
import { Clock, Flag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import DashHeader from "../../components/DashHeader";
import StartExamCard from "../../components/StartExamCard";
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <div className="flex min-h-screen flex-col gap-3 md:gap-8">
      <DashHeader name={true} title="Mwiriwe" />
      <div className="flex flex-col gap-5 xl:flex-row">
        <div className="flex flex-wrap gap-x-3 gap-y-5 md:flex-wrap md:gap-5 lg:flex-nowrap xl:w-2/3 xl:flex-nowrap">
          <div className="relative flex h-48 min-w-[48.9%] flex-1 items-end gap-4 overflow-hidden rounded-2xl bg-white px-7 py-6 shadow-lg sm:flex-row sm:px-5 md:h-52 md:min-w-[48.5%] md:px-8 md:shadow-2xl lg:h-60 xl:w-1/2">
            <Image
              src="/DashEllipse.png"
              className="absolute -right-5 -top-3 md:-right-2 md:-top-2"
              alt="Friend 03"
              width={150}
              height={150}
            />

            <div className="flex w-full flex-row items-center gap-7 rounded-2xl sm:gap-5 md:gap-6">
              <div className="flex flex-col">
                <h1 className="text-[3.5rem] font-semibold leading-[2.7rem] md:text-[5rem] md:leading-[4.6rem]">
                  100
                </h1>
                <p className="text-nowrap font-medium tracking-tight text-gray-500">
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
                  <span>:&nbsp;&nbsp;100/200</span>
                </span>
              </div>
            </div>
          </div>
          <div className="relative flex h-48 min-w-[48.9%] flex-1 flex-row items-end gap-4 overflow-hidden rounded-2xl bg-white px-7 py-6 shadow-lg sm:px-5 md:h-52 md:min-w-[48.5%] md:px-8 md:shadow-2xl lg:h-60 xl:w-1/2">
            <Image
              src="/DashEllipse.png"
              className="absolute -right-5 -top-3 md:-right-2 md:-top-2"
              alt="Friend 03"
              width={150}
              height={150}
            />
            <p className="absolute left-7 top-4 text-[.8rem] font-semibold sm:left-5 md:left-8">
              iki cyumweru
            </p>

            <div className="flex flex-col">
              <div className="-mb-1 flex items-end">
                <h1 className="text-[3.5rem] font-semibold leading-[2.7rem] md:text-[5rem] md:leading-[4.6rem]">
                  10
                </h1>
                <span className="mb-1 h-fit text-2xl leading-3 md:text-4xl">
                  %
                </span>
              </div>
              <p className="text-nowrap font-medium tracking-tight text-gray-500">
                Amahirwe Yawe yo gutsinda
              </p>
            </div>
          </div>
        </div>
        <div className="xl:w-1/3">
          <StartExamCard />
        </div>
      </div>
      <div className="relative flex h-44 w-full flex-col justify-between overflow-hidden rounded-2xl bg-primary bg-gradient-to-br px-6 py-7 text-white shadow-lg md:h-48 md:px-10 md:shadow-2xl">
        <div className="absolute -bottom-20 -left-8 z-10 size-60 rounded-full bg-blue-400/15 md:size-72" />
        <div className="z-20 mt-1">
          <p className="text-[.83rem] md:text-base">Become a KORA Member</p>
          <p className="-mt-1 text-[1.1rem] font-medium tracking-tight md:mt-2 md:text-[1.6rem]">
            Join Our whatsapp Community
          </p>
        </div>
        <Button className="z-20 w-fit rounded-3xl bg-[#2AA81A] px-5">
          Join Now
        </Button>
        <div className="absolute -bottom-24 -right-20 z-10 size-40 rounded-full bg-green-400/30 opacity-40 md:-bottom-24 md:-right-16 md:size-52">
          <div className="absolute -left-1 -top-2 size-14 md:size-24">
            <Image
              src="/whatsapp.png"
              fill
              objectFit="contain"
              className="absolute -left-3 -top-3"
              alt="whatsapp-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
