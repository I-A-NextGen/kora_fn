"use client";

import {
  Bell,
  Box,
  CircleUserRound,
  CircleUserRoundIcon,
  LayoutDashboard,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { HiMiniUser } from "react-icons/hi2";
import { useAppSelector } from "@/lib/redux/store";
import NavBarUserContent from "./NavBarUserContent";

const NavBarUser = ({ className }: { className?: string }) => {
  const { user } = useAppSelector((state) => state.userAuth);
  return (
    <Popover>
      <PopoverTrigger className={`${className}`}>
        <div className="flex cursor-pointer items-center gap-2">
          <div className="relative flex size-10 items-center justify-center overflow-hidden rounded-full border border-black bg-primary/15 ring-1 ring-background">
            <HiMiniUser size={28} />
          </div>
          <div className="hidden w-28 flex-col items-start justify-center md:flex">
            <span className="line-clamp-1 text-start font-medium capitalize leading-5 text-foreground">
              {(user?.firstName + " " + user?.lastName).toLowerCase()}
            </span>
            <small className="line-clamp-1 font-light leading-4 bg-transparent">
              {user?.phoneNumber}
            </small>
          </div>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-64 pb-8 pt-10 shadow-2xl">
        <NavBarUserContent />
      </PopoverContent>
    </Popover>
  );
};

export default NavBarUser;
