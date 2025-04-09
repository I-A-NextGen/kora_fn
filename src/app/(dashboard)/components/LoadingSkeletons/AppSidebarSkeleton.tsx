"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export function AppSidebarSkeleton() {
  return (
    <Sidebar className="shadow-[0px_-25px_45px_-20px_rgba(0,_0,_0,_0.3)] md:min-h-svh md:px-2 md:py-5 md:shadow-none">
      <SidebarHeader className="hidden min-h-24 text-primary md:grid">
        <Skeleton
          baseColor="#d1d7ed"
          highlightColor="#f1f5f9"
          width="100%"
          height={45}
          style={{
            borderRadius: "12px",
          }}
        />
      </SidebarHeader>
      <SidebarContent className="justify-between">
        <SidebarGroup className="flex-row justify-between gap-3 group-data-[collapsible=icon]:hidden md:flex-col">
          <Skeleton
            baseColor="#d1d7ed"
            highlightColor="#f1f5f9"
            width="100%"
            height={45}
            style={{
              borderRadius: "12px",
            }}
          />
          <Skeleton
            baseColor="#d1d7ed"
            highlightColor="#f1f5f9"
            width="100%"
            height={45}
            style={{
              borderRadius: "12px",
            }}
          />
          <Skeleton
            baseColor="#d1d7ed"
            highlightColor="#f1f5f9"
            width="100%"
            height={45}
            style={{
              borderRadius: "12px",
            }}
          />
        </SidebarGroup>
        <SidebarGroup className="flex-row justify-between gap-3 group-data-[collapsible=icon]:hidden md:flex-col">
          <Skeleton
            baseColor="#d1d7ed"
            highlightColor="#f1f5f9"
            width="100%"
            height={250}
            style={{
              borderRadius: "12px",
            }}
          />
        </SidebarGroup>
        <SidebarGroup className="flex-row justify-between gap-3 group-data-[collapsible=icon]:hidden md:flex-col">
          <Skeleton
            baseColor="#d1d7ed"
            highlightColor="#f1f5f9"
            width="100%"
            height={45}
            style={{
              borderRadius: "12px",
            }}
          />
          <Skeleton
            baseColor="#d1d7ed"
            highlightColor="#f1f5f9"
            width="100%"
            height={45}
            style={{
              borderRadius: "12px",
            }}
          />
          <Skeleton
            baseColor="#d1d7ed"
            highlightColor="#f1f5f9"
            width="100%"
            height={45}
            style={{
              borderRadius: "12px",
            }}
          />
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
