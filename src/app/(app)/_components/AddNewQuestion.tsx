"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
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
import { CloudUpload, CloudUploadIcon, Info } from "lucide-react";
import useFilePreview from "@/hooks/useFilePreview";
import Image from "next/image";

interface FormData {
  question: string;
  questionPhoto: string;
  lang: string;
}

const schema = z.object({
  question: z.string().min(1, "Nomero ya terefoni cyangwa imeri ni ngombwa"),
  questionPhoto: z.instanceof(FileList),
  lang: z.string().min(6, "Ijambobanga rigomba kugira inyuguti nibura 6"),
  isFree: z.boolean(),
  answerType: z.enum(["text", "image"]),
  answerPhoto: z.instanceof(FileList).refine(
    (value) => {
      console.log("check...", value, value.length, value.length === 4);
      return value.length === 4;
    },
    {
      message: "You must upload exactly 4 files.",
    },
  ),
  isCorrect: z.enum(["1", "2", "4", "3"]),
});

const validateImages = (files: FileList | null) => {
  console.log("in..")
  if (!files || files.length !== 4) {
    console.log("in...")
    return "You must select exactly 4 images.";
  }
  return true;
};

const AddNewQuestion = () => {
  const [answerTypeState, setAnswerTypeState] = useState<"text" | "image">(
    "text",
  );
  const [answersUrl, setAnswersUrl] = useState<string[]>(null);
  const {
    control,
    trigger,
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onBlur",
  });

  const answerType = watch("answerType");
  const questionPhoto = watch("questionPhoto");
  const [questionImageSrc] = useFilePreview(questionPhoto);

  const answerPhoto = watch("answerPhoto");
  const [imageSrc] = useFilePreview(answerPhoto);
  console.log("errors.answerPhoto", errors.answerPhoto);
  useEffect(() => {
    if (!errors.answerPhoto && Array.isArray(imageSrc)) {
      setAnswersUrl(imageSrc);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imageSrc]);

  useEffect(() => {
    setAnswerTypeState(answerType);
  }, [answerType]);

  const onSubmit = (data: FormData) => {
    toast.success(`Welcome Back, ${data.question}!`);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="m-10 flex w-[100%] flex-col justify-center gap-6 lg:col-start-2 lg:max-w-[60rem]"
    >
      <div>
        <h4>Add questions to the system.</h4>
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
                <p className="text-red-500">{errors.question.message}</p>
              )}
            </label>
            <label className="flex flex-col">
              <span>
                Question Photo
                <span className="text-sm text-gray-500">(Optional)</span>
              </span>
              <Input
                type="file"
                className="hidden"
                {...register("questionPhoto")}
              />
              <div className="relative flex h-52 w-full flex-col items-center justify-center overflow-hidden rounded-sm border border-dashed border-gray-400 px-4 py-1 text-gray-500 sm:px-5">
                {!questionImageSrc && (
                  <>
                    <CloudUpload
                      size={35}
                      className="-mb-2"
                      strokeWidth={1.5}
                    />
                    <span className="text-sm">Upload a photo</span>
                  </>
                )}
                {questionImageSrc && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <Image
                    src={questionImageSrc as string}
                    objectFit="contain"
                    alt="sfd"
                    fill
                  />
                )}
              </div>
            </label>
            <label className="flex flex-col">
              <span>Question Language</span>
              <Select>
                <SelectTrigger>
                  <SelectValue
                    className="text-xs"
                    placeholder="Choose language"
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Ikinyarwanda">Ikinyarwanda</SelectItem>
                  <SelectItem value="English">English</SelectItem>
                </SelectContent>
              </Select>
              {/* {errors.lang && <p className="text-red-500">{errors.lang.message}</p>} */}
            </label>
            <div className="flex justify-between">
              <label className="mb-2 flex items-center gap-2">
                <Input
                  type="checkbox"
                  className="size-6"
                  placeholder="Enter question language here"
                  {...register("isFree")}
                />
                <span className="leading-4">Is Question Free?</span>
              </label>
              <label className="mb-2 flex items-center gap-2">
                <Input
                  type="checkbox"
                  className="size-6"
                  placeholder="Enter question language here"
                  {...register("isFree")}
                />
                <span className="leading-4">Is Question a SignPost?</span>
              </label>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="flex flex-col">
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
                  <span className="text-sm">Text</span>
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
                  <span className="text-sm">Image</span>
                </label>
              </div>
              <p className="my-3 flex items-center gap-1 italic text-gray-500">
                <Info size={18} />
                <span className="text-sm">
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
                        value={i + 1}
                        {...register("isCorrect")}
                      />
                      <Textarea
                        placeholder={`Enter ${["first", "second", "third", "fourth"][i]} answer`}
                        className="h-20 resize-none"
                      />
                    </div>
                  ))}
                </div>
              )}
              {answerTypeState === "image" && (
                <label className="grid grid-cols-2 gap-4">
                  <Input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    multiple
                    placeholder="Enter question here"
                    {...register(`answerPhoto`, {
                      validate: validateImages, // Use custom validation function
                    })}
                  />
                  {[...Array<number>(4)].map((_, i) => (
                    <div className="flex gap-1" key={i}>
                      <Input
                        type="radio"
                        className="size-[1.2rem]"
                        placeholder="Enter question language here"
                        value={i + 1}
                        {...register("isCorrect")}
                      />
                      <div className="relative flex h-36 w-full flex-col items-center justify-center rounded-sm border border-dashed border-gray-400 px-4 py-1 text-gray-500 sm:px-5">
                        {!imageSrc && (
                          <>
                            <CloudUpload
                              size={35}
                              className="-mb-2"
                              strokeWidth={1.5}
                            />
                            <span className="text-sm">Upload a photo</span>
                          </>
                        )}
                        {imageSrc && Array.isArray(imageSrc) && (
                          <Image
                            className="!relative"
                            src={imageSrc[i]!}
                            fill
                            objectFit="contain"
                            alt="sfd"
                          />
                        )}
                      </div>
                    </div>
                  ))}
                </label>
              )}
              {errors.answerPhoto && (
                <p className="text-red-500">{errors.answerPhoto.message}</p>
              )}
            </div>
          </div>
        </div>
        <Button size={"lg"} className="mt-5 h-12 w-fit" type="submit">
          Save Question
        </Button>
      </div>
    </form>
  );
};

export default AddNewQuestion;
