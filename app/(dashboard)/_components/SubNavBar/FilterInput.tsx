import React from "react";

type Props = {
  isActive: boolean;
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const FilterInput = ({ isActive = false, value, onChange }: Props) => {
  const variants = {
    primary: `shadow-customGrayShadow_300 placeholder:text-gray_600 bg-transparent hover:bg-white_50 focus-visible:outline-none
      focus:text-blue_400 focus:border-blue_600 
    focus:shadow-customDoubleBlueShadow_600
      `,
    secendary: `
    text-blue_300 bg-blue_50 shadow-customBlueShadow_500 hover:bg-blue_100
    focus:text-blue_300 focus:border-blue_600 focus:bg-blue_50 
    focus:shadow-customDoubleBlueShadow_600 focus-visible:outline-none`,
  };
  return (
    <input
      type="text"
      placeholder="Search..."
      value={value}
      onChange={onChange}
      className={`w-full h-6  text-sm leading-4 pt-[2px] pr-11 pl-2 pb-[3px] flex items-center rounded-md 
          ${isActive ? variants.secendary : variants.primary}  `}
    />
  );
};

export default FilterInput;
