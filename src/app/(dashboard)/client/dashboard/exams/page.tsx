"use client";
import { Check, Clock, Flag, X } from "lucide-react";

import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import StartExamCard from "@/app/(dashboard)/components/StartExamCard";
import DashHeader from "@/app/(dashboard)/components/DashHeader";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/redux/store";
import DashboardContentSkeleton from "@/app/(dashboard)/components/LoadingSkeletons/DashboardContentSkeleton";
import { fetchAllAttemptedExams } from "@/lib/redux/actionCreators/examAction";
import { toast } from "sonner";
import { formatDateMonth } from "@/utils/formatDate";
import { resetAttemptedExamsError } from "@/lib/redux/features/exams/attemptedExamsReducer";

const page = () => {
  const dispatch = useAppDispatch();
  const { loading, attemptedExams, error } = useAppSelector(
    (state) => state.attemptedExams,
  );
  useEffect(() => {
    if (!attemptedExams) {
      dispatch(fetchAllAttemptedExams());
    }
  }, [attemptedExams]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(resetAttemptedExamsError());
    }
  }, [error]);

  return loading || !attemptedExams ? (
    <DashboardContentSkeleton />
  ) : (
    <div className="flex min-h-screen flex-col gap-5">
      <DashHeader title="IBIZAMINI" />
      <div className="flex flex-col-reverse gap-5 sm:flex-row">
        <StartExamCard />
        <div className="flex h-40 items-end justify-center gap-6 rounded-2xl bg-white p-6 shadow-2xl sm:h-56 md:h-60 md:gap-4 lg:gap-10 lg:p-8 xl:w-3/5">
          <div className="flex flex-col gap-2 md:gap-3">
            <h1 className="h-[2.4rem] text-[3.5rem] font-semibold tracking-tight md:h-[3rem] md:text-[5rem] lg:h-[4.3rem]">
              {attemptedExams.totalAttemptedExams.total
                .toString()
                .padStart(2, "0")}
            </h1>
            <p className="text-nowrap font-medium leading-3 tracking-tight text-gray-500">
              Ibizamini wakoze
            </p>
          </div>
          <div className="flex flex-col gap-1 border-l-2 border-black pl-2 pr-2 md:pl-3">
            <div className="flex items-center justify-between gap-1 text-green-600">
              <Check size={16} strokeWidth={3} className="" />
              <span className="text-xs font-semibold md:text-sm">
                {attemptedExams.totalAttemptedExams.success
                  .toString()
                  .padStart(2, "0")}
              </span>
            </div>
            <div className="flex items-center justify-between text-red-500">
              <X size={16} strokeWidth={3} className="" />
              <span className="text-xs font-semibold md:text-sm">
                {attemptedExams.totalAttemptedExams.failure
                  .toString()
                  .padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-xl bg-white p-5 md:p-8">
        <h6 className="!text-base lg:text-lg">Ibizamini wakoze</h6>
        <Table className="mt-2 min-w-[27rem] md:mt-5">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[20%]">Itariki</TableHead>
              <TableHead className="w-[20%] text-center">Amanota</TableHead>
              <TableHead className="w-[20%] text-center leading-3">
                Iminota wakoresheje
              </TableHead>
              <TableHead className="w-[20%] text-center">Ikigero</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {attemptedExams.exams
              .slice()
              .reverse()
              .map((exam, index) => (
                <TableRow key={index} className="h-[3.25rem] md:h-14">
                  <TableCell className="text-nowrap">{`${new Date(exam.date).getDate()}, ${formatDateMonth(new Date(exam.date).getMonth(), true)}, ${new Date(exam.date).getFullYear()}`}</TableCell>
                  <TableCell className="text-center">{exam.score}/20</TableCell>
                  <TableCell className="text-center">
                    {(Math.floor(exam.timeUsed / 60) || 0)
                      .toString()
                      .padStart(2, "0")}
                    :
                    {(Math.floor(exam.timeUsed % 60) || 0)
                      .toString()
                      .padStart(2, "0")}
                  </TableCell>
                  <TableCell
                    className={`${exam.score > 11 ? "text-green-600" : "text-red-500"} text-center`}
                  >
                    {exam.score > 11 ? "Watsinze" : "Watsinzwe"}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default page;
