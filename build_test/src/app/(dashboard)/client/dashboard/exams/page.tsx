import { Clock, Flag } from "lucide-react";
import Link from "next/link";

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
import StartExamCard from "@/app/(dashboard)/components/StartExamCard";
import DashHeader from "@/app/(dashboard)/components/DashHeader";

const page = () => {
  return (
    <>
      <div className="flex min-h-screen flex-col gap-5">
        <DashHeader title="EXAMS" />
        <div className="flex flex-col gap-5 lg:flex-row">
          <StartExamCard />
          <div className="flex h-44 items-end justify-center gap-6 rounded-2xl bg-white p-8 shadow-2xl md:gap-14 xl:w-3/5">
            <div className="flex flex-col gap-3">
              <h1 className="text-[3.5rem] font-semibold md:text-[5rem]">
                100
              </h1>
              <p className="font-medium leading-3 tracking-tight text-gray-500">
                Imyitozo wakoze
              </p>
            </div>
            <div className="flex flex-col gap-[2px] border-l-2 border-black pl-2 md:pl-4">
              <div className="inline-flex justify-between">
                <span className="text-xs md:text-sm">Intsinzi:</span>
                <span className="text-xs md:text-sm">05</span>
              </div>
              <div className="inline-flex justify-between">
                <span className="text-xs md:text-sm">Intsinzwi:</span>
                <span className="text-xs md:text-sm">05</span>
              </div>
              <div className="inline-flex justify-between gap-2">
                <span className="text-xs md:text-sm">Itararangira:</span>
                <span className="text-xs md:text-sm">05</span>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-xl bg-white p-4 md:p-8">
          <h6>Imyitozo iheruka</h6>
          <Table className="mt-5 min-w-[27rem]">
            <TableHeader>
              <TableRow>
                <TableHead className="w-[20%]">Itariki</TableHead>
                <TableHead className="w-[20%] text-center">Amanota</TableHead>
                <TableHead className="w-[20%] text-center leading-3">
                  Iminota wakoresheje
                </TableHead>
                <TableHead className="w-[20%] text-center">Ikigero</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {quizhistory.map((item, index) => (
                <TableRow key={index} className="h-[3.25rem] md:h-14">
                  <TableCell className="text-nowrap">{item.date}</TableCell>
                  <TableCell className="text-center">{item.marks}</TableCell>
                  <TableCell className="text-center">{item.time}</TableCell>
                  <TableCell className="text-center">{item.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default page;
