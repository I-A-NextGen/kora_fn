"use client";

import type React from "react";

import { useState, useCallback, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { AlertCircle, Save } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import DashHeader from "./DashHeader";
import { useAppSelector } from "@/lib/redux/store";

const profileSchema = z
  .object({
    firstName: z.string().min(2, "First name must be at least 2 characters"),
    lastName: z.string().min(2, "Last name must be at least 2 characters"),
    phone: z
      .string()
      .regex(/^\+?[0-9\s\-()]{8,}$/, "Please enter a valid phone number"),
    email: z.string().email("Please enter a valid email").or(z.literal("")),
    currentPassword: z
      .string()
      .min(1, "Current password is required when changing password")
      .optional(),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .optional()
      .or(z.literal("")),
  })
  .refine(
    (data) => {
      if (data.password && !data.currentPassword) {
        return false;
      }
      return true;
    },
    {
      message: "Current password is required to change password",
      path: ["currentPassword"],
    },
  );
interface InfoCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}
interface FormInputs {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  currentPassword: string;
  password: string;
}

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  children,
  className = "",
}) => {
  return (
    <div
      className={`-6 overflow-hidden rounded-[15] bg-white py-[30] ${className}`}
    >
      <div className="mb-4 flex w-full items-center justify-between text-lg font-semibold tracking-[-0.54] text-black">
        <div>{title}</div>
      </div>
      {children}
    </div>
  );
};
const ErrorMessage = (message: string) => (
  <div className="mt-1 flex items-center gap-1 text-sm text-red-500">
    <AlertCircle className="h-4 w-4" />
    <span>{message}</span>
  </div>
);

export default function AccountProfile() {
  const { user } = useAppSelector((state) => state.userAuth);
  const [userData, setUserData] = useState({
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    phone: user?.phoneNumber || "",
    email: "",
  });
  const [formInputs, setFormInputs] = useState({
    firstName: userData.firstName,
    lastName: userData.lastName,
    phone: userData.phone,
    email: userData.email,
    currentPassword: "",
    password: "",
  });
  const [isFormModified, setIsFormModified] = useState(false);
  useEffect(() => {
    const hasChanged =
      formInputs.firstName !== userData.firstName ||
      formInputs.lastName !== userData.lastName ||
      formInputs.phone !== userData.phone ||
      formInputs.email !== userData.email ||
      formInputs.currentPassword !== "" ||
      formInputs.password !== "";

    setIsFormModified(hasChanged);
  }, [formInputs, userData]);
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    currentPassword: "",
    password: "",
  });

  type HandleInputChange = (field: keyof FormInputs, value: string) => void;

  const handleInputChange: HandleInputChange = useCallback((field, value) => {
    setFormInputs((prev) => ({
      ...prev,
      [field]: value,
    }));
  }, []);
  const resetForm = useCallback(() => {
    setFormInputs({
      firstName: userData.firstName,
      lastName: userData.lastName,
      phone: userData.phone,
      email: userData.email,
      currentPassword: "",
      password: "",
    });
    setErrors({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      currentPassword: "",
      password: "",
    });
  }, [userData]);
  const saveAllChanges = useCallback(() => {
    try {
      const dataToValidate = { ...formInputs } as Partial<typeof formInputs>;
      if (dataToValidate.password === "") {
        delete dataToValidate.password;
        delete dataToValidate.currentPassword;
      }

      profileSchema.parse(dataToValidate);
      // Validate that the current password matches the stored password
      if (
        dataToValidate.currentPassword
      ) {
        throw new Error("Current password is incorrect");
      }
      setUserData({
        firstName: formInputs.firstName,
        lastName: formInputs.lastName,
        phone: formInputs.phone,
        email: formInputs.email,
      });
      setFormInputs((prev) => ({
        ...prev,
        currentPassword: "",
        password: "",
      }));
      setErrors({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        currentPassword: "",
        password: "",
      });

      toast.success(
        "Changes saved: Your profile has been updated successfully.",
      );
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors = {
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          currentPassword: "",
          password: "",
        };

        error.errors.forEach((err) => {
          if (err.path && typeof err.path[0] === "string") {
            const path = err.path[0] as keyof typeof newErrors;
            if (path in newErrors) {
              newErrors[path] = err.message;
            }
          }
        });

        setErrors(newErrors);
      } else if (error instanceof Error) {
        // Handle custom error for incorrect password
        setErrors((prev) => ({
          ...prev,
          currentPassword: error.message,
        }));
      }
      return false;
    }
  }, [formInputs, toast]);

  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-4">
      <DashHeader name={false} title="MY ACCOUNT" />

      <div className="rounded-2xl bg-white p-8 shadow-sm">
        <div className="flex min-h-[300] w-full items-center gap-4 text-center">
          <div className="my-auto flex w-full flex-1 flex-col items-center self-stretch py-8">
            <img
              src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user?._id}`}
              className="aspect-[1] h-[180] w-[180] rounded-full object-cover"
              alt={`${userData.firstName}'s profile picture`}
            />
            <div className="mt-4 flex w-full flex-col items-center">
              <h2 className="text-xl font-semibold text-black">
                {userData.firstName.toUpperCase()}{" "}
                {userData.lastName.toUpperCase()}
              </h2>
              <p className="text-lg font-normal tracking-[-0.54] text-[rgba(77,77,77,1)]">
                {user?.role}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 flex w-full flex-wrap items-stretch gap-8 max-md:mt-10">
          <div className="min-w-[300] flex-1">
            <InfoCard title="Personal Information">
              <div className="flex w-full pl-5 text-base font-normal tracking-[-0.48]">
                <div className="flex w-full flex-col gap-4">
                  <Label htmlFor="firstName" className="flex flex-col">
                    <span className="w-1/3">First Name</span>
                    <Input
                      id="firstName"
                      value={formInputs.firstName}
                      readOnly
                      onChange={(e) =>
                        handleInputChange("firstName", e.target.value)
                      }
                      className={`border-gray-300 ${errors.firstName ? "border-red-500" : ""}`}
                    />
                  </Label>
                  <Label htmlFor="lastName" className="flex flex-col">
                    <span className="w-1/3">Last Name</span>
                    <Input
                      id="lastName"
                      value={formInputs.lastName}
                      readOnly
                      onChange={(e) =>
                        handleInputChange("lastName", e.target.value)
                      }
                      className={`border-gray-300 ${errors.lastName ? "border-red-500" : ""}`}
                    />
                  </Label>
                  <Label htmlFor="phone" className="flex flex-col">
                    <span className="w-1/3">phone</span>
                    <Input
                      id="phone"
                      value={formInputs.phone}
                      readOnly
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      className={`border-gray-300 ${errors.phone ? "border-red-500" : ""}`}
                      type="tel"
                    />
                  </Label>
                </div>
              </div>
            </InfoCard>

            {/* <InfoCard title="Email" className="max-md:mt-10">
              <div className="w-full pl-5 text-base font-normal tracking-[-0.48]">
                  <Label htmlFor="email" className="flex flex-col">
                    <span className="w-1/3">Email</span>
                    <Input
                      id="email"
                      type="email"
                      value={formInputs.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      className={`border-gray-300 ${errors.email ? "border-red-500" : ""}`}
                      placeholder="Enter email address"
                    />
                  </Label>
              </div>
            </InfoCard> */}
          </div>
          {user?.role === "client" && (
            <div className="flex-1">
              <InfoCard title="Your Package">
                <div className="flex w-full flex-col items-start gap-4 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-5 sm:pl-5">
                  <div className="flex w-full items-start gap-3 text-xl font-medium text-black sm:w-auto">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/5cbdc5e9c88b38426e9eb090a47aee70e8ed3958?placeholderIfAbsent=true"
                      className="w-7 shrink-0 object-contain sm:w-8"
                      alt="Exam icon"
                    />
                    <div className="flex flex-col">
                      <div className="flex flex-wrap items-center gap-1">
                        <span className="font-normal">Ibizami usigaranye:</span>
                        <span>{user?.plan.exams}</span>
                      </div>
                      <div className="text-sm font-normal text-gray-500">
                        Bizarangira:{" "}
                        {new Date(
                          user?.plan.expires ?? "",
                        ).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                  <Button
                    className="mt-2 w-full px-4 text-center sm:mt-0 sm:w-auto sm:px-8"
                    aria-label="Upgrade package"
                  >
                    <span className="my-auto self-stretch">Upgrade</span>
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/d04adfe82e2a142bfe890af815bdff7f5f3a7855?placeholderIfAbsent=true"
                      className="my-auto aspect-square shrink-0 self-stretch object-contain"
                      alt="Upgrade icon"
                    />
                  </Button>
                </div>
              </InfoCard>

              {/* <InfoCard title="Security" className="max-md:mt-10">
              <div className="flex w-full flex-col items-stretch justify-center pl-5 font-normal">
                <div className="mb-4">
                  <Label
                    htmlFor="current-password"
                    className="flex min-h-7 w-[130] max-w-full items-center gap-2 whitespace-nowrap text-base tracking-[-0.48] text-black"
                  >
                    Current Password
                  </Label>
                  <div className="mt-2">
                    <Input
                      id="current-password"
                      type="password"
                      value={formInputs.currentPassword}
                      onChange={(e) =>
                        handleInputChange("currentPassword", e.target.value)
                      }
                      className={`border-solid border-gray-300 ${errors.currentPassword ? "border-red-500" : ""}`}
                      placeholder="Enter current password"
                    />
                    {errors.currentPassword && (
                      <div className="mt-1 flex items-center gap-1 text-sm text-red-500">
                        <AlertCircle className="h-4 w-4" />
                        <span>{errors.currentPassword}</span>
                      </div>
                    )}
                  </div>
                </div>

                {formInputs.currentPassword && (
                  <div>
                    <Label
                      htmlFor="new-password"
                      className="flex min-h-7 w-[130] max-w-full items-center gap-2 whitespace-nowrap text-base tracking-[-0.48] text-black"
                    >
                      New Password
                    </Label>
                    <div className="mt-2">
                      <Input
                        id="new-password"
                        type="password"
                        value={formInputs.password}
                        onChange={(e) =>
                          handleInputChange("password", e.target.value)
                        }
                        className={`border-solid border-gray-300 ${errors.password ? "border-red-500" : ""}`}
                        placeholder="Enter new password"
                      />
                      {!errors.password && formInputs.password && (
                        <div className="mt-1 text-xs text-gray-500">
                          Password must be at least 8 characters with uppercase,
                          lowercase, and numbers
                        </div>
                      )}
                      {errors.password && (
                        <div className="mt-1 flex items-center gap-1 text-sm text-red-500">
                          <AlertCircle className="h-4 w-4" />
                          <span>{errors.password}</span>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </InfoCard> */}
            </div>
          )}
        </div>
        {/* <div className="mt-8 flex justify-end gap-4">
          <Button
            variant="outline"
            onClick={resetForm}
            disabled={!isFormModified}
            className="-6"
          >
            Cancel
          </Button>
          <Button
            onClick={saveAllChanges}
            disabled={!isFormModified}
            className="bg-blue-700 hover:bg-blue-500"
          >
            <Save className="mr-2 h-4 w-4" />
            Save All Changes
          </Button>
        </div> */}
      </div>
    </div>
  );
}
