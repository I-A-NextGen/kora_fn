import { Card } from "@/components/ui/card";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Activity, DotIcon, Edit } from "lucide-react";

const items = [
  {
    id: "1",
    IssueDate: "25, Gashy, 2025",
    ExpireDate: "25, Gashy, 2025",
    Code: "DSGR31DG",
    PhoneNumber: "0790000832",
    Package: "17/20",
    name: "Alex Thompson",
    email: "alex.t@company.com",
    location: "San Francisco, US",
    status: "Active",
    balance: "$1,250.00",
  },
  {
    id: "1",
    IssueDate: "25, Gashy, 2025",
    ExpireDate: "25, Gashy, 2025",
    Code: "DSGR31DG",
    PhoneNumber: "0790000832",
    Package: "17/20",
    name: "Alex Thompson",
    email: "alex.t@company.com",
    location: "San Francisco, US",
    status: "Active",
    balance: "$1,250.00",
  },
  {
    id: "1",
    IssueDate: "25, Gashy, 2025",
    ExpireDate: "25, Gashy, 2025",
    Code: "DSGR31DG",
    PhoneNumber: "0790000832",
    Package: "17/20",
    name: "Alex Thompson",
    email: "alex.t@company.com",
    location: "San Francisco, US",
    status: "Active",
    balance: "$1,250.00",
  },
];

const page = () => {
  return (
    <div className="flex min-h-screen flex-col gap-8 bg-blue-50 p-8">
      <div>
        <h4>Mwiriwe, Kalisa!</h4>
        <p>ku wa 25, Gashyantare, 2025</p>
      </div>
      <div className="flex gap-4">
        <Tabs
          defaultValue="Clients"
          className="flex w-full flex-col items-start"
        >
          <TabsList className="flex size-fit flex-row gap-4 bg-transparent">
            <TabsTrigger
              value="Clients"
              className="flex min-w-96 flex-col items-start gap-2 border-b-4 p-4 data-[state=active]:border-blue-500 data-[state=active]:bg-blue-500/30"
            >
              <h4>Clients</h4>
              <span>500</span>
            </TabsTrigger>
            <TabsTrigger
              value="DemoClients"
              className="flex min-w-96 flex-col items-start gap-2 border-b-4 p-4 data-[state=active]:border-blue-500 data-[state=active]:bg-blue-500/30"
            >
              <h4>Clients</h4>
              <span>500</span>
            </TabsTrigger>
          </TabsList>
          <div className="w-full p-4">
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
                  {items.map((item, index) => (
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
                  {items.map((item, index) => (
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

export default page;
