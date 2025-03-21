import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import Navbar from "./_components/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider style={{} as React.CSSProperties}>
      <AppSidebar />
      <main className="w-full bg-primary/5 pb-16 md:pb-0">
        <Navbar />
        <div className="px-[4%] py-10">{children}</div>
      </main>
    </SidebarProvider>
  );
}
