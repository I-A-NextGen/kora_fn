import { Clock, Flag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <div className="flex min-h-screen flex-col gap-8">
        <div>
          <h4>Mwiriwe, Kalisa!</h4>
          <p className="text-[.95rem] text-gray-500">
            ku wa 25, Gashyantare, 2025
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-3">
          <div className="flex h-60 flex-row items-end gap-4 rounded-2xl bg-white px-8 py-4 shadow-2xl">
            <div className="flex flex-row items-center gap-6 rounded-2xl">
              <div className="flex flex-col gap-2">
                <h1 className="text-[5rem] font-semibold">100</h1>
                <p className="font-medium tracking-tight text-gray-500">
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
          <div className="relative flex h-60 flex-row items-end gap-4 overflow-hidden rounded-2xl bg-white px-8 py-4 shadow-2xl">
            <p className="absolute right-8 top-5 text-sm font-semibold">
              iki cyumweru
            </p>

            <div className="flex flex-col gap-2">
              <div className="flex items-end">
                <h1 className="text-[5rem] font-semibold">10</h1>
                <span className="mb-1 text-4xl">%</span>
              </div>
              <p className="font-medium tracking-tight z-10 text-gray-600">
                Amahirwe Yawe yo gutsinda
              </p>
            </div>

            <div className="absolute -bottom-8 -right-20 z-0 h-48 w-64 rotate-12 rounded-full bg-white/25 opacity-55">
              <Image
                src={"/traffic-cone.png"}
                alt="traffic-cone"
                fill
                className="absolute bottom-0 right-0 opacity-80"
              />
            </div>
          </div>
          <div className="relative flex h-60 flex-row items-end gap-4 rounded-2xl bg-primary p-5 text-white shadow-2xl">
            <p className="absolute right-4 top-4 rounded-xl bg-white px-3 py-1 text-sm font-medium text-primary">
              20 min
            </p>
            <div className="flex flex-col gap-3">
              <p className="w-[90%] text-sm tracking-tight">
                Itoze buri munsi, wongere ubumenyi n&apos;amahirwe, biguhesha
                insinzi.
              </p>
              <p className="font-semibold">Tangira aka kanya! </p>
              <Link
                href={""}
                className="mt-2 w-fit rounded-xl bg-white px-4 py-2 text-sm font-medium text-blue-700"
              >
                Tangira imyitozo
              </Link>
            </div>
          </div>
        </div>
        <div className="">
          <div className="min-h-72 w-full rounded-2xl bg-blue-700 shadow-2xl" />
        </div>
      </div>
    </>
  );
};

export default page;
