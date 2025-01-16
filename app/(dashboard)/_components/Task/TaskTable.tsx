"use client";
import React, { ReactNode } from "react";
import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { TaskTableRow } from "./TaskTableRow";
import { Task } from "@/app/server-actions/types";
import { NewTask } from "./NewTask";
import { TaskStatus } from "../../[id]/home/types";

type TableProps = {
  tasks: Task[];
  status?: TaskStatus;
};

export const TaskTable = ({ tasks, status }: TableProps) => {
  const columns: ColumnDef<Task, ReactNode>[] = [
    {
      accessorKey: "status-icon",
      header: () => <div className="text-left"></div>,
    },
    {
      accessorKey: "title",
      header: () => <div className="text-left">Name</div>,
    },
    {
      accessorKey: "assignees",
      header: () => <div className="text-left w-48">Assignee</div>,
    },
    // {
    //   accessorKey: "dueDate",
    //   header: () => <div className="text-left w-[90px]">Due date</div>,
    // }, TODO: uncomment when implementing Date
    {
      accessorKey: "priority",
      header: () => <div className="text-left w-[76px]">Priority</div>,
    },
    {
      accessorKey: "status",
      header: () => <div className="text-left w-[100px]">Status</div>,
    },
  ];

  const table = useReactTable({
    data: tasks,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table className="w-full">
      <thead className="w-full h-8">
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id} className="w-full text-xs h-8 ">
            {headerGroup.headers.map((header) => {
              const isDisabled = header.id === "comments" || header.id === "addField";
              return (
                <th
                  key={header.id}
                  className={`font-normal ${
                    isDisabled
                      ? "hover:cursor-not-allowed bg-gray-50 text-gray-300"
                      : "hover:cursor-pointer hover:bg-gray-200 text-gray-500"
                  }  border-b p-1`}>
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              );
            })}
          </tr>
        ))}
      </thead>
      <tbody className="">
        {table.getRowModel().rows.map((singleRow) => {
          return <TaskTableRow key={singleRow.id} row={singleRow} />;
        })}
        <NewTask status={status} />
      </tbody>
    </table>
  );
};
