"use client";

import React, { useState } from "react";
import { AddIcons } from "./AddIcons";
import { SelectIconProps, Tooltip } from "./types";
import { SearchInput } from "./components-SelectIcon/SearchInput";
import { IconList } from "./components-SelectIcon/IconList";
import { TooltipPortal } from "./components-SelectIcon/TooltipPortal";

// Funkcja do formatowania treści w tooltipach
const formatTooltipContent = (text: string) => {
  return text
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2") // Dodawanie spacji przed dużymi literami w camelCase
    .replace(/^./, (str) => str.toUpperCase()); // Pierwsza litera staje się wielka
};

export default function SelectIcon({
  activeColor,
  onIconSelect,
}: SelectIconProps & { onIconSelect?: (icon: string) => void }) {
  // Stan do przechowywania aktywnej ikony (teraz przechowujemy klucz ikony)
  const [activeIcon, setActiveIcon] = useState<string>(
    Object.keys(AddIcons)[0]
  );

  // Stan do przechowywania terminu wyszukiwania
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Stan do przechowywania danych o tooltipie (informacja i pozycja)
  const [tooltip, setTooltip] = useState<Tooltip | null>(null);

  // Filtrowanie ikon na podstawie wpisanego tekstu w wyszukiwarce
  const filteredIcons = Object.entries(AddIcons).filter(
    ([key]) => key.toLowerCase().includes(searchTerm.toLowerCase()) // Porównujemy nazwę ikony z wyszukiwanym tekstem
  );

  // Funkcja do obsługi tooltipa (wyświetla informacje o ikonie)
  const handleTooltip = (key: string, event: React.MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLElement;
    const { bottom, left, width } = target.getBoundingClientRect(); // Pobieramy pozycję ikony
    setTooltip({
      content: formatTooltipContent(key), // Ustawiamy treść tooltipa (sformatowaną nazwę ikony)
      position: {
        top: bottom + 8, // Pozycja z uwzględnieniem odległości od ikony
        left: left + width / 2, // Środek ikony
      },
    });
  };

  // Funkcja do ukrywania tooltipa, gdy użytkownik opuści ikonę
  const handleMouseLeave = () => setTooltip(null);

  // Funkcja obsługująca kliknięcie w ikonę
  const handleIconClick = (key: string) => {
    setActiveIcon(key); // Ustawiamy klikniętą ikonę jako aktywną
    onIconSelect?.(key); // Wywołujemy przekazaną funkcję onIconSelect, przekazując nazwę (klucz) ikony
  };

  return (
    <div className="pt-[10px] border-t border-gray-200">
      <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="custom-scrollbar overflow-y-auto overflow-x-hidden">
        <IconList
          icons={filteredIcons} // Przesyłamy przefiltrowane ikony
          activeIcon={activeIcon} // Przesyłamy aktualnie aktywną ikonę
          activeColor={activeColor} // Przesyłamy kolor aktywnej ikony
          onIconClick={handleIconClick} // Funkcja do obsługi kliknięcia w ikonę
          onTooltipShow={handleTooltip} // Funkcja do wyświetlania tooltipa
          onTooltipHide={handleMouseLeave} // Funkcja do ukrywania tooltipa
        />
      </div>
      {tooltip && <TooltipPortal tooltip={tooltip} />}
    </div>
  );
}
