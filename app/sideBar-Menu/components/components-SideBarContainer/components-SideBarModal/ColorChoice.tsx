"use client"; // Informuje o tym, że komponent działa po stronie klienta w Next.js

import React, { useState } from "react"; // Importujemy React i useState
import { ColorChoiceProps } from "./types"; // Importujemy typy z pliku types

// Komponent ColorChoice przyjmuje onColorChange jako prop
const ColorChoice: React.FC<ColorChoiceProps> = ({ onColorChange }) => {
  const [activeColor, setActiveColor] = useState<string>("indigo-500"); // Stan do przechowywania aktywnego koloru

  // Lista dostępnych kolorów do wyboru
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

  // Funkcja obsługująca zmianę koloru
  const handleColorChange = (color: string) => {
    setActiveColor(color); // Ustawiamy wybrany kolor jako aktywny
    if (onColorChange) onColorChange(color); // Jeśli istnieje funkcja onColorChange, wywołujemy ją z nowym kolorem
  };

  return (
    <div className="m-4 mt-0">
      <div></div> {/* Pusty div, który nie pełni funkcji */}
      <ul className="relative flex flex-wrap -m-1">
        {/* Lista kolorów */}
        {colors.map((color) => (
          <li key={color}>
            {/* Przycisk dla każdego koloru */}
            <button
              onClick={() => handleColorChange(color)} // Po kliknięciu zmienia kolor
              className={`flex float-left items-center justify-center rounded-full w-[28px] h-[28px] ${
                activeColor === color
                  ? `border-2 border-${color} cursor-default` // Aktywny kolor, dodajemy obramowanie
                  : "cursor-pointer hover:border-2 hover:border-gray-200" // Inaczej, zmiana kursora i obramowanie przy hover
              } bg-white`}
            >
              {/* Wyświetlamy kolor w przycisku */}
              <span className={`w-5 h-5 rounded-full bg-${color}`}></span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ColorChoice;
