import React, { useState } from "react";
import buttonsWorkSpaceModal from "./components/buttonsWorkSpaceModal";
import ButtonProfil from "./components/ButtonProfil";

interface ButtonRenderProps {
  toggleModal: (modal: "menuWorkspaceList" | "createList") => void; // Function to toggle modals
}

const ButtonRender: React.FC<ButtonRenderProps> = ({ toggleModal }) => {
  const [activeButton, setActiveButton] = useState<number | null>(null);

  const handleFirstButtonClick = () => {
    toggleModal("createList"); // Open second modal
  };

  // Split buttons into groups
  const buttonGroups = [
    buttonsWorkSpaceModal.slice(0, 1),
    buttonsWorkSpaceModal.slice(1, 4),
    buttonsWorkSpaceModal.slice(4, 6),
    buttonsWorkSpaceModal.slice(6, 8),
  ];

  return (
    <>
      <div className="flex flex-col rounded-lg w-[208px] h-auto">
        {buttonGroups.map((group, groupIndex) => (
          <React.Fragment key={groupIndex}>
            {/* Render button group */}
            {group.map((button, index) => (
              <ButtonProfil
                key={`${groupIndex}-${index}`}
                label={button.label}
                icon={button.icon}
                active={activeButton === groupIndex * 10 + index}
                onClick={() => {
                  if (groupIndex === 0 && index === 0) {
                    handleFirstButtonClick(); // Open modal for first button
                  } else {
                    setActiveButton(groupIndex * 10 + index);
                  }
                }}
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
};

export default ButtonRender;
