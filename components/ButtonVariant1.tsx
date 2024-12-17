import React from "react";

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  isActive?: boolean;
};

const ButtonVariant1: React.FC<Props> = ({
  children,
  onClick,
  isActive = false,
}) => {
  return (
    <div
      className={` h-full flex items-center
     ${isActive ? "border-b-2 border-b-darkGray_600" : ""}`}
    >
      <button
        onClick={onClick}
        className={`capitalize flex gap-1 px-2 py-1 rounded-md  transition-colors ease-in-out  cursor-pointer
          hover:bg-white_100 hover:text-darkGray_600 active:bg-gray_50 active:text-darkGray_600
          ${isActive ? "text-darkGray_600" : ""}`}
      >
        {children}
      </button>
    </div>
  );
};

export default ButtonVariant1;
