"use client";
import { useAppSelector } from "@/lib/redux/store";
import { format } from "date-fns";
import { useEffect } from "react";
import { toast } from "sonner";

const DashHeader = ({ title, name }: { title: string; name?: boolean }) => {
  const formattedDate = format(new Date(), "EEEE dd, LLLL yyy");
  const { user } = useAppSelector((state) => state.userAuth);
  useEffect(() => {
    let timer: NodeJS.Timeout;
    timer = setTimeout(() => {
      toast.dismiss();
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      <p className="text-lg font-semibold capitalize leading-3 md:text-xl">
        {`${title}${name ? ", " + user?.firstName.toLowerCase() + "!" : ""}`}
      </p>
      <p className="text-[.85rem] text-gray-500 md:text-[.9rem]">
        {formattedDate}
      </p>
    </div>
  );
};

export default DashHeader;
