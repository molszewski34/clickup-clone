import React, { useState } from "react";
import buttonsProfilBar from "./buttonsProfilBar";
import ButtonProfil from "./ButtonProfil";
import { useUser } from "@/context/DataProvider/UserDataProvider"; // Import kontekstu użytkownika
import useLogoutHandler from "@/app/(auth)/login/_hooks/useLogoutHandler";

export default function ButtonRender() {
  const [activeButton, setActiveButton] = useState<number | null>(null);
  const { userId } = useUser(); // Pobranie userId z kontekstu
  const { handleLogout } = useLogoutHandler(); // Korzystanie z hooka

  // Podział przycisków na grupy
  const buttonGroups = [
    buttonsProfilBar.slice(0, 2), // Pierwsze 2 przyciski
    buttonsProfilBar.slice(2, 6), // Następne 4 przyciski
    buttonsProfilBar.slice(6, 10), // Kolejne 4 przyciski
    buttonsProfilBar.slice(10, 12), // Ostatnie 2 przyciski
  ];

  // Funkcja obsługi kliknięcia
  const handleButtonClick = (index: number, label: string) => {
    setActiveButton(index);
    if (label === "Settings" && userId) {
      // Przekierowanie do lokalizacji z dynamicznym userId
      window.location.href = `/${userId}/setting/profile`; // Zmiana lokalizacji
    } else if (label === "Log out") {
      handleLogout(); // wylogujemy użytkownika
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
              <div className="w-full h-[1px] bg-gray-200 my-2" />
            )}
          </React.Fragment>
        ))}
      </div>
    </>
  );
}
