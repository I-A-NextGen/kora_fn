"use client";
import { useAppDispatch, useAppSelector } from "@/lib/redux/store";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const RoleWrapper = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathName = usePathname();
  const { user, isAuth, loading } = useAppSelector((state) => state.userAuth);

  useEffect(() => {
    if (!loading)
      if (user && isAuth) {
        if (user.role && pathName.split("/").slice(1)[0] !== user.role) {
          router.replace(`/${user.role}/dashboard`);
        }
      } 
  }, []);
  return loading ? <p>Loading...</p> : <>{children}</>;
};

export default RoleWrapper;
