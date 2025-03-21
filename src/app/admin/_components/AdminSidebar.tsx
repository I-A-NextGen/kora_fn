"use client";

import Sittingperson from "@/app/(home)/_components/Sittingperson";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { itemsfooter } from "@/lib/menu";
import {
  History,
  LayoutDashboard,
  Notebook,
  PersonStanding,
  Wallet,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Adminsidebar() {
  const path = usePathname();
  console.log(path);

  const isActive = (href: string) => {
    return path === href;
  };

  const items = [
    {
      label: "Dashboard",
      href: "/admin/",
      icon: LayoutDashboard,
    },
    {
      label: "Ibizamini",
      href: "/admin/exam",
      icon: Notebook,
    },
    {
      label: "Clients",
      href: "/admin/client",
      icon: PersonStanding,
    },
    {
      label: "Ibyakozwe",
      href: "/admin/done",
      icon: History,
    },
    {
      label: "Ubwishyu",
      href: "/admin/payment",
      icon: Wallet,
    },
  ];

  return (
    <Sidebar className="bg-white">
      <SidebarHeader className="grid min-h-24 place-items-center text-blue-700">
        <h1 className="">Kora</h1>
      </SidebarHeader>
      <SidebarContent className="flex justify-between">
        <SidebarGroup className="group-data-[collapsible=icon]:hidden">
          <div className="flex list-none flex-col gap-2">
            {items.map((item, index) => (
              <SidebarMenuItem
                className={`flex items-center rounded-md p-2 duration-300 ${
                  isActive(item.href)
                    ? "bg-blue-700 text-white hover:bg-blue-700/80"
                    : "bg-white text-blue-700"
                }`}
                key={index}
              >
                <SidebarMenuButton
                  className="inline-flex gap-4 p-4"
                  asChild
                  isActive
                >
                  <Link href={item.href}>
                    <item.icon />
                    <span>{item.label}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </div>
        </SidebarGroup>
        <SidebarGroup className="group-data-[collapsible=icon]:hidden">
          <div className="flex list-none flex-col gap-2">
            {itemsfooter.map((item, index) => (
              <SidebarMenuItem
                className={`flex items-center rounded-md p-2 duration-300 ${
                  isActive(item.url)
                    ? "bg-blue-700 text-white hover:bg-blue-700/40"
                    : "bg-white text-blue-700"
                }`}
                key={index}
              >
                <SidebarMenuButton
                  className="inline-flex gap-4 p-4"
                  asChild
                  isActive
                >
                  <Link href={item.url}>
                    <item.icon />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </div>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
