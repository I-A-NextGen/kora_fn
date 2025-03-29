"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useParams } from "next/navigation";
import { toast } from "sonner";
import GoBack from "@/components/GoBack";

const schema = z
  .object({
    newPassword: z
      .string()
      .min(6, "Ijambobanga rigomba kuba nibura inyuguti 6"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Ijambobanga ntirihuye",
    path: ["confirmPassword"],
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
    newPassword: string;
    confirmPassword: string;
  }

  const onSubmit = (data: FormData) => {
    toast.success(`ijambobanga ryahinduwe neza`);
  };
  const { id } = useParams();

  return (
    <div className="grid h-screen grid-cols-2">
      <div className="relative bg-gradient-to-r from-blue-700 to-transparent p-56">
        <GoBack className="absolute left-8 top-8 bg-blue-50 text-blue-700" />

        <Image
          src={"/Traffic Light.png"}
          alt="Traffic Light"
          width={800}
          height={800}
          className="object-contain"
        />
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center gap-4 p-32"
      >
        <h1 className="text-blue-700">Hindura ijambobanga</h1>
        <p>Please create a new password</p>

        <label className="flex flex-col gap-2">
          <span>Ijambobanga rishya</span>
          <Input
            type="password"
            placeholder="Andika ijambobanga rishya"
            {...register("newPassword")}
          />
          {errors.newPassword && (
            <p className="text-red-500">{errors.newPassword.message}</p>
          )}
        </label>

        <label className="flex flex-col gap-2">
          <span>Ongera wandike ijambobanga</span>
          <Input
            type="password"
            placeholder="Ongera wandike ijambobanga"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <p className="text-red-500">{errors.confirmPassword.message}</p>
          )}
        </label>

        <div className="mt-8 flex flex-col items-center justify-center gap-4">
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
