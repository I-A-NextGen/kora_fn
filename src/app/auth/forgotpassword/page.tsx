"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Goback from "@/components/Goback";
import { toast } from "sonner";

const schema = z.object({
  phoneOrEmail: z
    .string()
    .min(1, "Nomero ya terefoni cyangwa imeri ni ngombwa"),
});

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    mode:"onBlur"
  });

  interface FormData {
    phoneOrEmail: string;
  }

  const onSubmit = (data: FormData) => 
    toast.success(`Link is sent to your email!`);

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
        <h1 className="text-blue-700">Wibagiwe ijambobanga ?</h1>
        <label className="flex flex-col gap-2">
          <span>Nomero ya terefoni / Imeyiri</span>
          <Input
            type="text"
            placeholder="Andika Nomero / Imeyiri yawe"
            {...register("phoneOrEmail")}
          />
          {errors.phoneOrEmail && <p className="text-red-500">{errors.phoneOrEmail.message}</p>}
        </label>
        <div className="flex items-center gap-4 mt-8 justify-center flex-col">
          <Button size="lg" className="w-full" type="submit">
          Hindura Ijambobanga
          </Button>
          or
          <Button size="lg" variant="outline" className="w-full">
            <Link href="/auth/login">Hagarika igikorwa</Link>
          </Button>
        </div>
      </form>
    </div>
  );
};
export default Page;
