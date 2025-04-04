"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Goback from "@/components/GoBack";
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
    mode: "onBlur",
  });

  interface FormData {
    phoneOrEmail: string;
  }

  const onSubmit = (data: FormData) =>
    toast.success(`Link is sent to your email!`);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-[100%] flex-col gap-6 py-20 lg:col-start-2 lg:max-w-[29rem]"
    >
      <h3 className="text-primary">Wibagiwe ijambobanga ?</h3>
      <p className="leading-5 text-primary">
        Uzuza imyirondoro yawe ahabugenewe
      </p>
      <div className="flex w-full flex-col justify-center gap-4 text-[.95rem]">
        <label className="flex flex-col">
          <span>Nomero ya terefoni / Imeyiri</span>
          <Input
            type="text"
            placeholder="Andika Nomero / Imeyiri yawe"
            {...register("phoneOrEmail")}
          />
          {errors.phoneOrEmail && (
            <p className="text-xs text-red-400">
              {errors.phoneOrEmail.message}
            </p>
          )}
        </label>
        <div className="mt-8 flex flex-col items-center justify-center gap-2">
          <Button size="lg" className="h-12 w-full text-base" type="submit">
            Hindura Ijambobanga
          </Button>
          <span className="text-[.8rem] text-gray-500">Cyangwa</span>
          <Link className="w-full" href={"/auth/login"}>
            <Button
              size={"lg"}
              variant={"outline"}
              className="h-12 w-full border-primary bg-primary/15 text-base text-primary"
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
