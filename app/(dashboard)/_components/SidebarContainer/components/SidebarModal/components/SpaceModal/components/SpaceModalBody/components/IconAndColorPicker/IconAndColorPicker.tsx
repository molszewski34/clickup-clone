"use client"; // Komponent jest renderowany po stronie klienta w Next.js

import React, { useState } from "react"; // Importujemy React i useState
import ColorChoice from "./components/ColorChoice";
import SelectIcon from "./components/SelectIcon/SelectIcon";

// Interfejs dla propsów komponentu
interface IconAndColorPickerProps {
  onColorChange: (color: string) => void; // Funkcja wywoływana przy zmianie koloru
  onIconSelect: (icon: string) => void; // Funkcja wywoływana przy wyborze ikony
}

const IconAndColorPicker: React.FC<IconAndColorPickerProps> = ({
  onColorChange,
  onIconSelect,
}) => {
  const [activeColor, setActiveColor] = useState("indigo-500"); // Stan do przechowywania aktualnie wybranego koloru

  // Funkcja obsługująca zmianę koloru
  const handleColorChange = (color: string) => {
    setActiveColor(color); // Ustawiamy wybrany kolor w stanie
    onColorChange(color); // Wywołujemy funkcję przekazaną z propsów, aby poinformować rodzica o zmianie koloru
  };

  return (
    <div>
      {/* Komponent do wyboru koloru, przekazujemy funkcję obsługi zmiany koloru */}
      <ColorChoice onColorChange={handleColorChange} />
      {/* Komponent do wyboru ikony, przekazujemy aktualny kolor oraz funkcję obsługi wyboru ikony */}
      <SelectIcon activeColor={activeColor} onIconSelect={onIconSelect} />
    </div>
  );
};

export default IconAndColorPicker;
