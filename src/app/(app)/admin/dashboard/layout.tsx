import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import Navbar from "../../_components/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider style={{ minHeight: "100vh" } as React.CSSProperties}>
      <AppSidebar />
      <main className="w-full bg-primary/5">
        <Navbar />
        <div className="px-[3%] h-[calc(100%-5rem)] py-7">{children}</div>
      </main>
    </SidebarProvider>
  );
}
