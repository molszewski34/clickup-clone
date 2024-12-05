"use client";

import React, { useState } from "react";
import ColorChoice from "./ColorChoice";
import SelectIcon from "./SelectIcon";

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
