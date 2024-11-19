import React, { ReactNode } from "react";

type InputProps = {
  label?: string;
  children?: ReactNode;
  id: string;
  placeholder?: string;
};

export const Input = ({ label, children, id, placeholder }: InputProps) => {
  return (
    <div className="flex flex-col w-full">
      <label className="text-xs text-gray-700 font-semibold py-2" htmlFor={id}>
        {label}
      </label>
      <div className="relative flex flex-row">
        <div className="absolute h-full flex items-center left-3 text-gray-400">{children}</div>
        <input
          id={id}
          placeholder={placeholder}
          className="w-full border hover:border-gray-400 p-2.5 pl-10 rounded-xl active:border focus:ring-0 focus:outline-0 focus:border-gray-400"
          type="text"></input>
      </div>
    </div>
  );
};
