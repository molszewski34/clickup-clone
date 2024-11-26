"use client";

import { HiOutlineMail } from "react-icons/hi";
import { TfiLock } from "react-icons/tfi";
import { TiWarning } from "react-icons/ti";
import { LiaEye } from "react-icons/lia";
import { LiaEyeSlash } from "react-icons/lia";
import { BiUser } from "react-icons/bi";
import { Input } from "@/components/Input";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import AuthLayout from "../_components/AuthLayout";
import AuthForm from "../_components/AuthForm";
import useSignUpHandler from "./_hooks/useSignUpHandler";
import { signupSchema } from "../schemas/signupSchema";
import { RedirectTo } from "../types/types";
import { useState } from "react";

export type SignupInputs = {
  fullName: string;
  login: string;
  password: string;
};

const SignupPage = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const {
    signUpFullName,
    setSignUpFullName,
    signUpEmail,
    setSignUpEmail,
    signUpPassword,
    setSignUpPassword,
    signUpError,
    handleRegister,
    isSigningUp,
  } = useSignUpHandler();

  const {
    register,
    handleSubmit,
    formState: { errors, isLoading, isSubmitting, isValidating },
  } = useForm<SignupInputs>({ resolver: yupResolver(signupSchema) });

  const onSubmit: SubmitHandler<SignupInputs> = (data) => {
    handleRegister(data);
  };

  const isFormBeingSubmitted = isLoading || isSubmitting || isValidating || isSigningUp;

  return (
    <AuthLayout redirectTo={RedirectTo.login}>
      <AuthForm
        buttonLabel="Sign up"
        title="Seconds to sign up!"
        isSubmitting={isFormBeingSubmitted}
        onSubmit={handleSubmit(onSubmit)}
        error={signUpError}
        type="signup">
        <div className="w-full">
          <Input
            {...register("fullName")}
            id="fullName"
            placeholder="John Doe"
            label="Full Name"
            value={signUpFullName}
            onChange={(e) => setSignUpFullName(e.target.value)}
            className={
              errors.fullName && "border-red-500 hover:border-red-500 focus:border-red-500"
            }>
            <BiUser size={20} color={errors.fullName && "red"} />
          </Input>
          {errors.fullName ? (
            <div className="flex flex-row text-red-500 gap-1">
              <TiWarning />
              <p className="first-letter:capitalize text-xs  font-semibold">
                {errors.fullName.message}!
              </p>
            </div>
          ) : (
            <div className="p-2"></div>
          )}
        </div>
        <div className="w-full">
          <Input
            {...register("login")}
            id="login-email"
            placeholder="Enter your work email"
            label="Work Email"
            value={signUpEmail}
            onChange={(e) => setSignUpEmail(e.target.value)}
            className={errors.login && "border-red-500 hover:border-red-500 focus:border-red-500"}>
            <HiOutlineMail size={20} color={errors.login && "red"} />
          </Input>
          {errors.login ? (
            <div className="flex flex-row text-red-500 gap-1">
              <TiWarning />
              <p className="first-letter:capitalize text-xs  font-semibold">
                {errors.login.message}!
              </p>
            </div>
          ) : (
            <div className="p-2"></div>
          )}
        </div>
        <div className="w-full">
          <Input
            {...register("password")}
            id="login-password"
            label="Password"
            placeholder="Enter password"
            type={isShowPassword ? "text" : "password"}
            value={signUpPassword}
            onChange={(e) => setSignUpPassword(e.target.value)}
            className={
              errors.password && " border-red-500 hover:border-red-500 focus:border-red-500"
            }>
            <div className="flex flex-row justify-between w-full">
              <TfiLock color={errors.password && "red"} />
              {isShowPassword ? (
                <LiaEyeSlash
                  className="pointer-events-auto cursor-pointer text-gray-600"
                  onClick={() => setIsShowPassword(false)}
                />
              ) : (
                <LiaEye
                  className="pointer-events-auto cursor-pointer text-gray-600"
                  onClick={() => setIsShowPassword(true)}
                />
              )}
            </div>
          </Input>
          {errors.password ? (
            <div className="flex flex-row text-red-500 gap-1">
              <TiWarning />
              <p className="first-letter:capitalize text-xs  font-semibold">
                {errors.password.message}!
              </p>
            </div>
          ) : (
            <div className="p-2"></div>
          )}
        </div>
      </AuthForm>
    </AuthLayout>
  );
};

export default SignupPage;
