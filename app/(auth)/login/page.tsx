"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import AuthLayout from "../_components/AuthLayout";
import { yupResolver } from "@hookform/resolvers/yup";
import AuthForm from "../_components/AuthForm";
import { Input } from "@/components/Input";
import { HiOutlineMail } from "react-icons/hi";
import { TfiLock } from "react-icons/tfi";
import { TiWarning } from "react-icons/ti";
import { LiaEye } from "react-icons/lia";
import { LiaEyeSlash } from "react-icons/lia";
import useLoginHandler from "./_hooks/useLoginHandler";
import { RedirectTo } from "../types/types";
import { loginSchema } from "../schemas/loginSchema";
import { useState } from "react";

export type LoginInputs = {
  login: string;
  password: string;
};

const LoginPage = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const {
    loginError,
    loginEmail,
    loginPassword,
    handleLogin,
    setLoginEmail,
    setLoginPassword,
    isLoggingIn,
  } = useLoginHandler();

  const {
    register,
    handleSubmit,
    formState: { errors, isLoading, isSubmitting: isFormSubmitting, isValidating },
  } = useForm<LoginInputs>({ resolver: yupResolver(loginSchema) });

  const onSubmit: SubmitHandler<LoginInputs> = (data) => {
    handleLogin(data);
  };

  const isFormBeingSubmitted = isLoading || isFormSubmitting || isValidating || isLoggingIn;

  return (
    <AuthLayout redirectTo={RedirectTo.signup}>
      <AuthForm
        buttonLabel="Log in"
        isSubmitting={isFormBeingSubmitted}
        onSubmit={handleSubmit(onSubmit)}
        error={loginError}
        title="Welcome back!"
        type="login">
        <div className="w-full">
          <Input
            {...register("login")}
            id="login"
            placeholder="Enter your work email"
            label="Work Email"
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
            className={errors.login && " border-red-500 hover:border-red-500 focus:border-red-500"}>
            <HiOutlineMail size={20} color={errors.login && "red"} />
          </Input>
          {errors.login ? (
            <div className="flex flex-row text-red-500 gap-1 items-center">
              <TiWarning />
              <p className="first-letter:capitalize text-xs font-semibold">
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
            id="password"
            label="Password"
            placeholder="Enter password"
            type={isShowPassword ? "text" : "password"}
            value={loginPassword}
            onChange={(e) => {
              setLoginPassword(e.target.value);
            }}
            className={`
              ${errors.password && "border-red-500 hover:border-red-500 focus:border-red-500"}
            `}>
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

export default LoginPage;
