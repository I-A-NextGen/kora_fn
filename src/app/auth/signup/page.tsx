"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Goback from "@/components/Goback";
import { toast } from "sonner";
import AuthBg from "@/components/AuthBg";

const schema = z.object({
  name: z.string().min(2, "Amazina agomba kuba nibura inyuguti 2"),
  phone: z
    .string()
    .regex(/^\d{10}$/, "Nomero ya terefoni igomba kugira imibare 10"),
  email: z.string().email("Shyiramo imeri yemewe"),
  password: z.string().min(6, "Ijambobanga rigomba kugira inyuguti nibura 6"),
});

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema), mode: "onBlur" });

  interface FormData {
    name: string;
    phone: string;
    email: string;
    password: string;
  }

  const onSubmit = (data: FormData) => {
    console.log(data);
    toast.success(`Welcome Back, ${data.name}!`);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-[100%] flex-col gap-6 lg:col-start-2 lg:max-w-[30rem] py-32"
    >
      <h3 className="text-primary">Kwiyandikisha</h3>
      <p className="leading-5 text-primary">
        Iyandikishe ubone amahirwe yo kwiga amategeko y’umuhanda!
      </p>
      <div className="flex w-full flex-col justify-center gap-5 text-[.95rem]">
        <label className="flex flex-col">
          <span>Amazina </span>
          <Input type="text" {...register("name")} placeholder="Amazina yawe" />
          {errors.name && (
            <p className="text-xs text-red-400">{errors.name.message}</p>
          )}
        </label>

        <label className="flex flex-col">
          <span>Nomero ya terefone </span>
          <Input
            type="tel"
            {...register("phone")}
            placeholder="Andika nomero yawe"
          />
          {errors.phone && (
            <p className="text-xs text-red-500">{errors.phone.message}</p>
          )}
        </label>

        <label className="flex flex-col">
          <span>Imeyiri </span>
          <Input
            type="email"
            {...register("email")}
            placeholder="Andika Imeyiri yawe"
          />
          {errors.email && (
            <p className="text-xs text-red-500">{errors.email.message}</p>
          )}
        </label>

        <label className="flex flex-col">
          <span>Ijambobanga</span>
          <Input
            type="password"
            {...register("password")}
            placeholder="Andika ijambobanga"
          />
          {errors.password && (
            <p className="text-xs text-red-500">{errors.password.message}</p>
          )}
        </label>
        <div className="mt-8 flex flex-col items-center justify-center gap-2">
          <Button size={"lg"} className="h-12 w-full" type="submit">
            Iyandikishe
          </Button>
          <span>Or</span>
          <Link className="w-full" href={"/auth/login"}>
            <Button
              size={"lg"}
              variant={"outline"}
              className="h-12 w-full border-primary bg-primary/15 text-primary"
            >
              Injira
            </Button>
          </Link>
        </div>
      </div>
    </form>
  );
};

export default Page;
