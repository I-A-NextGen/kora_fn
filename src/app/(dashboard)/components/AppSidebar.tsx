"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { items, itemsfooter } from "@/lib/menu";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Button } from "../../../components/ui/button";
import SittingPerson from "@/app/(dashboard)/components/Sittingperson";

export function AppSidebar() {
  const path = usePathname();
  const role = path.split("/")[1];

  const isActive = (href: string) => {
    return path === href;
  };

  return (
    <Sidebar className="md:min-h-svh md:px-2 md:py-5">
      <SidebarHeader className="hidden min-h-24 text-primary md:grid">
        <h4 className="px-4 font-bold">KORA</h4>
      </SidebarHeader>
      <SidebarContent className="justify-between">
        <SidebarGroup className="flex-row justify-between gap-2 group-data-[collapsible=icon]:hidden md:flex-col">
          {items
            .filter((item) => item.role === "*" || item.role === role)
            .map((item, index) => (
              <SidebarMenuItem
                className={`flex items-center rounded-md duration-300 hover:bg-primary hover:text-white md:p-2 ${
                  isActive(item.url)
                    ? "bg-primary text-white hover:bg-primary/80"
                    : "bg-none"
                }`}
                key={index}
              >
                <SidebarMenuButton
                  className="inline-flex h-fit flex-col gap-0 md:flex-row md:gap-3 md:px-3"
                  asChild
                  isActive
                >
                  <Link href={`/${role}/dashboard/${item.url}`}>
                    <item.icon />
                    <span className="text-xs font-normal tracking-tight md:text-[.9rem] md:font-medium md:tracking-normal">
                      {item.label}
                    </span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
        </SidebarGroup>
        {role === "client" && (
          <SidebarGroup className="hidden md:flex">
            <div className="relative min-h-60 rounded-2xl bg-primary p-5 text-white">
              <div className="z-10 flex flex-col gap-6">
                <div className="absolute bottom-0 right-0 size-36 rounded-full bg-white/25">
                  <SittingPerson className="absolute bottom-2 right-3 w-24 opacity-80" />
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
        )}
        <SidebarGroup className="hidden group-data-[collapsible=icon]:hidden md:flex border-t border-black/50">
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
                  className="inline-flex gap-3 px-3"
                  asChild
                  isActive
                >
                  <Link href={item.url}>
                    <item.icon />
                    <span className="text-xs font-normal tracking-tight md:text-[.9rem] md:font-medium md:tracking-normal">
                      {item.label}
                    </span>
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
