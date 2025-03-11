"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";

const schema = z.object({
  phoneOrEmail: z
    .string()
    .min(1, "Nomero ya terefoni cyangwa imeri ni ngombwa"),
  password: z.string().min(6, "Ijambobanga rigomba kugira inyuguti nibura 6"),
});

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onBlur",
  });

  interface FormData {
    phoneOrEmail: string;
    password: string;
  }

  const onSubmit = (data: FormData) => {
    console.log(data);
    toast.success(`Welcome Back, ${data.phoneOrEmail}!`);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-[100%] flex-col gap-6 lg:col-start-2 lg:max-w-[30rem]"
    >
      <h3 className="text-primary">Injira muri konti yawe</h3>
      <p className="leading-5 text-primary">
        Uzuza imyirondoro yawe ahabugenewe
      </p>
      <div className="flex w-full flex-col justify-center gap-5 text-[.95rem]">
        <label className="flex flex-col">
          <span>Nomero ya terefoni / Imeyiri</span>
          <Input
            type="text"
            placeholder="Andika Nomero / Imeyiri yawe"
            {...register("phoneOrEmail")}
          />
          {errors.phoneOrEmail && (
            <p className="text-sm text-red-500">
              {errors.phoneOrEmail.message}
            </p>
          )}
        </label>
        <label className="flex flex-col">
          <span>Ijambobanga</span>
          <Input
            type="password"
            placeholder="Andika ijambobanga"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-sm text-red-500">{errors.password.message}</p>
          )}
        </label>
        <p>
          <span>Wibagiwe ijambo banga? </span>
          <Link href={"/auth/forgotpassword"} className="text-blue-700">
            Kanda hano.
          </Link>
        </p>
        <div className="mt-5 flex flex-col items-center justify-center gap-2">
          <Button size={"lg"} className="h-12 w-full" type="submit">
            Injira
          </Button>
          <span>Or</span>
          <Link className="w-full" href={"/auth/signup"}>
            <Button
              size={"lg"}
              variant={"outline"}
              className="h-12 w-full border-primary bg-primary/15 text-primary"
            >
              Iyandikishe
            </Button>
          </Link>
        </div>
      </div>
    </form>
  );
};

export default Page;
