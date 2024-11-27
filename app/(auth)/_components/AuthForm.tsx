import React, { ReactNode } from "react";
import LogInWithGoogle from "./LogInWithGoogle";
import { TiWarning } from "react-icons/ti";
import { Button } from "@/components/Button";
import Loader from "@/components/Loader";

type AuthFormProps = {
  title?: string;
  onSubmit?: () => void;
  error?: string;
  children?: ReactNode;
  buttonLabel?: string;
  isSubmitting?: boolean;
  type: "login" | "signup";
};

const AuthForm = ({
  title,
  onSubmit,
  error,
  children,
  buttonLabel,
  isSubmitting,
  type,
}: AuthFormProps) => {
  return (
    <form className="flex flex-col gap-1 w-full h-full items-center" onSubmit={onSubmit}>
      <h1 className="text-4xl font-bold text-gray-700 mb-3">{title}</h1>
      <LogInWithGoogle />
      <div className="flex flex-row w-full gap-2">
        <div className="flex h-[1px] w-full bg-gray-300 mt-2.5"></div>
        <p className="text-gray-400 text-sm">OR</p>
        <div className="flex h-[1px] w-full bg-gray-300 mt-2.5"></div>
      </div>
      {children}
      {error ? (
        <div className="flex flex-row text-red-500 gap-1 items-center">
          <TiWarning />
          <p className="first-letter:capitalize text-sm font-semibold">{error}</p>
        </div>
      ) : (
        <div className="p-2.5"></div>
      )}
      <Button
        className="flex justify-end w-full h-14 mt-3"
        type="submit"
        disabled={isSubmitting}
        key={type}>
        <div className="w-8 -ml-11">{isSubmitting && <Loader />}</div>
        {buttonLabel}
      </Button>
    </form>
  );
};

export default AuthForm;
