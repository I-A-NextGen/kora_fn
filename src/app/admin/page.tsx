import { Car, Clock, Flag } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Areachart } from "./_components/AreaChart";
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
    <>
      <div className="flex min-h-screen flex-col gap-4 p-8">
        <div>
          <h4>Mwiriwe, Kalisa!</h4>
          <p>ku wa 25, Gashyantare, 2025</p>
        </div>
        <div className="grid grid-cols-1 grid-rows-2 gap-4 p-4 md:grid-cols-1 lg:grid-cols-3">
          <div className="col-span-2 row-span-2 flex min-h-64 flex-col gap-4 rounded-2xl border-2 border-black/10 p-8 shadow-2xl">
            <div>
              <h1 className="text-7xl">
                999.9k <span className="text-sm">rwf</span>
              </h1>
              <p>Total Revenue</p>
            </div>
            <Areachart className="size-full" />
          </div>
          <Card className="relative flex min-h-64 flex-col justify-between gap-4 rounded-2xl border-2 border-black/10 p-8 shadow-2xl">
            <div className="flex w-full items-center justify-end gap-4">
              <span className="inline-flex items-center gap-2">
                <div className="size-6 rounded bg-green-500" /> Active Sub
              </span>
              <span className="inline-flex items-center gap-2">
                <div className="size-6 rounded bg-red-500" /> Inactive Sub
              </span>
            </div>
            <div className="flex gap-4">
              <div className="w-full">
                <h1 className="text-7xl">1K</h1>
                <h6>Total Users</h6>
              </div>
              <div>
                <span className="inline-flex items-center gap-2">
                  <div className="size-6 rounded bg-green-500" /> 500
                </span>
                <span className="inline-flex items-center gap-2">
                  <div className="size-6 rounded bg-red-500" /> 500
                </span>
              </div>
            </div>
          </Card>
          <Card className="relative flex min-h-64 flex-col justify-between gap-4 rounded-2xl border-2 border-black/10 bg-blue-600 p-8 text-white shadow-2xl">
            <div className="flex w-full items-center justify-end gap-4">
              <span className="inline-flex items-center gap-2">
                <div className="size-6 rounded bg-green-500" /> Kin
              </span>
              <span className="inline-flex items-center gap-2">
                <div className="size-6 rounded bg-red-500" /> Eng
              </span>
            </div>
            <div className="flex gap-4">
              <div className="w-full">
                <h1 className="text-7xl">600</h1>
                <h6>Total Questions</h6>
              </div>
              <div>
                <span className="inline-flex items-center gap-2">
                  <div className="size-6 rounded bg-green-500" /> 50
                </span>
                <span className="inline-flex items-center gap-2">
                  <div className="size-6 rounded bg-red-500" /> 500
                </span>
              </div>
            </div>
          </Card>
        </div>
        <div className="p-4">
          <div className="grid min-h-72 w-full grid-cols-3 gap-4 rounded-2xl">
            <Card className="col-span-2 h-fit p-8 shadow-2xl">
              <h4 className="">Recent Transactions</h4>
              <Table className="mt-8">
                <TableHeader className="bg-blue-500/20">
                  <TableRow className="p-4 ">
                    <TableHead className="w-[100px] p-4">Itariki</TableHead>
                    <TableHead className="p-4">Ingano</TableHead>
                    <TableHead className="p-4">Konti</TableHead>
                    <TableHead className="text-right p-4">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {invoices.map((item, i) => (
                    <TableRow key={i}>
                      <TableCell className="w-56 p-4">{item.date}</TableCell>
                      <TableCell className="p-4">{item.Ingano}</TableCell>
                      <TableCell className="p-4">{item.Konti}</TableCell>
                      <TableCell className="text-right p-4">
                        {item.Status}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
            <div className="col-span-1 p-8 shadow-2xl">
              <h4 className="">Recent Reports</h4>
              <div className="flex flex-col gap-4">
                {[1, 2, 3, 4].map((item, i) => (
                  <Card
                    key={i}
                    className="grid grid-cols-4 gap-4 p-4 duration-700 hover:bg-blue-200"
                  >
                    <Image
                      src="https://i.pinimg.com/736x/7f/17/53/7f1753c1a41f6b28edd2d85ec353ea20.jpg"
                      height={32}
                      width={32}
                      className="col-span-1 h-12 w-12 rounded-full"
                      alt=""
                    />
                    <div className="col-span-3">
                      <h6>Jane Smith</h6>
                      <small className="line-clamp-3">
                        Lorem ipsum dolor sit amet consectetur. Curabitur
                        suspendisse at maecenas non consectetur pulvinar cursus
                        dolor faucibu...
                      </small>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
