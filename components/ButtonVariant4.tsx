import React from "react";

type Props = {
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
};

const ButtonVariant4 = ({
  children,
  onClick,
  className = "w-[26px] h-[26px] min-w-[26px] bg-white_100 hover:bg-gray_50 active:bg-gray_50",
}: Props) => {
  return (
    <div className="h-full flex items-center">
      <button
        onClick={onClick}
        className={`flex cursor-pointer z-20 items-center justify-center transition-colors ease-in-out rounded-[13px]
          ${className}`}
      >
        {children}
      </button>
    </div>
  );
};

export default ButtonVariant4;
