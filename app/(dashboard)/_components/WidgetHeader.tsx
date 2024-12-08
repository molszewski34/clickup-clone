import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const WidgetHeader = ({ children, className = "p-2" }: Props) => {
  return (
    <div
      className={`h-[49px] flex items-center  transition-all duration-500 ease-in-out
         text-white_100 bg-nav border-gray_100 border-b dark:bg-darkGray_600 font-sans text-sm 
         ${className}`}
    >
      {children}
    </div>
  );
};

export default WidgetHeader;
