import { SidebarProvider } from "@/components/ui/sidebar";
import React from "react";
import { AppSidebarSkeleton } from "../(dashboard)/components/LoadingSkeletons/AppSidebarSkeleton";
import DashNavBarSkeleton from "../(dashboard)/components/LoadingSkeletons/DashNavBarSkeleton";
import DashboardContentSkeleton from "../(dashboard)/components/LoadingSkeletons/DashboardContentSkeleton";

const loading = () => {
  return (
    <SidebarProvider style={{} as React.CSSProperties}>
      <AppSidebarSkeleton />
      <main className="w-full bg-primary/5 pb-16 md:pb-0">
        <DashNavBarSkeleton />
        <div className="px-[4%] py-10">
          <DashboardContentSkeleton />
        </div>
      </main>
    </SidebarProvider>
  );
};

export default loading;
