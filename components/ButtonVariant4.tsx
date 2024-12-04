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
  color?: string;
  opacity?: string;
};

const ButtonVariant4 = ({
  children,
  onClick,
  width = "w-[26px]",
  height = "h-[26px]",
  minWidth = "min-w-[26px]",
  backGround = "bg-darkGray_400 hover:bg-darkGray_300 active:bg-gray_600",
  color = "",
  position = "",
  right = "",
  opacity = "",
}: Props) => {
  return (
    <div className="h-full flex items-center">
      <button
        onClick={onClick}
        className={`flex cursor-pointer z-20 items-center justify-center transition-colors ease-in-out rounded-[13px]
          ${width} ${height} ${minWidth} ${backGround} ${position} ${right} ${color} ${opacity}`}
      >
        {children}
      </button>
    </div>
  );
};

export default ButtonVariant4;
