"use client"
import { CircleUserRoundIcon, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import PlanAndUpgrade from "./PlanAndUpgrade";
import Logout from "@/components/Logout";
import { useAppSelector } from "@/lib/redux/store";

const NavBarUserContent = () => {
  const { user } = useAppSelector((state) => state.userAuth);
  return (
    <nav className="min-h-44 ">
      <ul className="list m-0 flex h-full flex-col justify-between gap-8">
        <div className="flex flex-col gap-y-2">
          <li>
            <Link
              href={`/${user?.role ? user?.role : "client"}/dashboard`}
              className="flex h-[2.7rem] items-center gap-2 rounded-md pl-5 hover:bg-primary hover:text-white"
            >
              <LayoutDashboard size={22} />
              <span className="!text-[.9rem] lg:!text-base font-normal">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              href={`/${user?.role ? user?.role : "client"}/dashboard/account`}
              className="flex h-[2.7rem] items-center gap-2 rounded-md pl-5 hover:bg-primary hover:text-white"
            >
              <CircleUserRoundIcon strokeWidth={1.8} size={22} />
              <span className="!text-[.9rem] lg:!text-base font-normal">Konti Yange</span>
            </Link>
          </li>

          <li className="flex h-[2.7rem] items-center gap-2 rounded-md hover:bg-primary hover:text-white">
            <Logout iconSize={21} className="!text-[.9rem] lg:!text-base !font-normal" />
          </li>
        </div>
        <li className="flex items-center gap-3 w-fit md:w-fit justify-between overflow-hidden rounded-3xl border-2 border-primary pl-4">
          <PlanAndUpgrade className="flex rounded-3xl" />
        </li>
      </ul>
    </nav>
  );
};

export default NavBarUserContent;
