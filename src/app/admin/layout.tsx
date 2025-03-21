import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Adminsidebar } from "./_components/AdminSidebar";
import Navbar from "./_components/Navbar";


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider style={{
    } as React.CSSProperties}>
      <Adminsidebar />
      <section className="w-full">
        <Navbar/>
        {children}
      </section>
    </SidebarProvider>
  )
}
