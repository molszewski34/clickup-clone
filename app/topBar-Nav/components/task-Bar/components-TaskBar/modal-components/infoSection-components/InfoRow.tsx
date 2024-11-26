import { InfoRowProps } from "@/app/topBar-Nav/components/type"; // Importing the props type for InfoRow
import React from "react";

// InfoRow component which displays a title and its child elements
export const InfoRow: React.FC<InfoRowProps> = ({ title, children }) => {
  return (
    <div className="flex-row w-1/4">
      {/* Title displayed with specific styling */}
      <div className="text-sm font-sans pl-2 cursor-default font-medium text-gray-950">
        {title} {/* Display the title passed as a prop */}
      </div>
      {/* Render the children elements passed into the component */}
      {children}
    </div>
  );
};
