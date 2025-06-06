"use client";
import { Icons } from "@/icons/icons";
import { WorkspaceCard } from "./WorkspaceCard";
import { useChangeUserActiveWorkspace } from "@/hooks/useChangeUserActiveWorkspace";
import { WorkspaceWithMembers } from "@/hooks/useGetWorkspacesForUser";
import { Workspace } from "@/app/server-actions/types";
import { useUser } from "@/context/DataProvider/UserDataProvider";
import useUserAssociation from "@/hooks/useUserAssociation";

type ChangeWorkspaceProps = {
  workspacesToSwitch: WorkspaceWithMembers[];
  currentWorkspace: Workspace;
};

export const ChangeWorkspace = ({
  workspacesToSwitch,
  currentWorkspace,
}: ChangeWorkspaceProps) => {
  const { userId } = useUser();
  const { mutate } = useChangeUserActiveWorkspace();

  const handleButtonClick = () => {
    window.location.href = `/${currentWorkspace.id}/setting/users`;
  };

  const handleButtonSettingsClick = () => {
    window.location.href = `/${currentWorkspace.id}/setting/profile`;
  };

  const { userAssociation } = useUserAssociation();
  const userRole = userAssociation?.role;

  return (
    <>
      <div className="flex flex-col h-fit p-2">
        {/* <WorkspaceCard workspaceName="Karol Słupiński's workspace" numberOfMembers={1} /> */}
        <button
          className="flex items-center gap-2 w-full px-2 py-1 text-gray-700 text-sm font-normal hover:bg-gray-200 rounded-md"
          onClick={handleButtonSettingsClick}
        >
          <Icons.SettingsIcon className="text-gray-500 text-[16px] " />
          Settings
        </button>
        {userRole !== undefined && userRole == "Admin" && (
          <button
            className="flex items-center gap-2 w-full px-2 py-1 text-gray-700 text-sm font-normal hover:bg-gray-200 rounded-md"
            onClick={handleButtonClick}
          >
            <Icons.PeopleIcon className="text-gray-500 text-[16px] " />
            Manage users
          </button>
        )}
      </div>
      <div className="w-full h-px bg-gray-200"></div>
      <div className="Flex flex-col p-2 max-h-80 overflow-y-auto">
        <div className="flex justify-between items-center gap-2 p-2">
          <div className="text-[12px] font-medium text-gray-500">
            Switch Workspace
          </div>
          {/* <button className="flex items-center p-1 hover:bg-gray-200 rounded-md">
            <Icons.SearchIcon className="text-gray-500 text-[14px] " />
          </button> */}
        </div>
        {workspacesToSwitch &&
          workspacesToSwitch.map((singleWorkspace) => {
            return (
              <button
                className="flex items-center hover:bg-gray-200 rounded-md"
                key={`workspace-card-${singleWorkspace.id}`}
                onClick={() =>
                  mutate({ userId, newActiveWorkspaceId: singleWorkspace.id })
                }
              >
                <WorkspaceCard
                  workspaceName={singleWorkspace.name}
                  workspaceNumberOfMembers={singleWorkspace.members.length}
                />
              </button>
            );
          })}
      </div>
      <div className="w-full p-2">
        <button className="flex  items-center gap-2 w-full px-2 py-1 text-gray-700 text-sm font-normal hover:bg-gray-200 rounded-md">
          <Icons.PlusIco className="text-gray-500 text-[16px] " />
          New Workspace
        </button>
      </div>
    </>
  );
};
