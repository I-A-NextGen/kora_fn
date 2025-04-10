"use client";

import { Card } from "@/components/ui/card";
import { Suspense, useId, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Activity, DotIcon, Edit, SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AllQuestions, Clients, Democlients } from "@/lib/items";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import DashHeader from "@/app/(dashboard)/components/DashHeader";
import { useSearchParams } from "next/navigation";
import AddNewQuestion from "@/app/(dashboard)/components/AddNewQuestion";

const ExamList = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const searchParams = useSearchParams();
  const mode = searchParams.get("mode");

  const id = useId();

  const filteredItemsClients = AllQuestions.filter((item) =>
    item.question.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const filteredItemsDemoClients = AllQuestions.filter((item) =>
    item.question.toLowerCase().includes(searchQuery.toLowerCase()),
  );
  if (mode === "new") {
    return null;
  }
  return (
    <div className="flex gap-4">
      <Tabs
        defaultValue="AllQuestions"
        className="flex w-full flex-col items-start"
      >
        <div className="flex w-full flex-row items-center justify-between">
          <TabsList className="flex size-fit flex-row gap-4 bg-transparent">
            <TabsTrigger
              value="AllQuestions"
              className="flex min-w-56 flex-row items-center justify-center gap-2 bg-white px-4 py-3 shadow-2xl data-[state=active]:border-blue-500 data-[state=active]:bg-blue-500/80"
            >
              <p>All Questions</p>
              <span className="rounded-2xl bg-blue-700 px-4 py-1 text-white">
                500
              </span>
            </TabsTrigger>
            <TabsTrigger
              value="FreeQuestions"
              className="flex min-w-56 flex-row items-center justify-center gap-2 bg-white px-4 py-3 shadow-2xl data-[state=active]:border-blue-500 data-[state=active]:bg-blue-500/80"
            >
              <p>Free Questions</p>
              <span className="rounded-2xl bg-blue-700 px-4 py-1 text-white">
                20
              </span>
            </TabsTrigger>
          </TabsList>
          <Button asChild className="size-fit min-w-56 px-4 py-3">
            <Link href="?mode=new" passHref>
              Add New Question
            </Link>
          </Button>
        </div>
        <div className="mt-4 w-full bg-white p-4">
          <div className="*:not-first:mt-2 max-w-72">
            <Label htmlFor={id}></Label>
            <div className="flex h-12 w-[25rem] items-center rounded-lg border border-gray-500 px-8">
              <div className="">
                <SearchIcon size={16} />
              </div>
              <Input
                id={id}
                className="peer h-full border-none outline-none"
                placeholder="Search..."
                type="search"
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <TabsContent value="AllQuestions">
            <Table>
              <TableHeader className="bg-muted/50">
                <TableRow className="hover:bg-transparent">
                  <TableHead className="w-16 p-4">No</TableHead>
                  <TableHead className="w-96">Question</TableHead>
                  <TableHead>Lang</TableHead>
                  <TableHead className="">Is Free</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredItemsClients.slice(0, 10).map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="p-4 font-medium odd:bg-muted/50 odd:hover:bg-muted/50">
                      {index + 1 + " ."}
                    </TableCell>
                    <TableCell>{item.question}</TableCell>
                    <TableCell>{item.Lang}</TableCell>
                    <TableCell className="flex w-32 items-center">
                      {item.IsFree == false ? (
                        <span className="rounded-xl bg-green-700 p-2 px-4 text-white">
                          True
                        </span>
                      ) : (
                        <span className="rounded-xl bg-red-700 p-2 px-4 text-white">
                          false
                        </span>
                      )}
                    </TableCell>
                    <TableCell className="float-end">
                      <Edit />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>
          <TabsContent value="FreeQuestions">
            <Table>
              <TableHeader className="bg-muted/50">
                <TableRow className="hover:bg-transparent">
                  <TableHead className="w-16 p-4">No</TableHead>
                  <TableHead className="w-56">Question</TableHead>
                  <TableHead>Lang</TableHead>
                  <TableHead>Is Free</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredItemsClients.slice(0, 10).map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="p-4 font-medium odd:bg-muted/50 odd:hover:bg-muted/50">
                      {index + 1 + " ."}
                    </TableCell>
                    <TableCell>{item.question}</TableCell>
                    <TableCell>{item.Lang}</TableCell>
                    <TableCell>
                      {item.IsFree == false ? (
                        <span className="rounded-xl bg-green-700 p-2 px-4 text-white">
                          True
                        </span>
                      ) : (
                        <span className="rounded-xl bg-red-700 p-2 px-4 text-white">
                          false
                        </span>
                      )}
                    </TableCell>
                    <TableCell className="float-end">
                      <Edit />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default ExamList;
