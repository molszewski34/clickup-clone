import React from "react";
type VariantType = "primary" | "secendary" | "tertiary" | "activeFilter";
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
      isActive && `bg-darkGray_50 text-darkGray_600`
    } text-gray_600 active:bg-gray_50 hover:bg-white_100`,
    secendary: `${
      isActive && "bg-darkBlue_600"
    } text-blue_400  hover:bg-darkBlue_600 active:bg-darkBlue_600`,
    tertiary: `${
      isActive && "bg-blue_200"
    } text-blue_300  hover:bg-blue_200 active:bg-blue_200`,
    activeFilter: `${
      isActive && " bg-lightBlue_500 text-darkBlue_700 hover:bg-lightBlue_200 "
    } active:bg-gray_50 hover:bg-white_100`,
  };
  const line = `ml-[14px] relative before:content-[""] before:absolute before:-left-[9px] before:font-thin before:bg-darkGray_50 before:w-[1px] before:h-4 before:flex-shrink-0`;
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
