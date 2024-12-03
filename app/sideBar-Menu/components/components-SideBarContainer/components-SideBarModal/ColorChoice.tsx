"use client";

import React, { useState } from "react";
import { ColorChoiceProps } from "./types";

const ColorChoice: React.FC<ColorChoiceProps> = ({ onColorChange }) => {
  const [activeColor, setActiveColor] = useState<string>("indigo-500");

  const colors: string[] = [
    "indigo-500",
    "blue-500",
    "sky-500",
    "teal-500",
    "emerald-600",
    "amber-500",
    "orange-500",
    "red-500",
    "pink-500",
    "purple-500",
    "stone-500",
    "black",
  ];

  const handleColorChange = (color: string) => {
    setActiveColor(color);
    if (onColorChange) onColorChange(color);
  };

  return (
    <div className="m-4 mt-0">
      <div></div>
      <ul className="relative flex flex-wrap -m-1">
        {colors.map((color) => (
          <li key={color}>
            <button
              onClick={() => handleColorChange(color)}
              className={`flex float-left items-center justify-center rounded-full w-[28px] h-[28px] ${
                activeColor === color
                  ? `border-2 border-${color} cursor-default`
                  : "cursor-pointer hover:border-2 hover:border-gray-200"
              } bg-white`}
            >
              <span className={`w-5 h-5 rounded-full bg-${color}`}></span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ColorChoice;
