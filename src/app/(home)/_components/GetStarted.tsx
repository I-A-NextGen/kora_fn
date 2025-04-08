"use client";
import ReadyToStart from "@/components/ReadyToStart";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { resetIsFreeExamAttempted } from "@/lib/redux/features/exams/examReducer";
import { useAppDispatch, useAppSelector } from "@/lib/redux/store";
import { DialogTitle } from "@radix-ui/react-dialog";
import { LogIn, Pen } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const GetStarted = ({
  readyToStartProp = false,
  triggerIcon = true,
  triggerStyle,
}: {
  readyToStartProp?: boolean;
  triggerStyle?: string;
  triggerIcon?: boolean;
}) => {
  const [showReadyToStart, setShowReadyToStart] = useState(
    readyToStartProp ?? false,
  );
  const { isAuth } = useAppSelector((state) => state.userAuth);
  const dispatch = useAppDispatch();
  
  return (
    <Dialog
      onOpenChange={(open) => {
        if (!open) {
          dispatch(resetIsFreeExamAttempted());
          !readyToStartProp && setShowReadyToStart(false);
        }
        return;
      }}
    >
      <DialogTrigger asChild>
        <Button
          variant={"default"}
          className={
            "h-12 cursor-pointer rounded-3xl bg-primary " + triggerStyle
          }
          size={"lg"}
          asChild
        >
          <div>
            {triggerIcon && <Pen />}
            Tangira Ikizamini
          </div>
        </Button>
      </DialogTrigger>
      <DialogContent className="flex min-h-[25rem] max-w-[90%] flex-col items-center justify-center gap-16 overflow-hidden sm:max-w-[28rem] md:min-h-[31rem] md:max-w-[32rem]">
        <div className="absolute top-0 z-0 size-full bg-gradient-to-br from-primary/20 from-0% via-primary/5 via-40% to-white" />
        {!showReadyToStart && !isAuth ? (
          <>
            <div className="z-10 mt-10 flex w-full flex-col gap-10 sm:w-[90%]">
              <Button
                variant={"outline"}
                size={"lg"}
                onClick={() => setShowReadyToStart(true)}
                className="relative h-10 w-full cursor-pointer rounded-3xl border-primary bg-primary/10 text-primary md:h-12"
              >
                <div className="absolute -right-4 top-1 rotate-[35deg] rounded-2xl bg-yellow-500 px-7 py-1 font-semibold text-black shadow-md">
                  <span>FREE</span>
                </div>
                <Pen />

                <span>Tangira Ikizamini</span>
              </Button>
              <Button
                variant={"default"}
                size={"lg"}
                className="h-10 cursor-pointer rounded-3xl md:h-12"
                asChild
              >
                <Link href="/auth/signup">
                  <span>Koresha Code</span>
                </Link>
              </Button>
            </div>
            <div className="z-10 flex w-full flex-col sm:w-[90%]">
              <span>Waba utite konti?</span>
              <Button
                variant={"outline"}
                size={"lg"}
                className="h-10 cursor-pointer rounded-3xl border-primary bg-primary/15 text-primary md:h-12"
                asChild
              >
                <Link href="/auth/login">
                  <LogIn />
                  <span>Injiramo</span>
                </Link>
              </Button>
            </div>
          </>
        ) : (
          <ReadyToStart isFree={!isAuth} />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default GetStarted;
