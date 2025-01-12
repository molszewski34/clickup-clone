import { ButtonProps } from "@/app/(dashboard)/_components/TopbarNav/components/type";
import React from "react";

function Button({
  children,
  icon,
  onClick,
  dashed = false,
  iconPosition = "left",
  circle = false,
}: ButtonProps) {
  const baseClasses = `flex items-center justify-center gap-1 border hover:bg-gray-100`;

  const shapeClasses = circle
    ? `rounded-full h-6 w-6`
    : `rounded-2xl px-[7px] py-[3px]`;

  const borderClasses = dashed
    ? "border-dashed border-gray-200 hover:border-gray-400"
    : "border-gray-200";

  const contentClasses =
    iconPosition === "right" ? "flex-row-reverse" : "flex-row";

  return (
    <button
      className={`${baseClasses} ${shapeClasses} ${borderClasses} ${contentClasses}`}
      onClick={onClick}
    >
      {icon && <span className="flex items-center">{icon}</span>}
      {children && (
        <div className="flex items-center text-xs font-sans font-medium text-gray-600">
          {children}
        </div>
      )}
    </button>
  );
}

export default Button;
