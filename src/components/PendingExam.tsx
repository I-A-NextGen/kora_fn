"use client";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useAppDispatch, useAppSelector } from "@/lib/redux/store";
import { PuffLoader } from "react-spinners";
import { useRouter } from "next/navigation";
import { ArrowRightToLine } from "lucide-react";
import { Button } from "./ui/button";

const PendingExam = ({ isFree = false }: { isFree?: boolean }) => {
  const dispatch = useAppDispatch();
  const { isAuth, hasPendingExam } = useAppSelector((state) => state.userAuth);
  const router = useRouter();

  return <div className="fied top-0 z-[60] h-10 w-full bg-red-300">dsfsdf</div>;
};

export default PendingExam;
