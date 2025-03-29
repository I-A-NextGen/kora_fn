"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/lib/redux/store";
import { userAuthAction } from "@/lib/redux/actionCreators/authAction";
import { userLogoutReset } from "@/lib/redux/features/user/logoutReducer";

const AuthWrapper = ({
  children,
  authPage,
}: {
  children: React.ReactNode;
  authPage?: boolean;
}) => {
  const router = useRouter();
  const { user, loading, isAuth } = useAppSelector((state) => state.userAuth);
  const { isLoggedOut } = useAppSelector((state) => state.userLogout);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(userAuthAction());
  }, [dispatch]);

  useEffect(() => {
    if (!loading)
      if (!isAuth && !authPage) {
        if (!isLoggedOut) {
          router.replace("/auth/login");
        } else {
          dispatch(userLogoutReset());
        }
      } else if (isAuth && user && authPage) {
        router.replace(`/${user.role ?? "client"}/dashboard`);
      }
  }, [isAuth]);

  return loading ? <p>Loading...</p> : <>{children}</>;
};

export default AuthWrapper;
