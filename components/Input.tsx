import React, { HTMLInputTypeAttribute, ReactNode, forwardRef } from "react";

type InputProps = {
  label?: string;
  children?: ReactNode;
  id: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  value: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { label, children, id, placeholder, type, value, onChange, className, ...props }: InputProps,
    ref
  ) => {
    Input.displayName = "Input";

    return (
      <div className="flex flex-col w-full">
        <label className="text-xs text-gray-700 font-semibold py-2" htmlFor={id}>
          {label}
        </label>
        <div className="relative flex flex-row">
          <div className="absolute h-full flex items-center left-3 text-gray-400">{children}</div>
          <input
            ref={ref}
            id={id}
            placeholder={placeholder}
            className={`
              w-full border hover:border-gray-400 p-2.5 pl-10 rounded-xl active:border focus:ring-0 focus:outline-0 focus:border-gray-400 ${className}`}
            type={type}
            value={value}
            onChange={onChange}
            {...props}></input>
        </div>
      </div>
    );
  }
);
