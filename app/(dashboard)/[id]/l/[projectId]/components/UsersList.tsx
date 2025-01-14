"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getUsers } from "@/app/server-actions/user/getUser";
import { getInitials } from "../utils/getInitials";
import { useTaskFormContext } from "@/context/FormProviders/TaskFormProvider";
import { User } from "@/app/server-actions/types";
import { Icons } from "@/icons/icons";
import { useUpdateTaskForm } from "@/app/(dashboard)/_hooks/useUpdateTaskForm";
import { useUpdateTask } from "@/hooks/useUpdateTask";

type UsersListProps = {
  filterUser: string;
};

export const UsersList = ({ filterUser }: UsersListProps) => {
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });
  const { updateTaskForm } = useUpdateTaskForm();
  const { mutate } = useUpdateTask();
  const { formData } = useTaskFormContext();

  const filteredUsers: User[] = users.filter(
    (singleUser) =>
      singleUser.signUpEmail.includes(filterUser) || singleUser.signUpFullName.includes(filterUser)
  );

  const handleClickOnUser = (userClicked: User) => {
    if (formData.assignees.find((singleAssignee) => singleAssignee.id === userClicked.id)) {
      updateTaskForm(
        "assignees",
        formData.assignees.filter((singleAssignee) => singleAssignee.id !== userClicked.id)
      );
    } else {
      updateTaskForm("assignees", [...formData.assignees, userClicked]);
    }
  };

  return (
    <ul className="max-h-[308px] overflow-y-scroll custom-scrollbar px-2 py-1">
      {filteredUsers.map((user) => (
        <li
          className="cursor-pointer"
          key={user.id}
          onClick={(e) => {
            e.stopPropagation();
            handleClickOnUser(user);
            mutate();
          }}>
          <div className="group/item flex items-center gap-2 py-2 px-1 rounded-lg hover:bg-gray-100">
            <span
              className={`relative flex items-center justify-center rounded-full w-8 h-8 bg-indigo-600 text-white text-md font-bold ml-1 ${
                formData.assignees.find((singleAssignee) => singleAssignee.id === user.id) &&
                "outline outline-2 outline-indigo-400 outline-offset-2"
              }`}
              key={`${user.id}-add-assignee-element`}>
              {getInitials(user.signUpFullName)}
              {formData.assignees.find((singleAssignee) => singleAssignee.id === user.id) && (
                <div className="absolute z-10 left-5 top-5 invisible group-hover/item:visible">
                  <Icons.IoMdCloseCircle color="red" className=" bg-white rounded-full" />
                </div>
              )}
            </span>
            {user.signUpFullName}
          </div>
        </li>
      ))}
    </ul>
  );
};
