import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  ArrowRight,
  ArrowRightToLine,
  Ban,
  Frown,
  LogIn,
  Pen,
} from "lucide-react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Input } from "./ui/input";
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "@/lib/redux/store";
import {
  fetchExamAction,
  fetchFreeExamAction,
} from "@/lib/redux/actionCreators/examAction";
import { PuffLoader } from "react-spinners";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { resetExamError } from "@/lib/redux/features/exams/examReducer";

export interface IExamFormData {
  type: "normal" | "textbased" | "roadsigns";
}

const ReadyToStart = ({ isFree = false }: { isFree?: boolean }) => {
  const [selectedOption, setSelectedOption] =
    useState<IExamFormData["type"]>("normal");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IExamFormData>({
    mode: "onChange",
  });
  const dispatch = useAppDispatch();
  const { loading, exam, isExamSubmitted, error, isFreeExamAttempted } =
    useAppSelector((state) => state.exam);
  const { isAuth } = useAppSelector((state) => state.userAuth);
  const router = useRouter();

  const type = watch("type");

  useEffect(() => {
    if (type) {
      setSelectedOption(type);
    }
  }, [type]);

  useEffect(() => {
    if (!isFreeExamAttempted && error) {
      toast.error(error);
      dispatch(resetExamError());
    }
  }, [error]);

  useEffect(() => {
    if (exam && !isFreeExamAttempted && !isExamSubmitted) {
      router.push("/exam");
    }
  }, [exam]);

  const onSubmit = (data: IExamFormData) => {
    if (selectedOption) {
      if (isFree) {
        dispatch(fetchFreeExamAction());
      } else {
        dispatch(fetchExamAction(data));
      }
    } else {
      toast.info("Gukomeza hitamo ubwoko bw`ikizamini.");
    }
  };

  return !(loading || (exam && !isExamSubmitted)) ? (
    (!isFreeExamAttempted && !isAuth) || isAuth ? (
      <form
        className="z-10 mb-8 mt-24 w-full sm:w-[90%] md:mb-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        {isFree && (
          <div className="absolute -left-9 top-3 h-fit w-44 -rotate-[30deg] bg-primary text-center font-semibold text-white">
            <span className="block py-1 pr-3">FREE</span>
          </div>
        )}
        <h4 className="mb-5 text-lg leading-5 md:mb-10 md:text-xl">
          Witeguye gutangira ikizamini?
        </h4>
        <div className="ml-3 md:ml-5">
          <p className="mb-3 text-sm leading-4 md:text-[.95rem]">
            Hindura amahitamo ukurikije ikizamini ushaka.
          </p>
          <div className="flex flex-col gap-y-2">
            <div className="flex items-center justify-start gap-2">
              <div>
                <Input
                  type="radio"
                  id="normal"
                  value="normal"
                  className="size-4 md:size-6"
                  {...register("type")}
                  checked={selectedOption === "normal"}
                />
              </div>
              <label htmlFor="normal" className="h-fit w-fit leading-[.6rem]">
                <span className="text-sm font-medium md:text-[.95rem]">
                  Ibisanzwe
                </span>
                <span className="text-sm font-light leading-[.6rem] text-gray-500 md:text-[.95rem]">
                  &nbsp;(Ibibazo by&apos;amagambo n&apos;ibimenyetso
                  by&apos;umuhanda)
                </span>
              </label>
            </div>
            <div className="flex items-center justify-start gap-2">
              <div>
                <Input
                  type="radio"
                  id="textbased"
                  disabled={isFree}
                  {...register("type")}
                  className="size-4 md:size-6"
                  value="textbased"
                  checked={selectedOption === "textbased"}
                />
              </div>
              <label htmlFor="textbased">
                <span
                  className={`${isFree && "cursor-not-allowed text-gray-400"} text-sm font-medium md:text-[.95rem]`}
                >
                  Ibibazo by&apos;amagambo gusa.
                </span>
              </label>
            </div>
            <div className="flex items-center justify-start gap-2">
              <div>
                <Input
                  type="radio"
                  id="roadsigns"
                  disabled={isFree}
                  {...register("type")}
                  className="size-4 md:size-6"
                  value="roadsigns"
                  checked={selectedOption === "roadsigns"}
                />
              </div>
              <label htmlFor="roadsigns">
                <span
                  className={`${isFree && "cursor-not-allowed text-gray-400"} block text-sm font-medium leading-3 md:text-[.95rem]`}
                >
                  Ibibazo by&apos;ibimenyetso by&apos;umuhanda gusa.
                </span>
              </label>
            </div>
          </div>
          <div className="mt-5 flex flex-col font-medium text-primary md:mt-10">
            <p className="leading-4 md:leading-6">
              Igihe kimara:&nbsp;&nbsp; 18 min
            </p>
            <p>Ibibazo byose: 20</p>
          </div>
        </div>
        <Button
          variant={"default"}
          size={"lg"}
          className="mt-8 h-[2.7rem] w-full rounded-3xl md:mt-12 md:h-12"
          type="submit"
        >
          <span className="flex items-center gap-3">
            <span>Tangira Ikizamini</span>
            <ArrowRightToLine
              size={22}
              strokeWidth={2.3}
              className="!size-fit animate-bounce-x"
            />
          </span>
        </Button>
      </form>
    ) : (
      <div className="z-10 flex flex-col items-center justify-between gap-6">
        <Frown size={150} strokeWidth={1} className="text-gray-500/80" />
        <div className="flex flex-col gap-y-3">
          <div className="flex w-fit flex-col">
            <span className="text-nowrap text-[.95rem]">
              Oops! Wamaze gukora ikizamini cyawe cy&apos;ubuntu.
            </span>
            <span className="text-[.95rem]">
              Ikizamini cy&apos;ubuntu gikorwa rimwe gusa!
            </span>
          </div>
          <Link href="" className="text-[.95rem]">
            Gukora ibindi bizamini,
            <span className="font-medium text-primary">&nbsp;Iyandikishe.</span>
          </Link>
        </div>
      </div>
    )
  ) : (
    <div className="flex flex-col items-center justify-center text-primary">
      <PuffLoader color="#1935ca" />
      <p>Ihangane akanya gato...</p>
    </div>
  );
};

export default ReadyToStart;
