import { Clock, Flag } from "lucide-react";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <div className="flex min-h-screen flex-col gap-4 p-8">
        <div>
          <h4>Mwiriwe, Kalisa!</h4>
          <p>ku wa 25, Gashyantare, 2025</p>
        </div>
        <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-1 lg:grid-cols-3">
          <div className="flex min-h-64 flex-row items-end gap-4 rounded-2xl border-2 border-black/10 p-8 shadow-2xl">
            <div>
              <h1 className="text-7xl">100</h1>
              <p>Ibibazo wakoze</p>
            </div>
            <div className="flex flex-col gap-4 text-blue-700">
              <span className="inline-flex gap-2">
                <Clock />: 4h
              </span>
              <span className="inline-flex gap-2">
                <Flag />: 90/200
              </span>
            </div>
          </div>
          <div className="flex min-h-64 relative flex-row items-end gap-4 rounded-2xl border-2 border-black/10 p-8 shadow-2xl">
          <p className="absolute top-8 right-8">iki cyumweru</p>
            <div>
              <h1 className="text-7xl">10%</h1>
              <p>Amahirwe Yawe  yo gutsinda</p>
            </div>
          </div>
          <div className="flex relative min-h-64 flex-row bg-blue-700 text-white items-end gap-4 rounded-2xl border-2 border-black/10 p-8 shadow-2xl">
          <span className="absolute bg-white text-blue-700 px-4 py-2 rounded-2xl top-8 right-8">20 min</span>
            <div className="flex flex-col gap-2">
              <p>Itoze buri munsi, wongere ubumenyi 
              n’amahirwe, biguhesha insinzi. </p>
              <h4>Tangira aka kanya!  </h4>
              <Link href={""} className="bg-white w-fit text-blue-700 px-4 py-2 rounded-2xl">Ibibazo wakoze</Link>
            </div>
            <div className="flex flex-col gap-4 text-blue-700">
              <span className="inline-flex gap-2">
                <Clock />: 4h
              </span>
              <span className="inline-flex gap-2">
                <Flag />: 90/200
              </span>
            </div>
          </div>
        </div>
        <div className=" p-4">
          <div className="w-full min-h-72 rounded-2xl shadow-2xl bg-blue-700"/>
        </div>
      </div>
    </>
  );
};

export default page;
