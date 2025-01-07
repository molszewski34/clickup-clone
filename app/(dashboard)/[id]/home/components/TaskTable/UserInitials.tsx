import React from "react";
import { getInitials } from "../../../l/[projectId]/utils/getInitials";
import { User } from "@/app/server-actions/user/getUser";

type UserInitialsProps = {
  user: User;
};

export const UserInitials = ({ user }: UserInitialsProps) => {
  return (
    <div
      className="flex items-center justify-center bg-violet-500 h-6 w-6 border rounded-full text-xs font-normal text-gray-200 -mx-0.5 cursor-pointer"
      data-tooltip-target="tooltip-default">
      {getInitials(user.signUpFullName)}
    </div>
  );
};
