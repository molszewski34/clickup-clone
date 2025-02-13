import { getInitials } from "@/app/(dashboard)/[id]/l/[projectId]/utils/getInitials";
import { WorkspaceWithMembers } from "@/hooks/useGetWorkspacesForUser";
import React from "react";

type WorkspaceCardProps = {
  workspaceName: WorkspaceWithMembers["name"];
  workspaceNumberOfMembers: number;
};

export const WorkspaceCard = ({ workspaceName, workspaceNumberOfMembers }: WorkspaceCardProps) => {
  return (
    <div className="flex items-center gap-2 p-2">
      <div className="flex justify-center items-center w-8 h-8 bg-emerald-600 rounded-md text-white text-xs font-sans font-bold">
        {getInitials(workspaceName)}
      </div>
      <div className="flex-grow min-w-0 flex flex-col">
        <div className="text-[14px] text-left w-[176px] truncate leading-4 font-medium text-gray-800">
          {workspaceName}
        </div>
        <div className="text-[14px] leading-4 font-normal text-gray-500 text-left">
          {`${workspaceNumberOfMembers} ${workspaceNumberOfMembers > 1 ? "members" : "member"}`}
        </div>
      </div>
    </div>
  );
};
