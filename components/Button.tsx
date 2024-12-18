"use client";

import React, { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  shadow?: boolean;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | (() => void);
  type?: "button" | "submit" | "reset";
  color?: "indigo" | "gray";
  disabled?: boolean;
  key?: string;
};

const colors = {
  indigo: "bg-indigo-500 text-white hover:bg-indigo-600",
  gray: "bg-white text-gray-500 hover:bg-gray-200 border",
};

export const Button = ({
  shadow = false,
  className,
  children,
  onClick,
  type = "button",
  color,
  disabled,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={` 
      flex flex-row items-center justify-center gap-3 rounded-lg px-2 py-1 
        ${shadow ? "shadow-xl shadow-indigo-300" : ""}
        ${disabled ? "cursor-not-allowed bg-opacity-50 hover:bg-opacity-50" : ""}
        ${color ? colors[color] : ""}
        ${className}
        `}
      type={type}
      disabled={disabled}>
      {children}
    </button>
  );
};
