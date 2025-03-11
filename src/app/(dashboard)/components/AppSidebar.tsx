"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { items, itemsfooter } from "@/lib/menu";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Button } from "../../../components/ui/button";
import SittingPerson from "@/app/(dashboard)/components/Sittingperson";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Globe, MoreHorizontal, MoreVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function AppSidebar() {
  const path = usePathname();
  const role = path.split("/")[1];

  const isActive = (href: string) => {
    return (
      path.split("/")[path.split("/").length - 1] === href ||
      (path.split("/")[path.split("/").length - 1] === "dashboard" &&
        href === "")
    );
  };

  return (
    <Sidebar className="shadow-[0px_-25px_45px_-20px_rgba(0,_0,_0,_0.3)] md:min-h-svh md:px-2 md:py-5 md:shadow-none">
      <SidebarHeader className="hidden min-h-24 text-primary md:grid">
        <h4 className="px-4 font-bold">KORA</h4>
      </SidebarHeader>
      <SidebarContent className="justify-between">
        <SidebarGroup className="flex-row justify-between gap-2 group-data-[collapsible=icon]:hidden md:flex-col">
          {items
            .filter((item) => item.role === "*" || item.role === role)
            .map((item, index) => (
              <SidebarMenuItem
                className={`flex items-center rounded-md duration-300 hover:bg-primary hover:text-white ${
                  isActive(item.url)
                    ? "bg-primary text-white hover:bg-primary/80"
                    : "bg-none"
                }`}
                key={index}
              >
                <SidebarMenuButton
                  className="inline-flex h-12 flex-col gap-0 md:flex-row md:gap-3 md:px-5"
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

        <SidebarGroup className="hidden border-t border-black/50 group-data-[collapsible=icon]:hidden md:flex">
          <div className="flex list-none flex-col gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger
                asChild
                className="hover:bg-primary hover:text-white"
              >
                <SidebarMenuButton className="relative flex h-12 flex-col items-center gap-0 md:flex-row md:gap-3 md:px-5">
                  <Globe />
                  <span className="text-xs font-normal tracking-tight md:text-[.9rem] md:font-medium md:tracking-normal">
                    Ikinyarwanda
                  </span>
                  <SidebarMenuAction className="right-3 top-[.85rem]">
                    <MoreHorizontal />
                  </SidebarMenuAction>
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="right"
                align="start"
                className="rounded p-2 shadow-xl"
              >
                <DropdownMenuItem className="cursor-pointer rounded pr-6 outline-none focus:bg-primary/30">
                  <span>Ikinyarwanda</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="mt-1 cursor-pointer rounded pr-6 focus:bg-primary/30">
                  <span>English</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            {itemsfooter.map((item, index) => (
              <SidebarMenuItem
                className={`flex items-center rounded-md duration-300 hover:bg-primary hover:text-white ${
                  isActive(item.url)
                    ? "bg-primary text-white hover:bg-primary/40"
                    : ""
                }`}
                key={index}
              >
                <SidebarMenuButton
                  className="inline-flex h-12 gap-3 px-5"
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
