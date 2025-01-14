import React, { useState } from "react";
import buttonsProfilBar from "./buttonsSettingMenu";
import ButtonProfil from "./ButtonProfil";
import { useUser } from "@/context/DataProvider/UserDataProvider";

export default function ButtonRender() {
  const [activeButton, setActiveButton] = useState<number | null>(null);
  const { userId } = useUser();

  const buttonGroups = [
    buttonsProfilBar.slice(0, 4),
    buttonsProfilBar.slice(4, 9),
  ];

  const handleButtonClick = (index: number, label: string) => {
    setActiveButton(index);
    if (label === "My Settings" && userId) {
      window.location.href = `/${userId}/setting/profile`;
    }
  };

  return (
    <>
      <div className="flex flex-col rounded-lg w-full h-auto">
        {buttonGroups.map((group, groupIndex) => (
          <React.Fragment key={groupIndex}>
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
