"use client";

import React, { useEffect, useState } from "react";
import { useTasksQuery } from "@/hooks/useTaskQuery";
import { useData } from "@/context/DataProvider/DataProvider";
import { TaskTable } from "@/app/(dashboard)/_components/Task/TaskTable";

import { Space, Task } from "@/app/server-actions/types";
import { useWorkspaceFormContext } from "@/context/FormProviders/WorkspaceFormProvider";

import { StatusBadge } from "@/app/(dashboard)/_components/Task/StatusBadge";
import ButtonIcon from "@/app/(dashboard)/ui/ButtonIcon";
import { Icons } from "@/icons/icons";
import { Button } from "@/components/Button";
import useGetCurrentWorkspace from "@/hooks/useGetCurrentWorkspace";
import { TaskStatus } from "@/app/(dashboard)/[id]/home/types";

export type NewTaskVisibility = {
  status: TaskStatus;
  newTaskVisibility: "top" | "bottom" | "none";
};

const List = () => {
  const { formData } = useWorkspaceFormContext();
  const { spaceId, listId } = useData();
  const { workspaceId } = useGetCurrentWorkspace();

  const { data: tasks = [] } = useTasksQuery(
    workspaceId as string,
    spaceId,
    listId
  );

  const [openedNewTask, setOpenedNewTask] = useState<NewTaskVisibility>({
    status: TaskStatus.todo,
    newTaskVisibility: "none",
  });

  const [visibleGroups, setVisibleGroups] = useState<TaskStatus[]>(() => {
    if (typeof window !== "undefined") {
      const saveVisibleGroup = localStorage.getItem("visibleGroups");
      return saveVisibleGroup
        ? (JSON.parse(saveVisibleGroup) as TaskStatus[])
        : [];
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("visibleGroups", JSON.stringify(visibleGroups));
  }, [visibleGroups]);

  const handleVisibleGroups = (status: TaskStatus) => {
    if (visibleGroups.includes(status)) {
      setVisibleGroups(visibleGroups.filter((s) => s !== status));
    } else {
      setVisibleGroups([...visibleGroups, status]);
    }
  };

  const applyFilters = (tasks: Task[], filtersState: Space["filtersState"]) => {
    return tasks.filter((task) => {
      if (
        filtersState?.searchQuery &&
        !task.taskName
          .toLowerCase()
          .includes(filtersState.searchQuery.toLowerCase())
      ) {
        return false;
      }
      return true;
    });
  };

  const filteredTasks = applyFilters(tasks, formData.filtersState);

  const tasksGroupedByStatus = {
    [TaskStatus.todo]: filteredTasks.filter(
      (task) => task.status === TaskStatus.todo
    ),
    [TaskStatus.inProgress]: filteredTasks.filter(
      (task) => task.status === TaskStatus.inProgress
    ),
    [TaskStatus.completed]: filteredTasks.filter(
      (task) => task.status === TaskStatus.completed
    ),
  };

  const tableOrder = formData.filtersState?.statuses?.includes(
    TaskStatus.completed
  )
    ? [TaskStatus.completed, TaskStatus.inProgress, TaskStatus.todo]
    : [TaskStatus.inProgress, TaskStatus.todo];

  return (
    <div className="flex flex-col gap-4 p-5">
      {tableOrder.map((status) => {
        const isGroupVisible = visibleGroups.includes(status);
        return (
          <div key={status}>
            <div className="flex flex-row items-center gap-3 text-gray-500">
              <ButtonIcon
                icon={
                  isGroupVisible ? (
                    <Icons.IoMdArrowDropdown />
                  ) : (
                    <Icons.IoMdArrowDropright />
                  )
                }
                onClick={() => handleVisibleGroups(status)}
                className="flex items-center justify-center w-5 h-5 hover:bg-gray-200 rounded"
              />
              <StatusBadge taskStatus={status} />
              <p className="text-xs font-semibold">
                {tasksGroupedByStatus[status].length}
              </p>
              {openedNewTask.newTaskVisibility !== "top" && (
                <Button
                  color="gray"
                  className="px-0.5 gap-[8px] rounded-md text-xs font-semibold hover:bg-gray-100 border-transparent"
                  onClick={() =>
                    setOpenedNewTask({
                      status: status,
                      newTaskVisibility: "top",
                    })
                  }
                >
                  <div className="flex flex-row items-center gap-1 text-gray-500">
                    <Icons.PlusIco size={14} />
                    Add Task
                  </div>
                </Button>
              )}
            </div>
            {isGroupVisible && (
              <TaskTable
                tasks={tasksGroupedByStatus[status]}
                status={status as TaskStatus}
                openedNewTask={openedNewTask}
                setOpenedNewTask={setOpenedNewTask}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default List;
