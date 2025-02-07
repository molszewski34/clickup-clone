import React, { ReactNode, useState } from "react";
import { Icons } from "@/icons/icons";
import { AddIcons } from "../../SidebarModal/components/AddIcons";
import AddWorkspaceElement from "./AddWorkspaceElement/AddWorkspaceElement";
import { Space } from "@/app/server-actions/types";

interface WorkspaceElementProps {
  workspace: Space;
  isActive: boolean;
  onClick: (workspaceId: string, workspaceName: string) => void;
  width: number;
  setWorkspaceName: (name: string) => void;
  children?: ReactNode;
}

export const WorkspaceElement = ({
  workspace,
  isActive,
  onClick,
  width,
  setWorkspaceName,
  children,
}: WorkspaceElementProps) => {
  const [hoverStates, setHoverStates] = useState<{ [key: string]: boolean }>(
    {}
  );

  const handleMouseEnter = (id: string) => {
    setHoverStates((prevState) => ({ ...prevState, [id]: true }));
  };

  const handleMouseLeave = (id: string) => {
    setHoverStates((prevState) => ({ ...prevState, [id]: false }));
  };

  const firstLetterOfWorkspaceName =
    workspace.name?.charAt(0).toUpperCase() || "?";

  const selectedIcon = Array.isArray(workspace.icon)
    ? workspace.icon.reverse().find((item) => item.selectedIconName)
    : null;

  const DynamicIcon = selectedIcon?.selectedIconName
    ? AddIcons[selectedIcon.selectedIconName as keyof typeof AddIcons]
    : null;

  return (
    <div>
      <AddWorkspaceElement
        label={workspace.name}
        icon={
          hoverStates[workspace.id] ? (
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
          Array.isArray(workspace.icon)
            ? [...workspace.icon].reverse().find((item) => item?.activeColor)
                ?.activeColor ?? "indigo-500"
            : "indigo-500"
        }
        extraIcons={2}
        active={isActive}
        onClick={() => onClick(workspace.id, workspace.name)}
        width={width}
        onMouseEnter={() => {
          handleMouseEnter(workspace.id);
          setWorkspaceName(workspace.name);
        }}
        onMouseLeave={() => handleMouseLeave(workspace.id)}
        isWorkspace={true}
        rotate={true}
      />
      {children}
    </div>
  );
};
