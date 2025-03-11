import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import Navbar from "../(app)/_components/Navbar";
import { Adminsidebar } from "./_components/AdminSidebar";


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider style={{
    } as React.CSSProperties}>
      <Adminsidebar />
      <section className="w-full">
        {children}
      </section>
    </SidebarProvider>
  )
}
