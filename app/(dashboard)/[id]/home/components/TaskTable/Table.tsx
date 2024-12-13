"use client";
import React, { ReactNode, useMemo, useState } from "react";
import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { TaskTableRow } from "./TaskTableRow";
import { Icons } from "@/icons/icons";
import { FlatTaskElement, TaskElement, TaskStatus } from "../../types";
import { flattenTableData } from "../../_helpers/flattenTableData";
import AddTaskToTableDownside from "./AddTaskToTableDownside/AddTaskToTableDownside";

export const Table = ({ tasks, status }: { tasks: TaskElement[]; status: TaskStatus }) => {
  const [expandedTasks, setExpandedTasks] = useState<string[]>([]);
  const columns: ColumnDef<FlatTaskElement, ReactNode>[] = [
    {
      accessorKey: "title",
      header: () => <div className="text-left">Name</div>,
    },
    {
      accessorKey: "assignees",
      header: () => <div className="text-left w-[76px]">Assignee</div>,
      cell: (props) => (
        <div className="flex text-left items-center max-w-24 h-full hover:outline hover:outline-1 hover:outline-gray-400 hover:rounded hover:outline-offset-1 hover:cursor-pointer">
          <p>{props.getValue()}</p>
        </div>
      ),
    },
    {
      accessorKey: "dueDate",
      header: () => <div className="text-left w-[90px]">Due date</div>,
      cell: () => (
        <div className="flex text-left items-center max-w-24 h-full hover:outline hover:outline-1 hover:outline-gray-400 hover:rounded hover:outline-offset-1 hover:cursor-pointer">
          <Icons.LuCalendarPlus color="gray" size={15} className="mx-1" />
        </div>
      ),
    },
    {
      accessorKey: "priority",
      header: () => <div className="text-left w-[76px]">Priority</div>,
      cell: (props) => (
        <div className="flex text-left text-sm items-center max-w-24 h-full hover:outline hover:outline-1 hover:outline-gray-400 hover:rounded hover:outline-offset-1 hover:cursor-pointer">
          <Icons.CgFlagAlt color="gray" size={16} className="mx-1" />
          {props.getValue()}
        </div>
      ),
    },
    {
      accessorKey: "status",
      header: () => <div className="text-left w-[100px]">Status</div>,
      cell: (props) => (
        <div className="flex text-left text-sm items-center max-w-24 h-full hover:outline hover:outline-1 hover:outline-gray-400 hover:rounded hover:outline-offset-1 hover:cursor-pointer">
          {props.getValue()}
        </div>
      ),
    },
    {
      accessorKey: "comments",
      header: () => <div className="text-left w-[76px]">Comments</div>,
      cell: () => (
        <div className="flex items-center max-w-24 h-full hover:outline hover:outline-1 hover:outline-gray-400 hover:rounded hover:outline-offset-1 hover:cursor-pointer">
          <Icons.MdOutlineModeComment color="gray" size={15} className="mx-1" />
        </div>
      ),
    },
    {
      accessorKey: "addField",
      header: () => <div className="text-left w-[76px]">Add field</div>,
      cell: () => (
        <div className="flex items-center max-w-24 h-full hover:outline hover:outline-1 hover:outline-gray-400 hover:rounded hover:outline-offset-1 hover:cursor-pointer">
          <Icons.PiDotsThreeBold color="gray" size={15} className="mx-1" />
        </div>
      ),
    },
  ];

  const flatTasks = useMemo(() => flattenTableData(tasks, null, 0), [tasks]);

  const table = useReactTable({
    data: flatTasks,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table className="w-full">
      <thead className="w-full h-8">
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id} className="w-full text-xs h-8 ">
            <th></th>
            <th></th>
            {headerGroup.headers.map((header) => (
              <th
                key={header.id}
                colSpan={header.colSpan}
                className="font-normal text-gray-500 hover:bg-gray-200 hover:cursor-pointer border-b p-1">
                {flexRender(header.column.columnDef.header, header.getContext())}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody className="">
        {table.getRowModel().rows.map((singleRow) => {
          if (singleRow.original.level !== 0) {
            if (expandedTasks.includes(singleRow.original.parentId || "")) {
              return (
                <TaskTableRow
                  key={singleRow.id}
                  row={singleRow}
                  expandedTasks={expandedTasks}
                  setExpandedTasks={setExpandedTasks}
                />
              );
            }
          } else
            return (
              <>
                <TaskTableRow
                  key={singleRow.id}
                  row={singleRow}
                  expandedTasks={expandedTasks}
                  setExpandedTasks={setExpandedTasks}
                />
              </>
            );
        })}

        <AddTaskToTableDownside status={status} />
      </tbody>
    </table>
  );
};
