import Image from "next/image";
import { Icons } from "@/icons/icons";
import React from "react";

interface EmptyCardContentProps {
  imageSrc: string;
  description: string;
  buttonText?: string;
  height: string;
  children?: React.ReactNode;
}

export default function EmptyCardContent({
  imageSrc,
  description,
  buttonText,
  height,
  children,
}: EmptyCardContentProps) {
  return (
    <div
      className={` w-full pb-4 custom-scrollbar overflow-y-auto overflow-x-hidden`}
      style={{ height: ` ${height} ` }}
    >
      <div className="flex flex-col items-center h-full justify-center">
        <Image src={imageSrc} alt="default" height={80} width={80} />
        {children}
        <span className="flex gap-1 font-sans text-xs text-gray-600">
          {description}
          <a className="text-blue-700 cursor-pointer">Learn more</a>
        </span>
        {buttonText && (
          <button className="flex items-center mt-4 gap-1 rounded-md px-2 py-[6px] text-xs hover:bg-blue-800 bg-blue-700 text-white font-semibold">
            <Icons.PlusNew className="text-[14px] text-white" />
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
}
