import React from "react";

type Props = {
  children: React.ReactNode;
  isLineBefore?: boolean | null;
  onClick?: () => void;
  isActive?: boolean;
};

const ButtonVariant2: React.FC<Props> = ({
  children,
  isLineBefore = false,
  onClick,
  isActive = false,
}) => {
  const line = `ml-[14px] relative before:content-[""] before:absolute before:-left-[9px] before:font-thin before:bg-darGray_400 before:w-[1px] before:h-4 before:flex-shrink-0`;
  return (
    <div
      className={`h-full flex items-center
    ${isLineBefore ? line : ""}`}
    >
      <button
        onClick={onClick}
        className={`capitalize flex gap-1 px-2 py-1 rounded-md hover:bg-darGray_400 cursor-pointer transition-colors ease-in-out active:bg-darGray_300
            ${isActive ? "bg-darGray_300" : ""}`}
      >
        {children}
      </button>
    </div>
  );
};

export default ButtonVariant2;
