"use client";
import React, { ReactNode } from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { TaskTableRow } from "./TaskTableRow";
import { Task } from "@/app/server-actions/types";
import { NewTask } from "./NewTask";
import { TaskStatus } from "../../[id]/home/types";
import { Button } from "@/components/Button";
import { Icons } from "@/icons/icons";
import { NewTaskVisibility } from "../../[id]/l/[projectId]/components/TasksList";

type TableProps = {
  tasks: Task[];
  openedNewTask: NewTaskVisibility;
  setOpenedNewTask: (arg: NewTaskVisibility) => void;
  status?: TaskStatus;
};

export const TaskTable = ({
  tasks,
  openedNewTask,
  setOpenedNewTask,
  status,
}: TableProps) => {
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
              const isDisabled =
                header.id === "comments" || header.id === "addField";
              return (
                <th
                  key={header.id}
                  className={`font-normal ${
                    isDisabled
                      ? "hover:cursor-not-allowed bg-gray-50 text-gray-300"
                      : "hover:cursor-pointer hover:bg-gray-200 text-gray-500"
                  }  border-b p-1`}
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              );
            })}
          </tr>
        ))}
      </thead>
      <tbody className="">
        {openedNewTask.status === status &&
          openedNewTask.newTaskVisibility === "top" && (
            <NewTask
              status={status}
              openedNewTask={openedNewTask}
              setOpenedNewTask={setOpenedNewTask}
            />
          )}
        {table.getRowModel().rows.map((singleRow) => {
          return <TaskTableRow key={singleRow.id} row={singleRow} />;
        })}
        {openedNewTask.status === status &&
        openedNewTask.newTaskVisibility === "bottom" ? (
          <NewTask
            status={status}
            openedNewTask={openedNewTask}
            setOpenedNewTask={setOpenedNewTask}
          />
        ) : (
          status && (
            <>
              <td
                key="status-icon"
                className="justify-items-center text-gray-400"
              >
                <Icons.PlusIco size={14} />
              </td>
              <td
                colSpan={4}
                className="items-center min-w-56"
                onClick={() =>
                  setOpenedNewTask({
                    status: status,
                    newTaskVisibility: "bottom",
                  })
                }
              >
                <Button
                  color="gray"
                  className="h-6 rounded-[4.5px] -ml-2 text-sm text-gray-200 border-transparent group-hover:border-gray-300"
                >
                  Add Task
                </Button>
              </td>
            </>
          )
        )}
      </tbody>
    </table>
  );
};
