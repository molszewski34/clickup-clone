import { Icons } from "@/icons/icons";
import React from "react";

interface CardContainerProps {
  title: string;
  NumberIcons: number;
  children: React.ReactNode;
  height: string;
}

export default function CardContainer({
  title,
  NumberIcons,
  children,
  height,
}: CardContainerProps) {
  return (
    <div
      className={`h-[${height}] border border-gray-200 rounded-xl hover:border-gray-400 overflow-hidden group`}
    >
      <div className="flex items-center justify-between pb-2 mt-3 px-4 font-sans font-semibold text-base text-gray-950">
        <div className="flex items-center gap-2">
          <span>{title}</span>
        </div>
        <div className="hidden gap-1 group-hover:flex">
          {NumberIcons === 3 && (
            <button className="flex justify-center items-center w-6 h-6 rounded-md hover:bg-gray-100">
              <Icons.SettingsIcon className="text-[14px] text-gray-600" />
            </button>
          )}
          <button className="flex justify-center items-center w-6 h-6 rounded-md hover:bg-gray-100">
            <Icons.FullScreen className="text-[14px] text-gray-600" />
          </button>
          <button className="flex justify-center items-center w-6 h-6 rounded-md hover:bg-gray-100">
            <Icons.ThreeDotsIcon className="text-[14px] text-gray-600" />
          </button>
        </div>
      </div>
      <div className="w-full h-full">{children}</div>
    </div>
  );
}
