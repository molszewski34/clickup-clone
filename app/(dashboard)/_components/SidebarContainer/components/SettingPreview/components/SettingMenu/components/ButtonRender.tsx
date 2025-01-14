import React, { useState } from "react";

import { useUser } from "@/context/DataProvider/UserDataProvider";
import { useUserProfile } from "@/hooks/useUserProfile";
import buttonsSettingMenu from "./components/buttonsSettingMenu";
import ButtonProfil from "./components/ButtonProfil";

export default function ButtonRender() {
  const [activeButton, setActiveButton] = useState<number | null>(null);
  const { userId } = useUser();

  const buttonGroups = [
    buttonsSettingMenu.slice(0, 4),
    buttonsSettingMenu.slice(4, 11),
  ];
  const { userData } = useUserProfile();

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
                  {userData?.signUpFullName}{" "}
                </div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </>
  );
}
