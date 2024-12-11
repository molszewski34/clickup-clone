import React, { useState } from "react";
import buttonsProfilBar from "./buttonsSettingMenu";
import ButtonProfil from "./ButtonProfil";
import { useUser } from "@/context/DataProvider/UserDataProvider"; // Import kontekstu użytkownika

export default function ButtonRender() {
  const [activeButton, setActiveButton] = useState<number | null>(null);
  const { userId } = useUser(); // Pobranie userId z kontekstu

  // Podział przycisków na grupy
  const buttonGroups = [
    buttonsProfilBar.slice(0, 4), // Pierwsze 4 przyciski
    buttonsProfilBar.slice(4, 9), // Następne 6 przyciski
  ];

  // Funkcja obsługi kliknięcia
  const handleButtonClick = (index: number, label: string) => {
    setActiveButton(index);
    if (label === "My Settings" && userId) {
      // Przekierowanie do lokalizacji z dynamicznym userId
      window.location.href = `/${userId}/setting/profile`; // Zmiana lokalizacji
    }
  };

  return (
    <>
      <div className="flex flex-col rounded-lg w-full h-auto">
        {buttonGroups.map((group, groupIndex) => (
          <React.Fragment key={groupIndex}>
            {/* Renderowanie grupy przycisków */}
            {group.map((button, index) => (
              <ButtonProfil
                key={`${groupIndex}-${index}`}
                label={button.label}
                icon={button.icon}
                active={activeButton === groupIndex * 10 + index}
                onClick={() =>
                  handleButtonClick(groupIndex * 10 + index, button.label)
                }
              />
            ))}
            {/* Separator między grupami, z pominięciem ostatniej grupy */}
            {groupIndex < buttonGroups.length - 1 && (
              <div className="mx-2 w-fit border-t border-gray-200">
                <div className="p-2 pt-4 font-sans text-[11px] uppercase font-medium text-gray-500">
                  Jakub King
                </div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </>
  );
}
