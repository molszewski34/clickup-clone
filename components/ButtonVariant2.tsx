import React from "react";
type VariantType = "primary" | "secendary";
type Props = {
  children: React.ReactNode;
  isLineBefore?: boolean | null;
  onClick?: () => void;
  isActive?: boolean;
  className?: string;
  variant?: VariantType;
};

const ButtonVariant2: React.FC<Props> = ({
  children,
  isLineBefore = false,
  onClick,
  isActive = false,
  className,
  variant = "primary",
}) => {
  const Variants: Record<VariantType, string> = {
    primary: `${
      isActive && "bg-darkGray_300"
    } text-gray_400 active:bg-darkGray_300 hover:bg-darkGray_400`,
    secendary: `${
      isActive && "bg-darkBlue_600"
    } text-blue_400  hover:bg-darkBlue_600 active:bg-darkBlue_600`,
  };
  const line = `ml-[14px] relative before:content-[""] before:absolute before:-left-[9px] before:font-thin before:bg-darkGray_400 before:w-[1px] before:h-4 before:flex-shrink-0`;
  return (
    <div
      className={`h-full flex items-center
    ${isLineBefore ? line : ""}`}
    >
      <button
        onClick={onClick}
        className={`${Variants[variant]} ${className} capitalize flex gap-1 px-2 py-1 rounded-md  cursor-pointer transition-colors ease-in-out 
             `}
      >
        {children}
      </button>
    </div>
  );
};

export default ButtonVariant2;
