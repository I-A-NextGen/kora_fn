"use client";

import { Bell, Box, CircleUserRound, CircleUserRoundIcon } from "lucide-react";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { BellIcon } from "lucide-react";
import { useState } from "react";
import { initialNotifications } from "@/lib/utils";
import { IoStarSharp } from "react-icons/io5";
import Image from "next/image";
import { HiMiniUser } from "react-icons/hi2";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { LogOut } from "lucide-react";
import PlanAndUpgrade from "./PlanAndUpgrade";

const Navbar = () => {
  const [notifications, setNotifications] = useState(initialNotifications);
  const unreadCount = notifications.filter((n) => n.unread).length;
  const path = usePathname();
  const role = path.split("/")[1];

  const handleMarkAllAsRead = () => {
    setNotifications(
      notifications.map((notification) => ({
        ...notification,
        unread: false,
      })),
    );
  };
  const handleNotificationClick = (id: number) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id
          ? { ...notification, unread: false }
          : notification,
      ),
    );
  };

  return (
    <div className="sticky left-0 -top-[1px] z-50 flex h-16 w-full items-center justify-between gap-2 border-b border-gray-300 bg-white px-[4%] md:h-20 md:justify-end lg:gap-32">
      <div className="md:hidden">
        <p className="text-xl font-bold text-primary md:text-2xl">KORA</p>
      </div>
      <div className="flex items-center justify-between gap-8 lg:gap-32">
        {role === "client" && (
          <div className="inline-flex items-center gap-4">
            <PlanAndUpgrade />
          </div>
        )}
        <div className="flex items-center gap-10">
          <Popover>
            <PopoverTrigger asChild>
              <button
                type="button"
                className="relative mt-1 border-none bg-transparent text-black outline-none md:mt-2"
                aria-label="Open notifications"
              >
                <Bell size={25} aria-hidden="true" />
                {unreadCount > 0 && (
                  <Badge className="absolute -right-2 -top-2 flex size-[1.1rem] items-center justify-center !rounded-full bg-red-700 text-[.6rem] leading-3">
                    {unreadCount > 99 ? "99+" : unreadCount}
                  </Badge>
                )}
              </button>
            </PopoverTrigger>
            <PopoverContent className="min-h-40 w-80 p-1">
              <div className="flex items-baseline justify-between gap-4 px-3 py-2">
                <div className="text-sm font-semibold">Notifications</div>
                {unreadCount > 0 && (
                  <button
                    className="text-xs font-medium hover:underline"
                    onClick={handleMarkAllAsRead}
                  >
                    Mark all as read
                  </button>
                )}
              </div>
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className="rounded-md px-3 py-2 text-sm transition-colors hover:bg-accent"
                >
                  <div className="relative flex items-start gap-3 pe-3">
                    <div className="flex-1 space-y-1">
                      <button
                        className="text-left text-foreground/80 after:absolute after:inset-0"
                        onClick={() => handleNotificationClick(notification.id)}
                      >
                        <span className="font-medium text-foreground hover:underline">
                          {notification.user}
                        </span>{" "}
                        {notification.action} .
                      </button>
                      <div className="text-xs text-muted-foreground">
                        {notification.timestamp}
                      </div>
                    </div>
                    {notification.unread && (
                      <div className="absolute end-0 self-center">
                        <Dot />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger>
              <div className="flex cursor-pointer items-center gap-2">
                <div className="relative flex size-10 items-center justify-center overflow-hidden rounded-full border border-black bg-primary/15 ring-1 ring-background">
                  <HiMiniUser size={28} />
                </div>
                {/* <div className="relative size-10 overflow-hidden rounded-full ring-1 ring-background">
              <Image src="/profile.jpg" alt="Friend 03" fill />
            </div> */}
                <div className="hidden flex-col justify-center md:flex">
                  <span className="text-start font-medium leading-4 text-foreground">
                    Don aime
                  </span>
                  <small className="font-light leading-4">
                    mdonavan33@gm...
                  </small>
                </div>
              </div>
            </PopoverTrigger>
            <PopoverContent className="w-64 pb-8 pt-10 shadow-2xl">
              <nav className="h-44">
                <ul className="list m-0 flex h-full flex-col justify-between">
                  <div className="flex flex-col gap-y-1">
                    <li>
                      <Link
                        href={`/${role}/dashboard/account`}
                        className="flex items-center gap-2 rounded-md py-[.65rem] pl-5 hover:bg-primary hover:text-white"
                      >
                        <CircleUserRoundIcon size={22} />
                        <span>My Account</span>
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="#"
                        className="flex items-center gap-2 rounded-md py-[.65rem] pl-5 hover:bg-primary hover:text-white"
                      >
                        <LogOut size={22} />
                        <span>Log Out</span>
                      </Link>
                    </li>
                  </div>
                  <li className="flex items-center justify-between overflow-hidden rounded-3xl border-2 border-primary pl-4">
                    <PlanAndUpgrade className="rounded-3xl flex" />
                  </li>
                </ul>
              </nav>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

function Dot({ className }: { className?: string }) {
  return (
    <svg
      width="6"
      height="6"
      fill="currentColor"
      viewBox="0 0 6 6"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="3" cy="3" r="3" />
    </svg>
  );
}
