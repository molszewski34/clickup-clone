import { useUser } from "@/context/DataProvider/UserDataProvider";
import { Icons } from "@/icons/icons";
import { WorkspaceCard } from "../WorkspaceCard";
import { useGetWorkspacesForUser } from "@/hooks/useGetWorkspacesForUser";

export const ChangeSpacesModal = () => {
  const { userId } = useUser();
  const { data: workspacesData } = useGetWorkspacesForUser(userId);

  const handleButtonClick = () => {
    window.location.href = `/${userId}/setting/users`;
  };

  const handleButtonSettingsClick = () => {
    window.location.href = `/${userId}/setting/profile`;
  };

  return (
    <>
      <div className="flex flex-col h-fit p-2">
        {/* <WorkspaceCard workspaceName="Karol Słupiński's workspace" numberOfMembers={1} /> */}
        <button
          className="flex items-center gap-2 w-full px-2 py-1 text-gray-700 text-sm font-normal hover:bg-gray-200 rounded-md"
          onClick={handleButtonSettingsClick}>
          <Icons.SettingsIcon className="text-gray-500 text-[16px] " />
          Settings
        </button>
        <button
          className="flex items-center gap-2 w-full px-2 py-1 text-gray-700 text-sm font-normal hover:bg-gray-200 rounded-md"
          onClick={handleButtonClick}>
          <Icons.PeopleIcon className="text-gray-500 text-[16px] " />
          Manage users
        </button>
      </div>
      <div className="w-full h-px bg-gray-200"></div>
      <div className="Flex flex-col p-2 max-h-80 overflow-y-auto">
        <div className="flex justify-between items-center gap-2 p-2">
          <div className="text-[12px] font-medium text-gray-500">Switch Workspace</div>
          {/* <button className="flex items-center p-1 hover:bg-gray-200 rounded-md">
            <Icons.SearchIcon className="text-gray-500 text-[14px] " />
          </button> */}
        </div>
        {workspacesData &&
          workspacesData.map((singleWorkspace) => {
            return (
              <button
                className="flex items-center hover:bg-gray-200 rounded-md"
                key={`workspace-card-${singleWorkspace.id}`}>
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
