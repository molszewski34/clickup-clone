import React from "react";

type Props = {
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  width?: string;
  height?: string;
  minWidth?: string;
  backGround?: string;
  position?: string;
  right?: string;
  hoverBackGround?: string;
  hoverColor?: string;
  activeBackGround?: string;
  color?: string;
};

const ButtonVariant4 = ({
  children,
  onClick,
  width = "w-[26px]",
  height = "h-[26px]",
  minWidth = "min-w-[26px]",
  backGround = "bg-darkGray_400",
  hoverBackGround = "hover:bg-darkGray_300",
  hoverColor = "hover:text-blue_400",
  activeBackGround = "active:bg-gray_600",
  color = "",
  position = "",
  right = "",
}: Props) => {
  return (
    <div className="h-full flex items-center">
      <button
        onClick={onClick}
        className={`flex rounded-[13px] z-10 items-center justify-center transition-colors ease-in-out  cursor-pointer
          ${width} ${height} ${minWidth} ${backGround} ${position} ${right} ${hoverBackGround} ${hoverColor} ${activeBackGround} ${color}`}
      >
        {children}
      </button>
    </div>
  );
};

export default ButtonVariant4;
