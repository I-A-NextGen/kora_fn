"use client";

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
import { items, itemsfooter } from "@/lib/menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import Sittingperson from "@/app/(home)/_components/Sittingperson";

export function AppSidebar() {
  const path = usePathname();
  console.log(path);

  const isActive = (href: string) => {
    return path === href;
  };

  return (
    <Sidebar className="bg-white">
      <SidebarHeader className="grid min-h-24 place-items-center text-blue-700">
        <h1 className="">Kora</h1>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup className="group-data-[collapsible=icon]:hidden">
          <div className="flex list-none flex-col gap-2">
            {items.map((item, index) => (
              <SidebarMenuItem
                className={`flex items-center rounded-md p-2 duration-300 ${
                  isActive(item.url)
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
                  <Link href={item.url}>
                    <item.icon />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </div>
        </SidebarGroup>
        <SidebarGroup>
          <div className="min-h-48 relative rounded-2xl bg-blue-700 p-8 text-white">
            <div className="flex flex-col z-10 gap-2">
            <Sittingperson className="absolute -z-10"/>
              <h3 className="font-medium">Support 24/7</h3>
              <p>Contacts us anytime</p>
              <Button
                variant={"outline"}
                className="text-blue-700 w-fit"
                asChild
                size={"sm"}
              >
                <Link href="/contact">
                  <>Contact us</>
                </Link>
              </Button>
            </div>
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
