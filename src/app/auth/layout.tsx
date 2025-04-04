import AuthBg from "@/components/AuthBg";
import GoBack from "@/components/GoBack";
import AuthWrapper from "../(dashboard)/components/AuthWrapper";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="relative bg-gradient-to-br from-primary/25 from-0% to-transparent to-50% lg:from-primary/50">
      <AuthWrapper authPage>
        <GoBack toHome className="fixed left-5 top-8 md:left-8" />
        <div className="relative mx-auto grid min-h-svh max-w-[35rem] items-center justify-items-center gap-10 px-[5%] lg:max-w-full lg:grid-cols-2 lg:p-0">
          <AuthBg />
          {children}
        </div>
      </AuthWrapper>
    </div>
  );
}
