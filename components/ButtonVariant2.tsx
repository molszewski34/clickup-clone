import React from "react";

type Props = {
  children: React.ReactNode;
  isLineBefore?: boolean | null;
  onClick?: () => void;
  isActive?: boolean;
  className?: string;
};

const ButtonVariant2: React.FC<Props> = ({
  children,
  isLineBefore = false,
  onClick,
  isActive = false,
  className,
}) => {
  const line = `ml-[14px] relative before:content-[""] before:absolute before:-left-[9px] before:font-thin before:bg-darkGray_400 before:w-[1px] before:h-4 before:flex-shrink-0`;
  return (
    <div
      className={`h-full flex items-center
    ${isLineBefore ? line : ""}`}
    >
      <button
        onClick={onClick}
        className={` capitalize flex gap-1 px-2 py-1 rounded-md hover:bg-darkGray_400 cursor-pointer transition-colors ease-in-out active:bg-darkGray_300
            ${isActive ? "bg-darkGray_300" : ""} ${className}`}
      >
        {children}
      </button>
    </div>
  );
};

export default ButtonVariant2;
