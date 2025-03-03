"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

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
  });

  interface FormData {
    phoneOrEmail: string;
    password: string;
  }

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <div className="grid h-screen grid-cols-2">
      <div className="relative bg-gradient-to-r from-blue-700 to-transparent p-56">
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
          <span>Nomero ya terefoni / Imeyiri</span>
          <Input
            type="text"
            placeholder="Andika Nomero / Imeyiri yawe"
            {...register("phoneOrEmail")}
          />
          {errors.phoneOrEmail && <p className="text-red-500">{errors.phoneOrEmail.message}</p>}
        </label>
        <label className="flex flex-col gap-2">
          <span>Ijambobanga</span>
          <Input
            type="password"
            placeholder="Andika ijambobanga"
            {...register("password")}
          />
          {errors.password && <p className="text-red-500">{errors.password.message}</p>}
        </label>
        <span>
          Wibagiwe ijambo banga? {" "}
          <Link href={"/auth/forgotpassword"} className="text-blue-700">
            Kanda hano.
          </Link>
        </span>
        <div className="flex items-center gap-4 mt-8 justify-center flex-col">
          <Button size="lg" className="w-full" type="submit">
            Injira
          </Button>
          or
          <Button size="lg" variant="outline" className="w-full">
            <Link href="/auth/signup">Kwiyandikisha</Link>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Page;
