import React, { useState } from "react";
import buttonsMenuFileChanger from "./buttonsMenuFileChanger";
import ButtonFileChanger from "./ButtonFileChanger";

const MenuFileChanger: React.FC = () => {
  const [activeButton, setActiveButton] = useState<number | null>(null);

  // Split buttons into groups
  const buttonGroups = [
    buttonsMenuFileChanger.slice(0, 2),
    buttonsMenuFileChanger.slice(2, 6),
    buttonsMenuFileChanger.slice(6, 8),
    buttonsMenuFileChanger.slice(8, 12),
  ];

  return (
    <div className="flex flex-col rounded-lg w-[272px] h-auto">
      {buttonGroups.map((group, groupIndex) => (
        <React.Fragment key={groupIndex}>
          {/* Render button group */}
          {group.map((button, index) => (
            <ButtonFileChanger
              key={`${groupIndex}-${index}`}
              label={button.label}
              icon={button.icon}
              active={activeButton === groupIndex * 10 + index}
              onClick={() => {
                // Simply set the active button without opening any modal
                setActiveButton(groupIndex * 10 + index);
              }}
              groupIndex={groupIndex}
              NumberIndex={index}
            />
          ))}
          {groupIndex < buttonGroups.length - 1 && (
            <div className="w-full h-[1px] bg-gray-200 my-2" />
          )}
        </React.Fragment>
      ))}
      <div className="w-full h-[1px] bg-gray-200 my-2" />
      <div className="flex items-center rounded-md h-8 mx-2 text-sm text-white font-sans font-semibold  w-auto flex-grow min-w-0 justify-center bg-indigo-500 hover:bg-indigo-700">
        Sharing & Permissions
      </div>
    </div>
  );
};

export default MenuFileChanger;
