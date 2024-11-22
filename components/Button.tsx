"use client";

import React, { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  shadow?: boolean;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | (() => void);
  type?: "button" | "submit" | "reset";
};

export const Button = ({
  shadow = false,
  className,
  children,
  onClick,
  type = "button",
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`flex flex-row min-w-28 items-center justify-center gap-3 bg-indigo-500 hover:bg-indigo-600 ${
        shadow ? "shadow-xl shadow-indigo-300" : ""
      } px-6 py-3 rounded-xl text-white font-extrabold ${className}`}
      type={type}>
      {children}
    </button>
  );
};
