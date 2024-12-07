import React, { useState } from "react";
import buttonsProfilBar from "./buttonsProfilBar";
import ButtonProfil from "./ButtonProfil";

export default function ButtonRender() {
  const [activeButton, setActiveButton] = useState<number | null>(null);

  // Podział przycisków na grupy
  const buttonGroups = [
    buttonsProfilBar.slice(0, 2), // Pierwsze 2 przyciski
    buttonsProfilBar.slice(2, 6), // Następne 4 przyciski
    buttonsProfilBar.slice(6, 10), // Kolejne 4 przyciski
    buttonsProfilBar.slice(10, 12), // Ostatnie 2 przyciski
  ];

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
                onClick={() => {
                  setActiveButton(groupIndex * 10 + index);
                }}
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
