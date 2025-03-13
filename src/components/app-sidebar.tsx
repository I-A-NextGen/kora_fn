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
import Sittingperson from "@/app/(app)/_components/Sittingperson";

export function AppSidebar() {
  const path = usePathname();

  const isActive = (href: string) => {
    return path === href;
  };

  return (
    <Sidebar className="min-h-svh bg-white px-2 py-5">
      <SidebarHeader className="grid min-h-24 text-primary">
        <h4 className="px-4 font-bold">KORA</h4>
      </SidebarHeader>
      <SidebarContent className="justify-between">
        <SidebarGroup className="group-data-[collapsible=icon]:hidden">
          <div className="flex list-none flex-col gap-2">
            {items.map((item, index) => (
              <SidebarMenuItem
                className={`flex items-center rounded-md p-2 duration-300 hover:bg-primary hover:text-white ${
                  isActive(item.url)
                    ? "bg-primary text-white hover:bg-primary/80"
                    : "bg-white"
                }`}
                key={index}
              >
                <SidebarMenuButton
                  className="inline-flex gap-3 p-3"
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
          <div className="relative min-h-60 rounded-2xl bg-primary p-5 text-white">
            <div className="z-10 flex flex-col gap-6">
              <div className="absolute bottom-0 right-0 size-36 rounded-full bg-white/25">
                <Sittingperson className="absolute bottom-2 right-3 w-24 opacity-80" />
              </div>
              <h6 className="font-medium">Support 24/7</h6>
              <p className="-mt-5 text-sm font-light">Contacts us anytime</p>
              <Button
                variant={"outline"}
                className="w-fit rounded-[.5rem] !text-sm text-primary"
                asChild
                size={"sm"}
              >
                <Link href="/contact">Contact us</Link>
              </Button>
            </div>
          </div>
        </SidebarGroup>
        <SidebarGroup className="group-data-[collapsible=icon]:hidden">
          <div className="flex list-none flex-col gap-2">
            {itemsfooter.map((item, index) => (
              <SidebarMenuItem
                className={`flex items-center rounded-md p-2 duration-300 hover:bg-primary hover:text-white ${
                  isActive(item.url)
                    ? "bg-primary text-white hover:bg-primary/40"
                    : "bg-white"
                }`}
                key={index}
              >
                <SidebarMenuButton
                  className="inline-flex gap-3 p-3"
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
