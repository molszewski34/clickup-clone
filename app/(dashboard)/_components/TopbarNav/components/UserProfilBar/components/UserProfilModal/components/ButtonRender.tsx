import React, { useState } from "react";
import buttonsProfilBar from "./buttonsProfilBar";
import ButtonProfil from "./ButtonProfil";
import { useUser } from "@/context/DataProvider/UserDataProvider";
import useLogoutHandler from "@/app/(auth)/login/_hooks/useLogoutHandler";

export default function ButtonRender() {
  const [activeButton, setActiveButton] = useState<number | null>(null);
  const { userId } = useUser();
  const { handleLogout } = useLogoutHandler();

  const buttonGroups = [
    buttonsProfilBar.slice(0, 2),
    buttonsProfilBar.slice(2, 6),
    buttonsProfilBar.slice(6, 10),
    buttonsProfilBar.slice(10, 12),
  ];

  const handleButtonClick = (index: number, label: string) => {
    setActiveButton(index);
    if (label === "Settings" && userId) {
      window.location.href = `/${userId}/setting/profile`;
    } else if (label === "Log out") {
      handleLogout();
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
              <div className="w-full h-[1px] bg-gray-200 my-2" />
            )}
          </React.Fragment>
        ))}
      </div>
    </>
  );
}
