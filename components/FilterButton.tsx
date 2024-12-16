import React from "react";

type Props = {
  children: React.ReactNode;
  onClick: () => void;
  isActive?: boolean;
};

const FilterButton: React.FC<Props> = ({
  children,
  onClick,
  isActive = false,
}) => {
  const variants = {
    primary:
      "px-2 py-0.5 h-6 bg-white text-darkGray_300 border-gray_50 hover:bg-white_50",
    secendery: `px-2 py-0.5 h-6 bg-blue_50 text-blue_300 border-blue_200 hover:bg-blue_100`,
    darkSecendery:
      "px-2 py-0.5 h-6 bg-nav text-blue_400 border-darkBlue_600 hover:bg-darkBlue_500",
  };
  return (
    <button
      onClick={onClick}
      className={`relative  flex items-center gap-1 z-10 text-xs font-semibold rounded-xl border  
      ${isActive ? variants.secendery : variants.primary} `}
    >
      {children}
    </button>
  );
};

export default FilterButton;
