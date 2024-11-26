// Button.tsx
import React from "react";
import { ButtonProps } from "../../../../type";

// Button component with configurable props
function Button({
  children,
  icon,
  onClick,
  dashed = false,
  iconPosition = "left",
  circle = false,
}: ButtonProps) {
  // Base classes for the button styling
  const baseClasses = `flex items-center justify-center gap-1 border hover:bg-gray-100`;

  // Shape classes based on whether the button is circular or rectangular
  const shapeClasses = circle
    ? `rounded-full h-6 w-6` // Height and width for a circle button
    : `rounded-2xl px-[7px] py-[3px]`; // Default rounded rectangle shape

  // Border classes based on whether the border is dashed
  const borderClasses = dashed ? "border-dashed" : "border-gray-200";

  // Content alignment classes based on the icon position (left or right)
  const contentClasses =
    iconPosition === "right" ? "flex-row-reverse" : "flex-row";

  return (
    <button
      className={`${baseClasses} ${shapeClasses} ${borderClasses} ${contentClasses}`}
      onClick={onClick}
    >
      {/* Render icon if provided */}
      {icon && <span className="flex items-center">{icon}</span>}

      {/* Render children (button text) if provided */}
      {children && (
        <div className="flex items-center text-xs font-sans font-medium text-gray-600">
          {children}
        </div>
      )}
    </button>
  );
}

export default Button;
