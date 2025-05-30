"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getInitials } from "../utils/getInitials";
import { useTaskFormContext } from "@/context/FormProviders/TaskFormProvider";
import { User } from "@/app/server-actions/types";
import { Icons } from "@/icons/icons";
import { useUpdateTaskForm } from "@/app/(dashboard)/_hooks/useUpdateTaskForm";
import { useUpdateTask } from "@/hooks/useUpdateTask";
import { useUser } from "@/context/DataProvider/UserDataProvider";
import useGetCurrentWorkspace from "@/hooks/useGetCurrentWorkspace";
import getUsersAssignedToWorkspace from "@/app/server-actions/user/getUsersAssignedToWorkspace";
import { createUserAssociationToTask } from "@/app/server-actions/user2task/createUserAssociationToTask";

import { useData } from "@/context/DataProvider/DataProvider";
import { checkIfUserAssociationToTaskExist } from "@/app/server-actions/user2task/checkIfUserAssociationToTaskExist";

type UsersListProps = {
  filterUser: string;
};

export const UsersList = ({ filterUser }: UsersListProps) => {
  const { workspaceId } = useGetCurrentWorkspace();
  const { spaceId, listId, taskId } = useData();

  const { data: users = [] } = useQuery<User[]>({
    queryKey: ["users", workspaceId],
    queryFn: () => {
      if (!workspaceId) return Promise.resolve([]);
      return getUsersAssignedToWorkspace(workspaceId);
    },
    enabled: !!workspaceId,
  });

  const { updateTaskForm } = useUpdateTaskForm();
  const { mutate } = useUpdateTask();
  const { formData } = useTaskFormContext();
  const { userId } = useUser();

  const filteredUsers: User[] = users.filter(
    (singleUser) =>
      singleUser.signUpFullName !== "Unregistered" &&
      (singleUser.signUpEmail.includes(filterUser) ||
        singleUser.signUpFullName.includes(filterUser))
  );

  const handleClickOnUser = async (userClicked: User) => {
    const isAlreadyAssigned = formData.assignees.some(
      (singleAssignee) => singleAssignee.id === userClicked.id
    );

    if (isAlreadyAssigned) {
      updateTaskForm(
        "assignees",
        formData.assignees.filter(
          (singleAssignee) => singleAssignee.id !== userClicked.id
        )
      );
      await checkIfUserAssociationToTaskExist(userClicked.id, taskId);
    } else {
      updateTaskForm("assignees", [...formData.assignees, userClicked]);
      await createUserAssociationToTask(
        userClicked.id,
        spaceId,
        listId,
        taskId
      );
    }

    mutate();
  };

  return (
    <ul className="max-h-[308px] overflow-y-scroll custom-scrollbar px-2 py-1">
      {filteredUsers.map((user) => {
        const isAssigned = formData.assignees.find(
          (singleAssignee) => singleAssignee.id === user.id
        );
        return (
          <li
            className="cursor-pointer"
            key={user.id}
            onClick={(e) => {
              e.stopPropagation();
              handleClickOnUser(user);
            }}
          >
            <div className="group/item flex items-center gap-3 py-1.5 px-1 rounded-lg hover:bg-gray-100">
              <span
                className={`relative flex items-center justify-center rounded-full w-8 h-8 bg-indigo-600 text-white text-md font-bold ml-1 ${
                  isAssigned &&
                  "outline outline-[3px] outline-indigo-400 outline-offset-1"
                }`}
                key={`${user.id}-add-assignee-element`}
              >
                {getInitials(user.signUpFullName)}
                {isAssigned && (
                  <div className="absolute z-10 left-5 top-5 invisible group-hover/item:visible">
                    <Icons.IoMdCloseCircle
                      color="red"
                      className=" bg-white rounded-full"
                    />
                  </div>
                )}
              </span>
              <p
                className={`text-sm text-gray-800 ${isAssigned && " font-semibold"}`}
              >
                {userId === user.id ? "Me" : user.signUpFullName}
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
