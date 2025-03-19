"use client";

import { Card } from "@/components/ui/card";
import React, { useId, useState } from "react";
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

const Page = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const id = useId();

  const filteredItemsClients = AllQuestions.filter((item) =>
    item.question.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const filteredItemsDemoClients = AllQuestions.filter((item) =>
    item.question.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="flex min-h-screen flex-col gap-8 bg-blue-50 p-8">
      <div>
        <h4>IBIZAMINI</h4>
        <p>ku wa 25, Gashyantare, 2025</p>
      </div>
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
              <Link href="/questions" passHref>
                Add New Question
              </Link>
            </Button>
          </div>
          <div className="mt-4 w-full bg-white p-4">
            <div className="*:not-first:mt-2 max-w-72">
              <Label htmlFor={id}></Label>
              <div className="relative">
                <Input
                  id={id}
                  className="peer bg-white pe-9 ps-9"
                  placeholder="Search..."
                  type="search"
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
                  <SearchIcon size={16} />
                </div>
                <button
                  className="absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md text-muted-foreground/80 outline-none transition-[color,box-shadow] hover:text-foreground focus:z-10 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
                  aria-label="Submit search"
                  type="submit"
                ></button>
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
                      <TableCell className="w-32 flex items-center">
                        {item.IsFree == false ? (
                          <span className="rounded-xl text-white bg-green-700 p-2 px-4">
                            True
                          </span>
                        ) : (
                          <span className="rounded-xl text-white bg-red-700 p-2 px-4">
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
                          <span className="rounded-xl bg-green-700 text-white p-2 px-4">
                            True
                          </span>
                        ) : (
                          <span className="rounded-xl bg-red-700 text-white p-2 px-4">
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
    </div>
  );
};

export default Page;
