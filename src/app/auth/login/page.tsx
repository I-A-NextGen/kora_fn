"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { Eye, EyeOff } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/lib/redux/store";
import { userLoginReset } from "@/lib/redux/features/user/loginReducer";
import { useRouter } from "next/navigation";
import { PuffLoader, PulseLoader } from "react-spinners";
import { userLoginAction } from "@/lib/redux/actionCreators/authAction";
import AuthLoadingSkeleton from "../loading"

const schema = z.object({
  phoneNumber: z.string().trim().min(1, "Nomero ya terefoni ni ngombwa"),
  password: z.string().trim().min(1, "Ijambobanga ni ngombwa"),
});

const Page = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const {
    loading,
    error: userLoginError,
    userLoginData,
  } = useAppSelector((state) => state.userLogin);

  const { loading: authLoading, isAuth } = useAppSelector(
    (state) => state.userAuth,
  );

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onBlur",
  });

  interface FormData {
    phoneNumber: string;
    password: string;
  }

  const route = useRouter();

  useEffect(() => {
    if (userLoginData) {
      reset();
      toast.success(
        `Muraho, ${userLoginData.user.firstName.substring(0, 1).toUpperCase() + userLoginData.user.firstName.substring(1).toLowerCase()}!  Urakaza neza.`,
        { duration: Infinity },
      );
      dispatch(userLoginReset());
      route.push(
        `/${userLoginData.user.role === "admin" ? "admin" : "client"}/dashboard`,
      );
    }
    if (userLoginError) {
      toast.error(userLoginError);
      dispatch(userLoginReset());
    }
  }, [userLoginData, userLoginError]);

  const onSubmit = (data: FormData) => {
    dispatch(userLoginAction(data));
  };

  return authLoading || isAuth ? (
    <div className=" col-span-2 flex w-full flex-col items-center justify-center text-primary">
      <PuffLoader color="#1935ca" />
      <p>Ihangane akanya gato...</p>
    </div>
  ) : (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-[100%] flex-col gap-6 py-20 lg:col-start-2 lg:max-w-[29rem]"
    >
      <h3 className="text-primary">Injira muri konti yawe</h3>
      <p className="leading-5 text-primary">
        Uzuza imyirondoro yawe ahabugenewe
      </p>
      <div className="flex w-full flex-col justify-center gap-5 text-[.95rem]">
        <label className="flex flex-col">
          <span>Nimero ya terefoni</span>
          <Input
            type="text"
            placeholder="Andika Nimero yawe"
            {...register("phoneNumber")}
          />
          {errors.phoneNumber && (
            <p className="text-sm text-red-500">{errors.phoneNumber.message}</p>
          )}
        </label>
        <label className="relative flex flex-col">
          <span>Ijambobanga</span>
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Andika ijambobanga"
            {...register("password")}
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
          <Button
            disabled={loading}
            size={"lg"}
            className="h-12 w-full"
            type="submit"
          >
            {!loading && "Injira"}
            {loading && <PulseLoader size={10} color="#fff" margin={3} />}
          </Button>
          <span className="text-[.8rem] text-gray-500">Cyangwa</span>
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
