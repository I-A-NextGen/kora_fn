"use client"

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

const schema = z.object({
  name: z.string().min(2, "Amazina agomba kuba nibura inyuguti 2"),
  phone: z.string().regex(/^\d{10}$/, "Nomero ya terefoni igomba kugira imibare 10"),
  email: z.string().email("Shyiramo imeri yemewe"),
  password: z.string().min(6, "Ijambobanga rigomba kugira inyuguti nibura 6"),
});

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },

  } = useForm({ resolver: zodResolver(schema),mode:"onBlur" });

  interface FormData {
    name: string;
    phone: string;
    email: string;
    password: string;
  }

  const onSubmit = (data: FormData) => {
    console.log(data);
    toast.success(`Welcome Back, ${data.name}!`)
  };

  return (
    <div className="grid h-screen grid-cols-2">
      <div className="relative bg-gradient-to-r from-blue-700 to-transparent p-56">
      <Goback className="absolute left-8 top-8 bg-blue-50 text-blue-700" />

        <Image
          src={"/Traffic Light.png"}
          alt=""
          width={800}
          height={800}
          className="object-contain"
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center gap-4 p-32">
        <h1 className="text-blue-700">Injira muri konti yawe</h1>
        <p className="text-blue-700/60">Uzuza imyirondoro yawe ahabugenewe</p>
        
        <label className="flex flex-col gap-2">
          <span>Amazina </span>
          <Input type="text" {...register("name")} placeholder="Amazina yawe" />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </label>

        <label className="flex flex-col gap-2">
          <span>Nomero ya terefoni </span>
          <Input type="tel" {...register("phone")} placeholder="Andika nomero yawe" />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
        </label>

        <label className="flex flex-col gap-2">
          <span>Imeyiri </span>
          <Input type="email" {...register("email")} placeholder="Andika Imeyiri yawe" />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </label>

        <label className="flex flex-col gap-2">
          <span>Ijambobanga</span>
          <Input type="password" {...register("password")} placeholder="Andika ijambobanga" />
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
        </label>

        <span>
          Wibagiwe ijambo banga? <Link href={"/auth/forgotpassword"} className="text-blue-700">Kanda hano.</Link>
        </span>

        <div className="flex items-center gap-4 mt-8 justify-center flex-col">
          <Button size={"lg"} className="w-full" type="submit">Injira</Button>
          or
          <Button size={"lg"} variant={"outline"} className="w-full">
            <Link href={"/auth/login"}>kwinjira</Link>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Page;