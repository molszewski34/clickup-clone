"use client";

import React, { useEffect, useState } from "react";
import { Icons } from "@/icons/icons";
import { useUser } from "@/context/DataProvider/UserDataProvider";
import { getWorkspaces } from "../server-actions/workspace/getWorkspaces";
import { getProjects } from "../server-actions/project/getProjects";
import { getTasks } from "../server-actions/task/getTasks";
import { getSubTasks } from "../server-actions/subtasks/getSubtasks";
import { Project, Task } from "../server-actions/types";
import CardContainer from "./Components/CardContainer";

const RenderButtons = () => {
  const { userId } = useUser();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (userId) {
        const workspaces = await getWorkspaces(userId);
        const workspacesWithProjects = await Promise.all(
          workspaces.map(async (workspace) => {
            const projects = await getProjects(userId, workspace.id);
            const projectsWithTasks = await Promise.all(
              projects.map(async (project) => {
                const tasks = await getTasks(userId, workspace.id, project.id);
                const tasksWithSubTasks = await Promise.all(
                  tasks.map(async (task) => {
                    const subtasks = await getSubTasks(
                      userId,
                      workspace.id,
                      project.id,
                      task.id
                    );
                    return { ...task, subtasks };
                  })
                );
                return {
                  ...project,
                  tasks: tasksWithSubTasks,
                  workspaceName: workspace.name,
                };
              })
            );
            return { ...workspace, projects: projectsWithTasks };
          })
        );
        setData(workspacesWithProjects);
      }
    };

    fetchData();
  }, [userId]);

  return (
    <>
      {data.flatMap((workspace) =>
        workspace.projects.map((project: Project) => (
          <div key={project.id} className="mb-2">
            <button className="flex justify-between w-full items-center mx-2 p-2 py-1 rounded-md hover:bg-gray-100 group/hidden">
              <div className="flex gap-2 items-center">
                <Icons.ListOutline className="text-[16px] text-gray-700" />
                <div className="font-sans font-medium text-sm text-gray-700">
                  {project.name}
                </div>
                <div>&bull;</div>
                <div className="font-sans text-sm text-gray-400">
                  In {project.name}
                </div>
              </div>
              <div className=" hidden gap-1 items-center group-hover/hidden:flex">
                <button className="w-6 h-6 flex justify-center items-center rounded-md border bg-white border-gray-200 hover:bg-gray-200">
                  <Icons.NewTabIcon className="text-[12px] text-gray-500" />
                </button>
                <button className="w-6 h-6 flex justify-center items-center rounded-md border bg-white border-gray-200 hover:bg-gray-200">
                  <Icons.AttachIcon className="text-[12px] text-gray-500" />
                </button>
              </div>
            </button>
            {project.tasks.map((task: Task) => (
              <div key={task.id} className="">
                <button className="flex justify-between w-full items-center mx-2 p-2 py-1 rounded-md hover:bg-gray-100 group/hidden">
                  <div className="flex gap-2 items-center">
                    <Icons.DotIcon className="text-[16px] text-gray-700" />
                    <div className="font-sans font-medium text-sm text-gray-700">
                      {task.name || task.taskName}
                    </div>
                    <div>&bull;</div>
                    <div className="font-sans text-sm text-gray-400">
                      In {project.name}
                    </div>
                  </div>
                  <div className=" hidden gap-1 items-center group-hover/hidden:flex">
                    <button className="w-6 h-6 flex justify-center items-center rounded-md border bg-white border-gray-200 hover:bg-gray-200">
                      <Icons.NewTabIcon className="text-[12px] text-gray-500" />
                    </button>
                    <button className="w-6 h-6 flex justify-center items-center rounded-md border bg-white border-gray-200 hover:bg-gray-200">
                      <Icons.AttachIcon className="text-[12px] text-gray-500" />
                    </button>
                  </div>
                </button>
                {task.subtasks.map((subtask: Task) => (
                  <div key={subtask.id} className="">
                    <button className="flex justify-between w-full items-center mx-2 p-2 py-1 rounded-md hover:bg-gray-100 group/hidden">
                      <div className="flex gap-2 items-center">
                        <Icons.DotIcon className="text-[16px] text-gray-700" />
                        <div className="font-sans text-sm font-medium text-gray-700">
                          {subtask.name}
                        </div>
                        <div>&bull;</div>
                        <div className="font-sans text-sm text-gray-400">
                          In {task.name}
                        </div>
                      </div>
                      <div className=" hidden gap-1 items-center  group-hover/hidden:flex">
                        <button className="w-6 h-6 flex justify-center items-center rounded-md border bg-white border-gray-200 hover:bg-gray-200">
                          <Icons.NewTabIcon className="text-[12px] text-gray-500" />
                        </button>
                        <button className="w-6 h-6 flex justify-center items-center rounded-md border bg-white border-gray-200 hover:bg-gray-200">
                          <Icons.AttachIcon className="text-[12px] text-gray-500" />
                        </button>
                      </div>
                    </button>
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))
      )}
    </>
  );
};

export default function RecentsContent() {
  return (
    <CardContainer title="Recents" NumberIcons={2} height="336px">
      <div className="w-full h-[258px] pb-4 custom-scrollbar overflow-y-auto overflow-x-hidden">
        <div className="flex flex-col w-full pr-5">
          <RenderButtons />
        </div>
      </div>
    </CardContainer>
  );
}
