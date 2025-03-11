import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import Navbar from "../../_components/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <main className="w-full">{children}</main>;
}
