"use client";

import React from "react";
import IconArrowDownStatic from "../../../icon/IconArrowDownStatic";
import IconDoc from "../../../icon/IconDoc";
import { FaPlus, FaRegCircleCheck } from "react-icons/fa6";
import IconSort from "../../../icon/IconSort";
import { ButtonProps } from "../../../type";

function Button({
  children,
  icon,
  onClick,
  dashed = false,
  iconPosition = "left",
  circle = false,
}: ButtonProps) {
  const baseClasses = `flex items-center justify-center gap-[2px] border hover:bg-gray-100`;
  const shapeClasses = circle
    ? `rounded-full h-6 w-6` // Wysokość i szerokość koła
    : `rounded-2xl px-[7px] py-[3px]`; // Domyślne zaokrąglone prostokąty
  const borderClasses = dashed ? "border-dashed" : "border-gray-200";
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
export default function SortMenuModal() {
  return (
    <div className="flex items-center w-full p-2 pl-3 gap-[4px] h-[40px]">
      <Button icon={<FaRegCircleCheck className="w-3 h-3 text-gray-600" />}>
        Tasks
      </Button>

      <Button icon={<IconDoc fill="gray-600" stroke="gray-600" size={12} />}>
        Docs
      </Button>

      <Button
        dashed
        circle
        icon={<FaPlus className="w-3 h-3 text-gray-400" />}
      />

      <div className="w-px h-4 m-1 bg-gray-200" />

      <Button
        icon={<IconArrowDownStatic size="10" color="gray-400" ml="2" />}
        iconPosition="right"
      >
        Sort
      </Button>

      <Button
        icon={<IconArrowDownStatic size="10" color="gray-400" ml="2" />}
        iconPosition="right"
      >
        Assignee
      </Button>

      <Button
        icon={<IconArrowDownStatic size="10" color="gray-400" ml="2" />}
        iconPosition="right"
      >
        Creator
      </Button>

      <Button
        icon={<IconArrowDownStatic size="10" color="gray-400" ml="2" />}
        iconPosition="right"
      >
        In
      </Button>

      <Button icon={<IconSort size="16" color="gray-600" />} />
    </div>
  );
}
