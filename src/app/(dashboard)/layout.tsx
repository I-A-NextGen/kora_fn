import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/app/(dashboard)/components/AppSidebar";
import Navbar from "./components/Navbar";
import AuthWrapper from "./components/AuthWrapper";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <SidebarProvider style={{} as React.CSSProperties}>
        <AuthWrapper>
          <AppSidebar />
          <main className="relative w-full bg-primary/5 pb-16 md:pb-0">
            <Navbar />
            <div className="px-[4%] py-10">{children}</div>
          </main>
        </AuthWrapper>
      </SidebarProvider>
    </div>
  );
}
