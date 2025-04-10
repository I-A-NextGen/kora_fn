"use client";

import { Card } from "@/components/ui/card";
import { useId, useState } from "react";
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
import { Clients, Democlients } from "@/lib/items";
import DashHeader from "@/app/(dashboard)/components/DashHeader";



const Page = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const id = useId();

  const filteredItemsClients = Clients.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredItemsDemoClients = Democlients.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex min-h-screen flex-col gap-8 bg-blue-50">
      <DashHeader title="CLIENTS" />
      <div className="flex gap-4">
        <Tabs
          defaultValue="Clients"
          className="flex w-full flex-col items-start"
        >
          <TabsList className="flex size-fit flex-row gap-4 bg-transparent">
            <TabsTrigger
              value="Clients"
              className="flex min-w-56 flex-row items-center justify-center gap-2 px-4 py-3 shadow-2xl data-[state=active]:border-blue-500 data-[state=active]:bg-blue-500/80"
            >
              <p>Clients</p>
              <span className="rounded-2xl bg-blue-700 px-4 py-1 text-white">
                500
              </span>
            </TabsTrigger>
            <TabsTrigger
              value="DemoClients"
              className="flex min-w-56 flex-row items-center justify-center gap-2 px-4 py-3 shadow-2xl data-[state=active]:border-blue-500 data-[state=active]:bg-blue-500/80"
            >
              <p>Demo Clients</p>
              <span className="rounded-2xl bg-blue-700 px-4 py-1 text-white">
                20
              </span>
            </TabsTrigger>
          </TabsList>
          <div className="w-full p-4">
            <div className="*:not-first:mt-2 max-w-72">
              <Label htmlFor={id}></Label>
              <div className="relative">
                <Input
                  id={id}
                  className="peer pe-9 ps-9"
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
            <TabsContent value="Clients">
              <Table>
                <TableHeader className="bg-muted/50">
                  <TableRow className="hover:bg-transparent">
                    <TableHead className="p-4">No</TableHead>
                    <TableHead>Issue Date</TableHead>
                    <TableHead>Expire Date</TableHead>
                    <TableHead>Code</TableHead>
                    <TableHead>Phone Number</TableHead>
                    <TableHead>Package</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredItemsClients.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell className="p-4 font-medium odd:bg-muted/50 odd:hover:bg-muted/50">
                        {index + 1 + " ."}
                      </TableCell>
                      <TableCell>{item.IssueDate}</TableCell>
                      <TableCell>{item.ExpireDate}</TableCell>
                      <TableCell>{item.Code}</TableCell>
                      <TableCell>{item.PhoneNumber}</TableCell>
                      <TableCell>{item.Package}</TableCell>
                      <TableCell className="float-end">
                        <Edit />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
            <TabsContent value="DemoClients">
              <Table>
                <TableHeader className="bg-muted/50">
                  <TableRow className="hover:bg-transparent">
                    <TableHead className="p-4">No</TableHead>
                    <TableHead>Issue Date</TableHead>
                    <TableHead>Expire Date</TableHead>
                    <TableHead>Code</TableHead>
                    <TableHead>Phone Number</TableHead>
                    <TableHead>Package</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredItemsDemoClients.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell className="p-4 font-medium odd:bg-muted/50 odd:hover:bg-muted/50">
                        {index + 1 + " ."}
                      </TableCell>
                      <TableCell>{item.IssueDate}</TableCell>
                      <TableCell>{item.ExpireDate}</TableCell>
                      <TableCell>{item.Code}</TableCell>
                      <TableCell>{item.PhoneNumber}</TableCell>
                      <TableCell>{item.Package}</TableCell>
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
