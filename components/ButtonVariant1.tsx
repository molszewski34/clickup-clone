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
     ${isActive ? "border-b-2 border-b-blue-600" : ""}`}
    >
      <button
        onClick={onClick}
        className="capitalize flex gap-1 px-2 py-1 rounded-md hover:bg-darkGray_400 hover:text-white_100 transition-colors ease-in-out active:bg-darkGray_300 active:text-white_100 cursor-pointer"
      >
        {children}
      </button>
    </div>
  );
};

export default ButtonVariant1;
