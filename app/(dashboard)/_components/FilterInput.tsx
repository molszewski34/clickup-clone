import React from "react";

type Props = {
  isActive: boolean;
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const FilterInput = ({ isActive = false, value, onChange }: Props) => {
  const variants = {
    primary: `shadow-customGrayShadow_400 placeholder:text-gray_600 bg-transparent hover:bg-darkGray_500 focus-visible:outline-none
      focus:text-blue_400 focus:border-blue_600 
    focus:shadow-customBlueShadow_600
      `,
    secendary: `
    text-blue_400 bg-nav 
    focus:text-blue_400 focus:border-blue_600 focus:bg-nav 
    focus:shadow-customBlueShadow_600 focus-visible:outline-none`,
  };

  //   bg-transparent
  //            hover:bg-darkGray_500  border border-darkGray_400 placeholder:text-gray_600
  //            active:text-blue_400 active:border-blue_600 active:bg-nav
  //            focus:text-blue_400 focus:border-blue_600 focus:bg-nav
  //             focus-visible:outline-none
  return (
    <input
      type="text"
      placeholder="Search..."
      value={value}
      onChange={onChange}
      className={`w-full h-6  box-content pt-[2px] pr-11 pl-2 pb-[3px] caret-white_100 flex items-center rounded-md 
          ${isActive ? variants.secendary : variants.primary}  `}
    />
  );
};

export default FilterInput;
