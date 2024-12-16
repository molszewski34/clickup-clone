import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const WidgetHeader = ({ children, className = "" }: Props) => {
  return (
    <div
      className={`h-[49px] p-2 flex items-center  transition-all duration-500 ease-in-out
         text-darkGray_600 bg-white border-gray_50 border-b  font-sans text-sm 
         ${className}`}
    >
      {children}
    </div>
  );
};

export default WidgetHeader;
