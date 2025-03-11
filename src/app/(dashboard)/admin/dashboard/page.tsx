import { Car, ChevronDown, Clock, Flag } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Areachart } from "../../components/AreaChart";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import DashHeader from "../../components/DashHeader";

const page = () => {
  const invoices = [
    {
      date: "25, Gashy, 2025",
      Ingano: "1720",
      Konti: "0790770000",
      Status: "Success",
    },
    {
      date: "25, Gashy, 2025",
      Ingano: "1720",
      Konti: "0790770000",
      Status: "Success",
    },
    {
      date: "25, Gashy, 2025",
      Ingano: "1720",
      Konti: "0790770000",
      Status: "Success",
    },
    {
      date: "25, Gashy, 2025",
      Ingano: "1720",
      Konti: "0790770000",
      Status: "Success",
    },
    {
      date: "25, Gashy, 2025",
      Ingano: "1720",
      Konti: "0790770000",
      Status: "Success",
    },
  ];
  return (
    <div className="flex min-h-screen flex-col gap-6">
      <DashHeader title="Mwiriwe, Kalisa!" />
      <div className="flex flex-col gap-5 xl:h-[32rem] xl:flex-row">
        <div className="flex w-full flex-col gap-4 rounded-2xl bg-white p-5 shadow-xl md:p-8 xl:w-2/3">
          <div>
            <div className="flex items-end gap-2">
              <h1 className="font-sans text-3xl">999.9k</h1>
              <span className="text-base font-medium">RWF</span>
            </div>
            <p className="text-gray-500">Total Revenue</p>
          </div>
          <div className="flex flex-col gap-5 overflow-hidden rounded-xl md:border bg-white md:p-5">
            <div className="flex items-center gap-10 self-end">
              <div className="flex items-center gap-1">
                <div className="size-2 rounded-full bg-primary md:size-3" />
                <span className="text-xs md:text-sm">Income</span>
              </div>
              <div className="flex items-center gap-3 border border-gray-200 px-3 rounded-md">
                <span className="text-sm">2025</span>
                <ChevronDown className="w-5" />
              </div>
            </div>
            <Areachart className="size-full" />
          </div>
        </div>
        <div className="flex w-full flex-col gap-5 md:flex-row xl:w-1/3 xl:flex-col">
          <div className="relative flex h-48 w-full flex-col justify-between rounded-2xl bg-white p-5 shadow-xl md:w-1/2 lg:w-full lg:px-8 lg:py-5 xl:h-full xl:p-8">
            <div className="flex w-full items-center justify-end gap-8 md:gap-5 lg:gap-8">
              <div className="inline-flex items-center gap-1">
                <div className="size-3 bg-green-500" />
                <span className="text-nowrap text-sm">Active Sub</span>
              </div>
              <div className="inline-flex items-center gap-1">
                <div className="size-3 bg-red-500" />
                <span className="text-nowrap text-sm">Inactive Sub</span>
              </div>
            </div>
            <div className="flex w-[75%] items-end justify-between gap-4 md:w-[100%] lg:w-[75%]">
              <div className="">
                <h1 className="font-sans text-6xl">1k</h1>
                <p className="text-nowrap leading-3 text-gray-500">
                  Total Users
                </p>
              </div>
              <div className="flex flex-col">
                <div className="inline-flex items-center gap-1">
                  <div className="size-3 bg-green-500" />
                  <span className="text-sm">500</span>
                </div>
                <div className="inline-flex items-center gap-1">
                  <div className="size-3 bg-red-500" />
                  <span className="text-sm">500</span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex h-48 w-full flex-col justify-between rounded-2xl bg-primary p-5 text-white shadow-xl md:w-1/2 lg:w-full lg:px-8 lg:py-5 xl:h-full xl:p-8">
            <div className="flex w-full items-center justify-end gap-8">
              <div className="inline-flex items-center gap-1">
                <div className="size-3 bg-green-500" />
                <span className="text-sm">KIN</span>
              </div>
              <div className="inline-flex items-center gap-1">
                <div className="size-3 bg-red-500" />
                <span className="text-sm">ENG</span>
              </div>
            </div>
            <div className="flex w-[75%] items-end justify-between gap-4 md:w-[100%] lg:w-[75%]">
              <div className="w-full">
                <h1 className="font-sans text-6xl">600</h1>
                <p className="text-nowrap leading-4">Total Questions</p>
              </div>
              <div className="flex flex-col">
                <div className="inline-flex items-center gap-1">
                  <div className="size-3 bg-green-500" />
                  <span className="text-sm">500</span>
                </div>
                <div className="inline-flex items-center gap-1">
                  <div className="size-3 bg-red-500" />
                  <span className="text-sm">500</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex min-h-60 w-full flex-wrap gap-5 rounded-2xl lg:flex-nowrap">
        <div className="w-full gap-4 rounded-2xl bg-white px-4 py-6 shadow-2xl md:px-6 md:py-8 lg:w-3/5">
          <h6 className="">Recent Transactions</h6>
          <Table className="mt-5 min-w-[27rem]">
            <TableHeader className="h-[3.25rem] md:h-14">
              <TableRow className="hover:bg-transparent">
                <TableHead className="w-[25%] p-4">Itariki</TableHead>
                <TableHead className="w-[15%] text-center">Ingano</TableHead>
                <TableHead className="w-[25%] text-center">Konti</TableHead>
                <TableHead className="w-[15%] text-center">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((item, i) => (
                <TableRow key={i} className="h-[3.25rem] md:h-14">
                  <TableCell className="text-nowrap">{item.date}</TableCell>
                  <TableCell className="text-center">{item.Ingano}</TableCell>
                  <TableCell className="text-center">{item.Konti}</TableCell>
                  <TableCell className="text-center">{item.Status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="w-full gap-4 rounded-2xl bg-white px-4 py-6 shadow-2xl md:px-6 md:py-8 lg:w-2/5">
          <h6 className="">Recent Reports</h6>
          <div className="mt-5 flex w-full flex-col gap-2">
            {[1, 2, 3, 4].map((item, i) => (
              <div
                key={i}
                className="flex h-fit w-fit justify-start gap-4 bg-white p-4 shadow-lg duration-700 hover:bg-blue-200"
              >
                <div className="">
                  <figure className="relative size-12 overflow-hidden rounded-full">
                    <Image
                      src="https://i.pinimg.com/736x/7f/17/53/7f1753c1a41f6b28edd2d85ec353ea20.jpg"
                      fill
                      alt=""
                    />
                  </figure>
                </div>
                <div className="">
                  <p className="font-medium leading-4">Jane Smith</p>
                  <small className="mt-2 line-clamp-2 text-justify leading-[.9rem] text-gray-700">
                    Lorem ipsum dolor sit amet consectetur. Curabitur
                    suspendisse at maecenas non consectetur pulvinar cursus
                    dolor faucibu
                  </small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
