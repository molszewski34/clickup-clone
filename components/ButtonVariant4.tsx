import React from "react";

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  width?: string;
  height?: string;
  minWidth?: string;
  backGround?: string;
};

const ButtonVariant4 = ({
  children,
  onClick,
  width = "w-[26px]",
  height = "h-[26px]",
  minWidth = "min-w-[26px]",
  backGround = "bg-darGray_400",
}: Props) => {
  return (
    <div className="h-full flex items-center">
      <button
        onClick={onClick}
        className={`flex rounded-[13px] items-center justify-center  hover:bg-darGray_300 transition-colors ease-in-out active:bg-gray_600 cursor-pointer
          ${width} ${height} ${minWidth} ${backGround}`}
      >
        {children}
      </button>
    </div>
  );
};

export default ButtonVariant4;
