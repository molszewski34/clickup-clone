import React, { ReactNode, useState } from "react";
import { Icons } from "@/icons/icons";
import { AddIcons } from "../../SidebarModal/components/AddIcons";
import AddWorkspaceElement from "./AddWorkspaceElement/AddWorkspaceElement";
import { Space } from "@/app/server-actions/types";

interface SpaceElementProps {
  space: Space;
  isActive: boolean;
  onClick: (spaceId: string, spaceName: string) => void;
  width: number;
  setSpaceName: (name: string) => void;
  children?: ReactNode;
}

export const WorkspaceElement = ({
  space,
  isActive,
  onClick,
  width,
  setSpaceName,
  children,
}: SpaceElementProps) => {
  const [hoverStates, setHoverStates] = useState<{ [key: string]: boolean }>(
    {}
  );

  const handleMouseEnter = (id: string) => {
    setHoverStates((prevState) => ({ ...prevState, [id]: true }));
  };

  const handleMouseLeave = (id: string) => {
    setHoverStates((prevState) => ({ ...prevState, [id]: false }));
  };

  const firstLetterOfWorkspaceName = space.name?.charAt(0).toUpperCase() || "?";

  const selectedIcon = Array.isArray(space.icon)
    ? space.icon.reverse().find((item) => item.selectedIconName)
    : null;

  const DynamicIcon = selectedIcon?.selectedIconName
    ? AddIcons[selectedIcon.selectedIconName as keyof typeof AddIcons]
    : null;

  return (
    <div>
      <AddWorkspaceElement
        label={space.name}
        icon={
          hoverStates[space.id] ? (
            <Icons.PlayWorkspace className="text-[20px] text-white" />
          ) : DynamicIcon ? (
            <DynamicIcon className="text-[20px] text-white" />
          ) : (
            <span className="flex justify-center items-center text-[16px] w-4 h-4 font-sans font-bold text-white">
              {firstLetterOfWorkspaceName}
            </span>
          )
        }
        color={
          Array.isArray(space.icon)
            ? ([...space.icon].reverse().find((item) => item?.activeColor)
                ?.activeColor ?? "indigo-500")
            : "indigo-500"
        }
        extraIcons={2}
        active={isActive}
        onClick={() => onClick(space.id, space.name)}
        width={width}
        onMouseEnter={() => {
          handleMouseEnter(space.id);
          setSpaceName(space.name);
        }}
        onMouseLeave={() => handleMouseLeave(space.id)}
        isWorkspace={true}
        rotate={true}
      />
      {children}
    </div>
  );
};
