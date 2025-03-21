"use client";

import { Box } from "lucide-react";
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
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const Navbar = () => {
  const [notifications, setNotifications] = useState(initialNotifications);
  const unreadCount = notifications.filter((n) => n.unread).length;

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
    <div className="flex justify-end gap-2 p-6 lg:gap-8 items-center">
      
      <Popover>
        <PopoverTrigger asChild>
          <Button
            size="icon"
            variant="outline"
            className="relative"
            aria-label="Open notifications"
          >
            <BellIcon size={16} aria-hidden="true" />
            {unreadCount > 0 && (
              <Badge className="absolute -top-2 left-full min-w-5 -translate-x-1/2 px-1">
                {unreadCount > 99 ? "99+" : unreadCount}
              </Badge>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80 p-1">
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
          <div
            role="separator"
            aria-orientation="horizontal"
            className="-mx-1 my-1 h-px bg-border"
          ></div>
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
      <div className="flex items-center gap-4">
        <img
          className="rounded-full size-12 ring-1 ring-background"
          src="https://i.pinimg.com/736x/f2/9e/a6/f29ea6cd4dc11133fd8790d6d9b223e1.jpg"
          
          alt="Friend 03"
        />
        <div className="flex flex-col gap-1">
            <span className="text-foreground font-bold">Don aime</span>
            <small>mdonavan33@gmail.com</small>
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
