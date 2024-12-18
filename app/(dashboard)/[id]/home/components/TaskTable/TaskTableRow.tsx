"use client";
import { flexRender, Row } from "@tanstack/react-table";
import React from "react";
import { Task } from "@/app/server-actions/types";
import { UserInitials } from "./UserInitials";
import { Icons } from "@/icons/icons";

type TaskTableRowProps = {
  row: Row<Task>;
};

export const TaskTableRow = ({ row }: TaskTableRowProps) => {
  return (
    <>
      <tr key={row.id} className="h-8 group hover:bg-gray-50 table-row">
        <td className="flex flex-row gap-2 h-8 text-sm items-center min-w-56 text-nowrap text-gray-700 font-semibold border-b">
          {row.original.taskName}
        </td>
        <td
          className="border-b hover:outline hover:outline-offset-0 hover:outline-1 hover:outline-gray-400 hover:rounded  hover:cursor-pointer"
          key={`assignees-${row.original.id}`}>
          <div className="flex flex-row" key={"a"}>
            {row.original.assignees && row.original.assignees?.length > 0 ? (
              row.original.assignees?.map((singleAssignee) => {
                return <UserInitials key={singleAssignee.email} user={singleAssignee} />; // K:TODO: assignee powinien miec ten sam type co User
              })
            ) : (
              <Icons.HiOutlineUserAdd color="gray" size={16}></Icons.HiOutlineUserAdd>
            )}
          </div>
        </td>
        {row.getVisibleCells().map((singleCell) => {
          if (singleCell.column.id === "title") return null;
          if (singleCell.column.id === "assignees") return null;
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
