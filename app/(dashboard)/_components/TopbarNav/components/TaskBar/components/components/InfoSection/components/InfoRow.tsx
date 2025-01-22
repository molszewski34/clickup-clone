import { InfoRowProps } from "@/app/(dashboard)/_components/TopbarNav/components/type";
import React from "react";

export const InfoRow: React.FC<InfoRowProps> = ({ title, children }) => {
  return (
    <div className="flex-row w-1/4">
      <div className="text-sm font-sans pl-2 cursor-default font-medium text-gray-950">
        {title}
      </div>
      {children}
    </div>
  );
};
