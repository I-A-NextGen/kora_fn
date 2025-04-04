"use client";

import { PulseLoader } from "react-spinners";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Controller, type SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CloudUpload, Info } from "lucide-react";
import useFilePreview from "@/hooks/useFilePreview";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/lib/redux/store";
import {
  createQuestion,
  type INewQuestionData,
} from "@/lib/redux/actionCreators/questionAction";
import { useSearchParams } from "next/navigation";

const schema = z
  .object({
    question: z.string().trim().nonempty("Required"),
    answerText: z
      .array(z.string().optional())
      .length(4, "Invalid input.")
      .optional(),
    questionPhoto: z
      .custom<FileList | null>((val) => {
        if (!val) return true;
        if (val instanceof FileList && val.length <= 1) {
          return true;
        }
        return false;
      })
      .optional()
      .refine(
        (files) =>
          !files?.[0] || (files?.[0] && files?.[0].size < 5 * 1024 * 1024),
        "File size must be less than 5MB",
      ),
    lang: z.enum(["kiny", "en"]).describe("Please select language"),
    isFree: z.boolean(),
    isRoadSign: z.boolean(),
    answerType: z.enum(["text", "image"]),
    answerImages: z
      .custom<FileList | null>(
        (val) => {
          if (!val) return true;
          if (val instanceof FileList && val.length === 4) {
            return true;
          }
          return false;
        },
        {
          message: "You must upload exactly 4 images.", // Custom error message
        },
      )
      .refine((value) => value?.length === 4, {
        message: "You must upload exactly 4 images.",
      })
      .optional(),
    isCorrect: z.enum(["0", "1", "2", "3"]),
  })
  .strict()
  .superRefine((data, ctx) => {
    if (data.answerType === "text") {
      if (!data.answerText?.length) {
        ctx.addIssue({
          path: ["answerText"],
          message: "All answers field are required",
          code: "custom",
        });
      } else if (
        !data.answerText?.every((answer) => answer && answer.trim().length > 0)
      ) {
        ctx.addIssue({
          path: ["answerText"],
          message: "All answers field are required",
          code: "custom",
        });
      }
    }

    if (data.answerType === "image" && !data.answerImages) {
      ctx.addIssue({
        path: ["answerImages"],
        message: "Please select answers image.",
        code: "custom",
      });
    }
  });

const AddNewQuestion = () => {
  const [answerTypeState, setAnswerTypeState] = useState<"text" | "image">(
    "text",
  );
  const searchParams = useSearchParams();
  const mode = searchParams.get("mode");

  const [answersUrl, setAnswersUrl] = useState<string[]>();

  const dispatch = useAppDispatch();
  const {
    loading: createQuestionLoading,
    error: createQuestionError,
    data: newQuestionData,
  } = useAppSelector((state) => state.createQuestion);

  const {
    control,
    trigger,
    watch,
    setValue,
    clearErrors,
    register,
    reset,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const answerType = watch("answerType");
  const questionPhoto = watch("questionPhoto");
  const [questionImageSrc] = useFilePreview(questionPhoto!);

  const answerImages = watch("answerImages");
  const [imageSrc, setImgSrc] = useFilePreview(answerImages!);

  useEffect(() => {
    if (newQuestionData) {
      setAnswersUrl(undefined);
      setImgSrc(null);
      reset();
      setAnswerTypeState("text");
      toast.success(newQuestionData.message);
    }
    if (createQuestionError) toast.error(createQuestionError.message);
  }, [newQuestionData, createQuestionError]);

  useEffect(() => {
    if (!errors.answerImages && Array.isArray(imageSrc))
      setAnswersUrl(imageSrc);
  }, [answerImages, imageSrc]);

  useEffect(() => {
    setAnswerTypeState(answerType);
  }, [answerType]);

  const onSubmit: SubmitHandler<INewQuestionData> = async (
    data: INewQuestionData,
  ) => {
    await dispatch(createQuestion(data));
  };

  if (mode !== "new") {
    return null;
  }

  return (
    <div className="flex w-full gap-4 rounded-2xl bg-white shadow-2xl">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="m-5 flex w-[100%] flex-col justify-center gap-6 md:m-7 lg:col-start-2 lg:m-12 lg:max-w-[60rem]"
      >
        <div>
          <h4 className="text-lg font-semibold md:text-xl lg:text-[1.3rem]">
            Add questions to the system.
          </h4>
          <p>Fill in the required information.</p>
        </div>
        <div className="flex w-full flex-col justify-center gap-5 text-[.95rem]">
          <div className="flex flex-col gap-10 lg:max-w-[60rem] lg:flex-row lg:gap-8 xl:gap-12">
            <div className="flex flex-col gap-5 lg:w-1/2">
              <label className="flex flex-col">
                <span>Question</span>
                <Input
                  type="text"
                  placeholder="Enter question here"
                  {...register("question")}
                />
                {errors.question && (
                  <p className="text-[.75rem] leading-4 text-red-500">
                    {errors.question.message}
                  </p>
                )}
              </label>
              <label className="flex flex-col">
                <span>
                  Question Photo
                  <span className="text-xs text-gray-500 lg:text-sm">
                    (Optional)
                  </span>
                </span>
                <Input
                  type="file"
                  className="hidden"
                  {...register("questionPhoto", { required: true })}
                />
                <div className="relative flex h-52 w-full flex-col items-center justify-center overflow-hidden rounded-sm border border-dashed border-gray-400 px-4 py-1 text-gray-500 hover:bg-primary/5 sm:px-5">
                  {!questionImageSrc && (
                    <>
                      <CloudUpload
                        size={35}
                        className="-mb-1"
                        strokeWidth={1.5}
                      />
                      <span className="text-xs lg:text-sm">Upload a photo</span>
                    </>
                  )}
                  {questionImageSrc && (
                    <Image
                      src={questionImageSrc as string}
                      objectFit="contain"
                      alt="sfd"
                      fill
                    />
                  )}
                </div>
                {errors.questionPhoto && (
                  <p className="text-[.75rem] leading-4 text-red-500">
                    {errors.questionPhoto.message}
                  </p>
                )}
              </label>
              <label className="flex flex-col">
                <span>Question Language</span>
                <div className="flex h-12 w-full rounded-sm border border-gray-400 bg-transparent px-4 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-70 sm:px-5">
                  <select className="w-full outline-none" {...register("lang")}>
                    <option
                      className="hidden bg-red-400 !text-red-500"
                      value=""
                    >
                      Choose language
                    </option>
                    <option value="kiny">Ikinyarwanda</option>
                    <option value="en">English</option>
                  </select>
                </div>
                {errors.lang && (
                  <p className="text-[.75rem] leading-4 text-red-500">
                    {errors.lang.message}
                  </p>
                )}
              </label>
              <div className="flex justify-between gap-x-5">
                <label className="mb-2 flex items-center gap-2">
                  <Input
                    type="checkbox"
                    className="size-5"
                    placeholder="Enter question language here"
                    {...register("isFree")}
                  />
                  <span className="text-sm leading-3">Is Question Free?</span>
                </label>
                <label className="mb-2 flex items-center gap-1">
                  <Input
                    type="checkbox"
                    className="size-5"
                    placeholder="Enter question language here"
                    {...register("isRoadSign")}
                  />
                  <span className="text-sm leading-3">
                    Is Question a road sign?
                  </span>
                </label>
              </div>
            </div>
            <div className="flex flex-col lg:w-1/2">
              <span>Answers</span>
              <div className="flex gap-5 text-gray-600">
                <label className="mb-2 flex items-center gap-1">
                  <Input
                    type="radio"
                    className="size-[1.2rem]"
                    placeholder="Enter question language here"
                    value="text"
                    checked={answerTypeState === "text"}
                    {...register("answerType")}
                  />
                  <span className="text-xs lg:text-sm">Text</span>
                </label>
                <label className="mb-2 flex items-center gap-1">
                  <Input
                    type="radio"
                    className="size-[1.2rem]"
                    placeholder="Enter question language here"
                    value="image"
                    checked={answerTypeState === "image"}
                    {...register("answerType")}
                  />
                  <span className="text-xs lg:text-sm">Image</span>
                </label>
              </div>
              <p className="my-3 flex items-center gap-1 italic text-gray-500">
                <Info size={18} />
                <span className="text-xs lg:text-sm">
                  Please remember to tick the right answer
                </span>
              </p>
              {answerTypeState === "text" && (
                <div className="flex flex-col gap-3">
                  {[...Array<number>(4)].map((_, i) => (
                    <div className="flex gap-1" key={i}>
                      <Input
                        type="radio"
                        className="size-[1.2rem]"
                        placeholder="Enter question language here"
                        value={i}
                        {...register("isCorrect")}
                      />
                      <Textarea
                        placeholder={`Enter ${["first", "second", "third", "fourth"][i]} answer`}
                        className="h-20 resize-none"
                        {...register(`answerText.${i}`)}
                      />
                    </div>
                  ))}
                </div>
              )}
              {answerTypeState === "image" && (
                <label className="grid grid-cols-2 gap-4">
                  <Controller
                    name="answerImages"
                    control={control}
                    render={({ field }) => (
                      <Input
                        type="file"
                        className="hidden"
                        accept="image/*"
                        multiple
                        onChange={(e) => {
                          setValue("answerImages", undefined);
                          field.onChange(e.target.files);
                          clearErrors("answerImages");
                          setAnswersUrl(undefined);
                          // eslint-disable-next-line @typescript-eslint/no-floating-promises
                          trigger("answerImages");
                        }}
                        placeholder="Enter question here"
                      />
                    )}
                  />
                  {(!answersUrl || !!errors.answerImages) && (
                    <div className="relative col-span-2 flex h-52 w-full flex-col items-center justify-center rounded-sm border border-dashed border-gray-400 px-4 py-1 text-gray-500 hover:bg-primary/5 sm:px-5">
                      <CloudUpload size={35} strokeWidth={1.5} />
                      <span className="text-center text-sm leading-3">
                        Upload a photo
                      </span>
                      <span className="text-center text-sm leading-5 tracking-tight text-primary">
                        Make sure to select exactly 4 files.
                      </span>
                    </div>
                  )}
                  {answersUrl?.length &&
                    !errors.answerImages &&
                    [...Array<number>(4)].map((_, i) => (
                      <div className="flex gap-1" key={i}>
                        <Input
                          type="radio"
                          className="size-[1.2rem]"
                          placeholder="Enter question language here"
                          value={i}
                          {...register("isCorrect")}
                        />
                        <div className="relative flex h-36 w-full flex-col items-center justify-center rounded-sm border border-dashed border-gray-400 px-4 py-1 text-gray-500 hover:bg-primary/5 sm:px-5">
                          <Image
                            className="!relative"
                            src={answersUrl[i]!}
                            fill
                            objectFit="contain"
                            alt="sfd"
                          />
                        </div>
                      </div>
                    ))}
                </label>
              )}
              {errors.answerText || errors.answerImages || errors.isCorrect ? (
                <p className="text-[.75rem] leading-4 text-red-500">
                  {errors.answerText
                    ? (errors.answerText?.message ??
                      "All answers field are required")
                    : errors.answerImages
                      ? errors.answerImages?.message
                      : "Please select a correct answer"}
                </p>
              ) : (
                ""
              )}
            </div>
          </div>
          <Button
            disabled={createQuestionLoading}
            size={"lg"}
            className={`${createQuestionLoading || !isValid ? "bg-gray-500" : "bg-primary"} mt-5 h-[2.75rem] w-44`}
            type="submit"
          >
            {!createQuestionLoading && "Save Question"}
            {createQuestionLoading && (
              <PulseLoader size={10} color="#fff" margin={3} />
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddNewQuestion;
