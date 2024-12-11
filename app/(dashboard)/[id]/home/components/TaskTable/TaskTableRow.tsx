"use client";
import { flexRender, Row } from "@tanstack/react-table";
import React, { useCallback } from "react";
import { FlatTaskElement } from "../../types";
import { Icons } from "@/icons/icons";
import ButtonIcon from "@/app/(dashboard)/ui/ButtonIcon";

type TaskTableRowProps = {
  row: Row<FlatTaskElement>;
  expandedTasks: string[];
  setExpandedTasks: (arg: string[]) => void;
};

export const TaskTableRow = ({ row, expandedTasks, setExpandedTasks }: TaskTableRowProps) => {
  const hasSubtasks = row.original.numberOfSubtasks > 0;
  const isExpanded = expandedTasks.includes(row.original.id);

  const showSubtasks = useCallback(
    (row: Row<FlatTaskElement>) => {
      if (expandedTasks.includes(row.original.id)) return;
      return setExpandedTasks([row.original.id, ...expandedTasks]);
    },
    [setExpandedTasks, expandedTasks]
  );

  const hideSubtasks = useCallback(
    (row: Row<FlatTaskElement>) => {
      if (!expandedTasks.includes(row.original.id)) return;
      const newExpandedTasks = expandedTasks.filter((singleTask) => singleTask !== row.original.id);
      setExpandedTasks(newExpandedTasks);
    },
    [setExpandedTasks, expandedTasks]
  );

  const handleToggleSubtasks = useCallback(
    (row: Row<FlatTaskElement>) => {
      if (expandedTasks.includes(row.original.id)) {
        hideSubtasks(row);
      } else {
        showSubtasks(row);
      }
    },
    [hideSubtasks, showSubtasks, expandedTasks]
  );

  const levelPadding = String(28 * row.original.level);

  return (
    <>
      <tr key={row.id} className="h-8 group hover:bg-gray-50">
        <td className="opacity-0 group-hover:opacity-100 hover:cursor-move">
          <Icons.RiDraggable color="gray" size={16} className="mx-1" />
        </td>
        <td className="opacity-0 group-hover:opacity-100 hover:cursor-pointer">
          <input type="checkbox" className="hover:cursor-pointer"></input>
        </td>
        <td
          className="flex flex-row gap-2 h-8 text-sm items-center min-w-56 text-nowrap text-gray-700 font-semibold border-b"
          style={{ paddingLeft: `${levelPadding}px` }}>
          {hasSubtasks ? (
            <ButtonIcon
              icon={isExpanded ? <Icons.IoMdArrowDropdown /> : <Icons.IoMdArrowDropright />}
              onClick={() => handleToggleSubtasks(row)}
              className="flex items-center justify-center w-5 h-5 hover:bg-gray-200 rounded"></ButtonIcon>
          ) : (
            <ButtonIcon
              icon={<Icons.IoMdArrowDropright />}
              className="flex items-center justify-center w-5 h-5 opacity-0 hover:bg-gray-200 group-hover:opacity-100 text-gray-400 rounded"></ButtonIcon>
          )}
          {row.original.title}
        </td>
        {row.getVisibleCells().map((singleCell) => {
          if (singleCell.column.id === "title") return null;
          return (
            <td key={singleCell.id} className="h-8 border-b">
              {flexRender(singleCell.column.columnDef.cell, singleCell.getContext())}
            </td>
          );
        })}
      </tr>
    </>
  );
};
