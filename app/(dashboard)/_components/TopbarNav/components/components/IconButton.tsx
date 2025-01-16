import React, { ReactElement } from "react";

interface IconButtonProps {
  onClick: () => void;
  icon: ReactElement;
  size?: string;
  textIcon?: string;
  buttonClass?: string;
}

const IconButton: React.FC<IconButtonProps> = ({
  onClick,
  icon,
  size = "16px",
  textIcon,
  buttonClass = "h-8 w-8 mx-1",
}) => {
  return (
    <button
      className={`flex justify-center items-center hover:bg-white bg-opacity-10 hover:bg-opacity-20 rounded-md ${buttonClass}`}
      onClick={onClick}
    >
      {React.cloneElement(icon, { className: `text-[${size}] text-white` })}
      {textIcon && (
        <span className="h-4 w-8 ml-1 text-sm/[16px] text-center font-semibold text-white font-sans">
          {textIcon}
        </span>
      )}
    </button>
  );
};

export default IconButton;
