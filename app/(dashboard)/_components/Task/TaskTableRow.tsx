"use client";
import { Row } from "@tanstack/react-table";
import React, { useState } from "react";
import { Task } from "@/app/server-actions/types";
import { UserInitials } from "./UserInitials";
import { Icons } from "@/icons/icons";
import { EditAssignee } from "./EditAssignee";
import { useTaskFormContext } from "@/context/FormProviders/TaskFormProvider";
import { Priority } from "./PriorityIcon";
import { EditPriority } from "./EditPriority";
import { StatusIcon } from "./StatusIcon";
import { StatusBadge } from "./StatusBadge";
import { EditStatus } from "./EditStatus";
import { useRouter } from "next/navigation";

type TaskTableRowProps = {
  row: Row<Task>;
};

export type TaskRowEditableCell = "assignee" | "priority" | "status-left" | "status-right" | "";

export const TaskTableRow = ({ row }: TaskTableRowProps) => {
  const [taskRowEditableCell, setTaskRowEditableCell] = useState<TaskRowEditableCell>("");
  const { setFormData } = useTaskFormContext();
  const router = useRouter();
  const handlePushToTaskPage = (taskId: string) => {
    router.push(`/t/${taskId}`);
  };

  return (
    <>
      <tr
        key={row.id}
        className="table-row group hover:bg-gray-50"
        onClick={() => setFormData(row.original)}>
        <td className="justify-items-center border-b group">
          <div
            className="relative hover:bg-gray-200 hover:cursor-pointer h-6 w-6 place-content-center rounded-md"
            onClick={() => setTaskRowEditableCell("status-left")}>
            <StatusIcon taskStatus={row.original.status} />
            {taskRowEditableCell === "status-left" && (
              <EditStatus setTaskRowEditableCell={setTaskRowEditableCell} />
            )}
          </div>
        </td>
        <td
          className="text-sm items-center min-w-56 text-nowrap text-gray-700 font-semibold border-b group group-hover:bg-gray-50"
          onClick={() => handlePushToTaskPage(row.original.id)}>
          {row.original.taskName}
        </td>
        <td
          className="relative border-b hover:outline hover:outline-offset-0 hover:outline-1 hover:outline-gray-400 hover:rounded hover:cursor-pointer"
          key={`assignees-${row.original.id}`}
          onClick={() => {
            setTaskRowEditableCell("assignee");
          }}>
          <div className="flex flex-row" key={`user-initials-${row.original.id}`}>
            {row.original.assignees && row.original.assignees?.length > 0 ? (
              row.original.assignees?.map((singleAssignee) => {
                return <UserInitials key={singleAssignee.id} user={singleAssignee} />;
              })
            ) : (
              <Icons.HiOutlineUserAdd color="gray" size={16}></Icons.HiOutlineUserAdd>
            )}
            {taskRowEditableCell === "assignee" && (
              <div className="absolute top-10 z-10">
                <EditAssignee setTaskRowEditableCell={setTaskRowEditableCell} />
              </div>
            )}
          </div>
        </td>
        <td
          className="border-b hover:outline hover:outline-offset-0 hover:outline-1 hover:outline-gray-400 hover:rounded hover:cursor-pointer text-left text-sm"
          onClick={() => setTaskRowEditableCell("priority")}>
          <div className="flex flex-row items-center gap-2 w-32">
            <Priority taskPriority={row.original.priority} />
            <p className="text-gray-800 text-sm capitalize">{row.original.priority}</p>
          </div>
          {taskRowEditableCell === "priority" && (
            <EditPriority setTaskRowEditableCell={setTaskRowEditableCell} />
          )}
        </td>
        <td
          className="relative border-b hover:outline hover:outline-offset-0 hover:outline-1 hover:outline-gray-400 hover:rounded hover:cursor-pointer text-left text-sm"
          onClick={() => setTaskRowEditableCell("status-right")}>
          <StatusBadge taskStatus={row.original.status} />
          {taskRowEditableCell === "status-right" && (
            <EditStatus setTaskRowEditableCell={setTaskRowEditableCell} />
          )}
        </td>
      </tr>
    </>
  );
};
