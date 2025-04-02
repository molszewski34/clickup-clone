"use client";

import React, { useState } from "react";
import ColorChoice from "./components/ColorChoice";
import SelectIcon from "./components/SelectIcon/SelectIcona";

interface IconAndColorPickerProps {
  onColorChange: (color: string) => void;
  onIconSelect: (icon: string) => void;
}

const IconAndColorPicker: React.FC<IconAndColorPickerProps> = ({
  onColorChange,
  onIconSelect,
}) => {
  const [activeColor, setActiveColor] = useState("indigo-500");

  const handleColorChange = (color: string) => {
    setActiveColor(color);
    onColorChange(color);
  };

  return (
    <div>
      <ColorChoice onColorChange={handleColorChange} />
      <SelectIcon activeColor={activeColor} onIconSelect={onIconSelect} />
    </div>
  );
};

export default IconAndColorPicker;
