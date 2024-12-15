import React from "react";

type Props = {
  children: React.ReactNode;
  doubleButtonLeft?: boolean;
  doubleButtonRight?: boolean;
  className?: string;
  onClick?: () => void;
};

const ButtonVariant3: React.FC<Props> = ({
  children,
  onClick,
  doubleButtonLeft = false,
  doubleButtonRight = false,
  className,
}) => {
  const doubleClass = doubleButtonLeft
    ? "rounded-l-[0.25rem]"
    : doubleButtonRight
    ? "rounded-r-[0.25rem] border-l-[1px] border-darkGray_550"
    : "rounded-[0.25rem]";

  return (
    <div className="h-full flex items-center min-w-max normal-case">
      <button
        onClick={onClick}
        className={` flex text-xs items-center h-6 px-[7px]
          bg-blue_600 hover:bg-blue_400 text-whitev1 hover:text-whitev1 
          ${doubleClass} ${className} 
          `}
      >
        {children}
      </button>
    </div>
  );
};

export default ButtonVariant3;
