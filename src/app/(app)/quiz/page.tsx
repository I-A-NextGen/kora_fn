import { Clock, Flag } from "lucide-react";
import Link from "next/link";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { quizhistory } from "@/lib/utils";

const page = () => {
  return (
    <>
      <div className="flex min-h-screen flex-col gap-4 p-8">
        <div>
          <h4>IMYITOZO</h4>
          <p>ku wa 25, Gashyantare, 2025</p>
        </div>
        <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-1 lg:grid-cols-3">
          
          <div className="relative flex min-h-64 flex-row items-end gap-4 rounded-2xl border-2 border-black/10 bg-blue-700 p-8 text-white shadow-2xl">
            <span className="absolute right-8 top-8 rounded-2xl bg-white px-4 py-2 text-blue-700">
              20 min
            </span>
            <div className="flex flex-col gap-2">
              <p>
                Itoze buri munsi, wongere ubumenyi n’amahirwe, biguhesha
                insinzi.{" "}
              </p>
              <h4>Tangira aka kanya! </h4>
              <Link
                href={""}
                className="w-fit rounded-2xl bg-white px-4 py-2 text-blue-700"
              >
                Ibibazo wakoze
              </Link>
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
          <div className="flex min-h-64 col-span-2 flex-row items-end gap-4 rounded-2xl border-2 border-black/10 p-8 shadow-2xl">
            <div>
              <h1 className="text-[8rem]">10</h1>
              <p>Imyitozo wakoze </p>
            </div>
            <div className="flex flex-col min-w-64 border-l-4 pl-8 border-black gap-2">
              <h6 className="inline-flex justify-between">imyitozo watsinze: <span>05</span></h6>
              <h6 className="inline-flex justify-between">imyitozo watsinzwe: <span>05</span></h6>
              <h6 className="inline-flex justify-between">Imyitozo itararangira: <span>05</span></h6>
            </div>
          </div>
        </div>
        <div className="p-4">
          <h1>Imyitozo iheruka</h1>
          <div className="min-h-72 w-full rounded-2xl p-4 shadow-2xl">
            <Table>
              <TableHeader>
                <TableRow >
                  <TableHead className="p-4">Itariki</TableHead>
                  <TableHead className="p-4">Amanota</TableHead>
                  <TableHead className="p-4">Iminota wakoresheje</TableHead>
                  <TableHead className="p-4">Ikigero</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {
                  quizhistory.map((item,index) => (
                    <TableRow  key={index}>
                      <TableCell className="p-4">{item.date}</TableCell>
                      <TableCell className="p-4">{item.marks}</TableCell>
                      <TableCell className="p-4">{item.time}</TableCell>
                      <TableCell className="p-4">{item.status}</TableCell>
                    </TableRow>
                  ))
                }
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
