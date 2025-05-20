"use client";

import React, { useEffect, useState } from "react";
import { Icons } from "@/icons/icons";
import { useUser } from "@/context/DataProvider/UserDataProvider";

import { getTasks } from "../server-actions/task/getTasks";
import { getSubTasks } from "../server-actions/subtasks/getSubtasks";
import { Project, Space, Task } from "../server-actions/types";
import CardContainer from "./Components/CardContainer";
import { useRouter } from "next/navigation";
import { useData } from "@/context/DataProvider/DataProvider";
import { getSpaces } from "../server-actions/space/getSpaces";
import { getLists } from "../server-actions/List/getLists";

const RenderButtons = () => {
  const { setSpaceId, setListId, setListName } = useData();
  const { userId } = useUser();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any[]>([]);
  const router = useRouter();

  const handlePushToTaskPage = (taskId: string) => {
    router.push(`/t/${taskId}`);
  };

  const handleListClick = (
    spaceId: string,
    listId: string,
    listName: string
  ) => {
    setSpaceId(spaceId);
    setListId(listId);
    setListName(listName);
    router.push(`/${userId}/l/${listId}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (userId) {
        const spaces = await getSpaces(userId);
        const spacesWith = await Promise.all(
          spaces.map(async (space: Space) => {
            const lists = await getLists(userId, space.id);
            const listsWithTasks = await Promise.all(
              lists.map(async (list) => {
                const tasks = await getTasks(userId, space.id, list.id);
                const tasksWithSubTasks = await Promise.all(
                  tasks.map(async (task) => {
                    if (!task.id) return { ...task, subtasks: [] };

                    const subtasks = await getSubTasks(
                      userId,
                      space.id,
                      list.id,
                      task.id
                    );
                    return { ...task, subtasks };
                  })
                );
                return {
                  ...list,
                  tasks: tasksWithSubTasks,
                  spaceName: space.name,
                };
              })
            );
            return { ...space, lists: listsWithTasks };
          })
        );
        setData(spacesWith);
      }
    };

    fetchData();
  }, [userId]);

  return (
    <>
      {data.flatMap((space) =>
        space.lists.map((list: Project) => (
          <div key={list.id} className="mb-2">
            <div
              onClick={() =>
                handleListClick(space.id, list.id ?? "", list.name ?? "")
              }
              className="flex justify-between cursor-pointer w-full items-center mx-2 p-2 py-1 rounded-md hover:bg-gray-100 group/hidden"
            >
              <div className="flex gap-2 items-center">
                <Icons.ListOutline className="text-[16px] text-gray-700" />
                <div className="font-sans font-medium text-sm text-gray-700">
                  {list.name}
                </div>
                <div>&bull;</div>
                <div className="font-sans text-sm text-gray-400">
                  In {space.name}
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
            </div>
            {list.tasks.map((task: Task) => (
              <div key={task.id} className="">
                <div
                  onClick={() => {
                    if (task.id) {
                      handlePushToTaskPage(task.id);
                    }
                  }}
                  className="flex justify-between w-full items-center mx-2 p-2 py-1 cursor-pointer rounded-md hover:bg-gray-100 group/hidden"
                >
                  <div className="flex gap-2 items-center">
                    <Icons.DotIcon className="text-[16px] text-gray-700" />
                    <div className="font-sans font-medium text-sm text-gray-700">
                      {task.taskName}
                    </div>
                    <div>&bull;</div>
                    <div className="font-sans text-sm text-gray-400">
                      In {list.name}
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
                </div>
                {/* {task.subtasks.map((subtask: Task) => ( //KAROL: zakomentowane bo nie mamy w tej chwili subtasków
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
                ))} */}
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
