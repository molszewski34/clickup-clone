import React, { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  shadow?: boolean;
  className?: string;
};

export const Button = ({ shadow = false, className, children }: ButtonProps) => {
  return (
    <button
      className={`flex flex-row items-center justify-center gap-3 bg-indigo-500 hover:bg-indigo-600 ${
        shadow ? "shadow-xl shadow-indigo-300" : ""
      } px-6 py-3 rounded-xl text-white font-extrabold ${className}`}>
      {children}
    </button>
  );
};
