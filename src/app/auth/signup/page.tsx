"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { useAppDispatch, useAppSelector } from "@/lib/redux/store";
import {
  userRegisterationAction,
  UserRegistrationData,
} from "@/lib/redux/actionCreators/authAction";
import { userRegistrationReset } from "@/lib/redux/features/user/registerReducer";
import { PuffLoader, PulseLoader } from "react-spinners";
import { redirect, useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";

const schema = z
  .object({
    firstName: z.string().trim().min(3, "Izina rigomba kuba nibura inyuguti 3"),
    lastName: z.string().trim().min(3, "Izina rigomba kuba nibura inyuguti 3"),
    phoneNumber: z
      .string()
      .regex(/^\d{10}$/, "Nomero ya telefoni igomba kugira imibare 10"),
    password: z
      .string()
      .regex(/^\S.*\S$/, "Imyanya imbere ninyuma ntabwo yemewe")
      .min(6, "Ijambobanga rigomba kugira inyuguti nibura 6"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Ijambo banga ntago risa ni rya mbere.",
    path: ["confirmPassword"],
  });

const Page = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema), mode: "onChange" });
  const dispatch = useAppDispatch();
  const {
    loading,
    error: userRegistrationError,
    userRegistrationData,
  } = useAppSelector((state) => state.userRegistration);

  const { loading: authLoading, isAuth } = useAppSelector(
    (state) => state.userAuth,
  );

  const route = useRouter();
  useEffect(() => {
    if (userRegistrationData) {
      reset();
      toast.success(userRegistrationData.message);
      dispatch(userRegistrationReset());
      route.push("/auth/login");
    }
    if (userRegistrationError) {
      toast.error(userRegistrationError);
      dispatch(userRegistrationReset());
    }
  }, [userRegistrationData, userRegistrationError]);

  const onSubmit = async (data: UserRegistrationData) => {
    await dispatch(userRegisterationAction(data));
  };

  return authLoading || isAuth ? (
    <div className="col-span-2 flex w-full flex-col items-center justify-center text-primary">
      <PuffLoader color="#1935ca" />
      <p>Ihangane akanya gato...</p>
    </div>
  ) : (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="g-red-200 flex w-[100%] flex-col gap-6 py-32 lg:col-start-2 lg:max-w-[29rem]"
    >
      <h3 className="text-primary">Kwiyandikisha</h3>
      <p className="leading-5 text-primary">
        Iyandikishe ubone amahirwe yo kwiga amategeko y’umuhanda!
      </p>
      <div className="flex w-full flex-col justify-center gap-4 text-[.95rem]">
        <label className="flex flex-col">
          <span>Izina ryambere</span>
          <Input
            type="text"
            {...register("firstName")}
            placeholder="Andika izina ryawe ryambere"
          />
          {errors.firstName && (
            <p className="text-xs text-red-400">{errors.firstName.message}</p>
          )}
        </label>
        <label className="flex flex-col">
          <span>Izina ry&lsquo;umuryango </span>
          <Input
            type="text"
            {...register("lastName")}
            placeholder="Andika izina ryawe ry'umuryango"
          />
          {errors.lastName && (
            <p className="text-xs text-red-400">{errors.lastName.message}</p>
          )}
        </label>
        <label className="flex flex-col">
          <span>Nomero ya telefone</span>
          <Input
            type="tel"
            {...register("phoneNumber")}
            placeholder="Andika nomero yawe"
          />
          {errors.phoneNumber && (
            <p className="text-xs text-red-500">{errors.phoneNumber.message}</p>
          )}
        </label>

        <label className="relative flex flex-col">
          <span>Ijambobanga</span>
          <Input
            type={showPassword ? "text" : "password"}
            {...register("password")}
            placeholder="Andika ijambobanga"
          />
          {showPassword ? (
            <EyeOff
              size={22}
              strokeWidth={1.4}
              onClick={() => setShowPassword(false)}
              className="absolute right-4 top-[1.9rem] cursor-pointer text-gray-500 md:top-[2.2rem]"
            />
          ) : (
            <Eye
              size={22}
              strokeWidth={1.4}
              onClick={() => setShowPassword(true)}
              className="absolute right-4 top-[1.9rem] cursor-pointer text-gray-500 md:top-[2.2rem]"
            />
          )}
          {errors.password && (
            <p className="text-xs text-red-500">{errors.password.message}</p>
          )}
        </label>
        <label className="relative flex flex-col">
          <span>Emeza Ijambobanga</span>
          <Input
            type={showConfirmPassword ? "text" : "password"}
            {...register("confirmPassword")}
            placeholder="Subiramo ijambobanga"
          />
          {showConfirmPassword ? (
            <EyeOff
              size={22}
              strokeWidth={1.4}
              onClick={() => setShowConfirmPassword(false)}
              className="absolute right-4 top-[1.9rem] cursor-pointer text-gray-500 md:top-[2.2rem]"
            />
          ) : (
            <Eye
              size={22}
              strokeWidth={1.4}
              onClick={() => setShowConfirmPassword(true)}
              className="absolute right-4 top-[1.9rem] cursor-pointer text-gray-500 md:top-[2.2rem]"
            />
          )}
          {errors.confirmPassword && (
            <p className="text-xs text-red-500">
              {errors.confirmPassword.message}
            </p>
          )}
        </label>
        <div className="mt-8 flex flex-col items-center justify-center gap-2">
          <Button
            disabled={loading}
            size={"lg"}
            className="h-12 w-full text-base"
            type="submit"
          >
            {!loading && "Iyandikishe"}
            {loading && <PulseLoader size={10} color="#fff" margin={3} />}
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
