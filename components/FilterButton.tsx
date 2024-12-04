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
  hoverBackGround?: string;
};

const FilterButton: React.FC<Props> = ({
  children,
  onClick,
  isActive = false,
}) => {
  const variants = {
    primary:
      "px-2 py-0.5 h-6 bg-darkGray_600 text-gray_400 border-gray_100 hover:bg-darkGray_500",
    secendery:
      "px-2 py-0.5 h-6 bg-nav text-blue_400 border-darkBlue_600 hover:bg-darkBlue_500",
  };
  //ToDo: chceck all styles, change bolue color for active button
  //TODo: make all effect, with active, with hover and with active and hoove at the same time
  return (
    <button
      onClick={onClick}
      className={`relative flex items-center gap-1 z-10 text-xs font-semibold rounded-xl border  
      
        ${isActive ? variants.secendery : variants.primary} `}
    >
      {children}
    </button>
  );
};

export default FilterButton;
