import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/app/(dashboard)/components/AppSidebar";
import Navbar from "../../components/Navbar";
import RoleWrapper from "../../components/RoleWrapper";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="w-full">
      <RoleWrapper>{children}</RoleWrapper>
    </section>
  );
}
