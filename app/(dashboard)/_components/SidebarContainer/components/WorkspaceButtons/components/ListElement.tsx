import { List, Task } from "@/app/server-actions/types";
import { Icons } from "@/icons/icons";
import React from "react";
import AddSpaceElement from "./AddWorkspaceElement/AddSpaceElement";

interface ListElementProps {
  list: List;
  isActive: boolean;
  onClick: (listId: string, listName: string) => void; // Changed from onMouseEnter to onClick
  width: number;
  setTasksLength: (length: number) => void;
  tasks: Task[];
}

export const ListElement = ({
  list,
  isActive,
  onClick, // Changed from onMouseEnter to onClick
  width,
  setTasksLength,
  tasks,
}: ListElementProps) => (
  <AddSpaceElement
    label={list.name}
    icon={<Icons.ListOutline className="text-[20px] text-gray-700" />}
    extraIcons={1}
    active={isActive}
    onClick={() => {
      onClick(list.id, list.name);
      setTasksLength(tasks ? tasks.length : 0);
    }}
    width={width}
    isSpace={false}
    rotate={false}
  />
);
