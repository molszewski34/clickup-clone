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
      "px-2 py-0.5 h-6 bg-darkGray_600 text-gray_400 border-gray_100 hover:bg-darkGray_500",
    secendery:
      "px-2 py-0.5 h-6 bg-nav text-blue_400 border-darkBlue_600 hover:bg-darkBlue_500",
  };
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
