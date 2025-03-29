import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { LogIn, Pen } from "lucide-react";
import Link from "next/link";

const GetStarted = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={"default"}
          className="h-12 cursor-pointer rounded-3xl bg-primary"
          size={"lg"}
          asChild
        >
          <div className="">
            <Pen />
            Tangira Isuzuma
          </div>
        </Button>
      </DialogTrigger>
      <DialogContent className="flex min-h-[31rem] max-w-[90%] flex-col items-center justify-center gap-16 overflow-hidden sm:max-w-[30rem]">
        <div className="absolute top-0 z-0 size-full bg-gradient-to-br from-primary/35 from-0% via-primary/10 via-40% to-white" />
        <div className="z-10 mt-10 flex w-[90%] flex-col gap-10">
          <Button
            variant={"outline"}
            size={"lg"}
            className="relative h-12 cursor-pointer rounded-3xl border-primary bg-primary/15 text-primary"
            asChild
          >
            <Link href="/auth/signup">
              <div className="absolute -right-4 top-1 rotate-[35deg] rounded-lg bg-yellow-500 px-7 py-1 font-semibold text-black">
                <span>FREE</span>
              </div>
              <Pen />

              <span>Tangira Isuzuma</span>
            </Link>
          </Button>
          <Button
            variant={"default"}
            size={"lg"}
            className="h-12 cursor-pointer rounded-3xl"
            asChild
          >
            <Link href="/auth/signup">
              <span>Koresha Code</span>
            </Link>
          </Button>
        </div>
        <div className="z-10 flex w-[90%] flex-col">
          <span>Waba utite konti?</span>
          <Button
            variant={"outline"}
            size={"lg"}
            className="h-12 cursor-pointer rounded-3xl border-primary bg-primary/15 text-primary"
            asChild
          >
            <Link href="/auth/login">
              <LogIn />
              <span>Injiramo</span>
            </Link>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GetStarted;
