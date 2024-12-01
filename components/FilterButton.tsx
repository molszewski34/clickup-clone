import React from "react";

type Props = {
  children: React.ReactNode;
  onClick: () => void;
  isActive?: boolean;
  padding?: string;
  bgColor?: string;
  textColor?: string;
  borderColor?: string;
  height?: string;
};

const FilterButton: React.FC<Props> = ({
  children,
  isActive = false,
  padding = "px-2 py-0.5",
  bgColor = "bg-darkGray_600",
  textColor = "text-gray_400",
  borderColor = "border-gray_100",
  height = "h-6",
}) => {
  //ToDo: chceck all styles, change bolue color for active button
  //TODo: make all effect, with active, with hover and with active and hoove at the same time
  return (
    <button
      onClick={() => onclick}
      className={`text-xs font-semibold flex items-center gap-1 rounded-xl border  active:bg-datkGray_500
        ${padding} ${height}
        ${isActive ? "bg-nav" : bgColor} ${
        isActive ? "text-blue_400" : textColor
      } ${isActive ? "border-darkBlue_600" : borderColor}`}
    >
      {children}
    </button>
  );
};

export default FilterButton;
