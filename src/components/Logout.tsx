"use client";
import { useEffect } from "react";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";
import { persistor, useAppDispatch, useAppSelector } from "@/lib/redux/store";
import { userLogoutAction } from "@/lib/redux/actionCreators/authAction";
import { PulseLoader } from "react-spinners";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { userLogoutReset } from "@/lib/redux/features/user/logoutReducer";
import { userAuthReset } from "@/lib/redux/features/user/authReducer";
import storage from "redux-persist/lib/storage";

const Logout = ({
  className,
  iconSize,
}: {
  className?: string;
  iconSize?: number;
}) => {
  const { loading, error, isLoggedOut } = useAppSelector(
    (state) => state.userLogout,
  );
  // const sizeStyle =
  const dispatch = useAppDispatch();
  const route = useRouter();

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isLoggedOut) {
      persistor.purge();
      localStorage.clear();
      sessionStorage.clear();
      timer = setTimeout(() => {
        dispatch(userAuthReset());
        storage.removeItem("persist:root");
        toast.dismiss();
        toast.success("Gusohoka muri konti yawe byagenze neza.", {
          duration: Infinity,
        });
        route.push("/");
      }, 3000);
    }
    if (error) {
    }
    return () => clearTimeout(timer);
  }, [isLoggedOut, error]);

  const handleLogout = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    toast.info(
      <div className="flex">
        <span className="text-[.9rem] md:text-[.95rem]">
          Tegereza gato, gusohoka muri konti yawe birimo gukorwa.
          <PulseLoader
            size={4}
            className="inline group-hover:*:!bg-white"
            margin={1}
          />
        </span>
      </div>,
      {
        duration: Infinity,
      },
    );
    dispatch(userLogoutAction());
  };
  return (
    <Button
      onClick={handleLogout}
      variant="default"
      className="group flex h-[2.7rem] w-full justify-start gap-2 bg-transparent px-5 text-inherit shadow-none duration-0 hover:bg-transparent"
    >
      <LogOut size={iconSize ? iconSize : 18} className="!size-fit" />
      <span
        className={`text-xs font-normal tracking-tight md:text-[.9rem] md:font-medium md:tracking-normal ${className ? className : ""}`}
      >
        Gusohoka
      </span>
      {loading && (
        <PulseLoader size={5} className="group-hover:*:!bg-white" margin={3} />
      )}
    </Button>
  );
};

export default Logout;
