"use client";

import React from "react";
import IconArrowDownStatic from "../../../icon/IconArrowDownStatic";
import IconDoc from "../../../icon/IconDoc";
import { FaPlus, FaRegCircleCheck } from "react-icons/fa6";
import IconSort from "../../../icon/IconSort";
import { ButtonProps } from "../../../type";

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
  const baseClasses = `flex items-center justify-center gap-[2px] border hover:bg-gray-100`;

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

// SortMenuModal component renders a set of buttons for sorting/filtering
export default function SortMenuModal() {
  return (
    <div className="flex items-center w-full p-2 pl-3 gap-[4px] h-[40px]">
      {/* Button for tasks with a check icon */}
      <Button icon={<FaRegCircleCheck className="w-3 h-3 text-gray-600" />}>
        Tasks
      </Button>

      {/* Button for docs with a document icon */}
      <Button icon={<IconDoc fill="gray-600" stroke="gray-600" size={12} />}>
        Docs
      </Button>

      {/* Button with a plus icon, circular and dashed border */}
      <Button
        dashed
        circle
        icon={<FaPlus className="w-3 h-3 text-gray-400" />}
      />

      {/* Vertical separator */}
      <div className="w-px h-4 m-1 bg-gray-200" />

      {/* Button for sorting with down arrow icon */}
      <Button
        icon={<IconArrowDownStatic size="10" color="gray-400" ml="2" />}
        iconPosition="right"
      >
        Sort
      </Button>

      {/* Button for assignee with down arrow icon */}
      <Button
        icon={<IconArrowDownStatic size="10" color="gray-400" ml="2" />}
        iconPosition="right"
      >
        Assignee
      </Button>

      {/* Button for creator with down arrow icon */}
      <Button
        icon={<IconArrowDownStatic size="10" color="gray-400" ml="2" />}
        iconPosition="right"
      >
        Creator
      </Button>

      {/* Button for "In" filter with down arrow icon */}
      <Button
        icon={<IconArrowDownStatic size="10" color="gray-400" ml="2" />}
        iconPosition="right"
      >
        In
      </Button>

      {/* Button for sorting with a sort icon */}
      <Button icon={<IconSort size="16" color="gray-600" />} />
    </div>
  );
}
