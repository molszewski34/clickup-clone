"use client";
import React, { ReactNode } from "react";
import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { TaskTableRow } from "./TaskTableRow";
import { Icons } from "@/icons/icons";
import { Task } from "@/app/server-actions/types";
import { NewTask } from "./NewTask";
import { TaskStatus } from "../../types";

type TableProps = {
  tasks: Task[];
  status?: TaskStatus;
};

export const Table = ({ tasks, status }: TableProps) => {
  const columns: ColumnDef<Task, ReactNode>[] = [
    {
      accessorKey: "title",
      header: () => <div className="text-left">Name</div>,
    },
    {
      accessorKey: "assignees",
      header: () => <div className="text-left w-[300px]">Assignee</div>,
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
            {headerGroup.headers.map((header) => (
              <th
                key={header.id}
                className="font-normal text-gray-500 hover:bg-gray-200 hover:cursor-pointer border-b p-1">
                {flexRender(header.column.columnDef.header, header.getContext())}
              </th>
            ))}
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
