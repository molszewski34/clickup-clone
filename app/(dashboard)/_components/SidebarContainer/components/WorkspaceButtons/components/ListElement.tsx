import { List, Task } from "@/app/server-actions/types";
import { Icons } from "@/icons/icons";
import React from "react";
import AddSpaceElement from "./AddWorkspaceElement/AddSpaceElement";

interface ListElementProps {
  list: List;
  isActive: boolean;
  onMouseEnter: (listId: string, listName: string) => void;
  width: number;
  setTasksLength: (length: number) => void;
  tasks: Task[];
}

export const ListElement = ({
  list,
  isActive,
  onMouseEnter,
  width,
  setTasksLength,
  tasks,
}: ListElementProps) => (
  <AddSpaceElement
    label={list.name}
    icon={<Icons.ListOutline className="text-[20px] text-gray-700" />}
    extraIcons={1}
    active={isActive}
    onMouseEnter={() => onMouseEnter(list.id, list.name)}
    width={width}
    onClick={() => setTasksLength(tasks ? tasks.length : 0)}
    isSpace={false}
    rotate={false}
  />
);
