import React from "react";
import { User } from "@/app/server-actions/types";
import { getInitials } from "../../[id]/l/[projectId]/utils/getInitials";

type UserInitialsProps = {
  user: User;
};

export const UserInitials = ({ user }: UserInitialsProps) => {
  return (
    <div
      className="flex items-center justify-center bg-indigo-600 h-6 w-6 outline outline-1 rounded-full text-xs font-bold text-gray-200 -mx-0.5 cursor-pointer"
      data-tooltip-target="tooltip-default">
      {getInitials(user.signUpFullName)}
    </div>
  );
};
