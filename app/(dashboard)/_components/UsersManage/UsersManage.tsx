import { SetStateAction, useState } from "react";
import { Icons } from "@/icons/icons";
import SearchManageGuests from "./components/Search/SearchManageGuests";
import SearchManageLimited from "./components/Search/SearchManageLimited";
import SearchManageFull from "./components/Search/SearchManageFull/SearchManageFull";
import ContentManageGuests from "./components/ContentMenage/ContentManageGuests";
import ContentManageLimited from "./components/ContentMenage/ContentManageLimited";
import ContentManageFull from "./components/ContentMenage/ContentManageFull";
import useGetCurrentWorkspace from "@/hooks/useGetCurrentWorkspace";
import getUsersAssignedToWorkspace from "@/app/server-actions/user/getUsersAssignedToWorkspace";
import { useQuery } from "@tanstack/react-query";
import { User } from "@/app/server-actions/types";
import RemoveUserFromWorkspaceButton from "./RemoveUserFromWorkspaceButton";

export default function UsersManage() {
  const [activeTab, setActiveTab] = useState("full");
  const [filterUser, setFilterUser] = useState("");
  const [associatonId, setAssociationId] = useState("");
  const [
    openRemoveUserFromWorkspaceModal,
    setOpenRemoveUserFromWorkspaceModal,
  ] = useState(false);
  const [removedUserName, setRemovedUserName] = useState("");
  const { workspaceId } = useGetCurrentWorkspace();

  const { data: users = [] } = useQuery<User[]>({
    queryKey: ["users", workspaceId],
    queryFn: () => {
      if (!workspaceId) return Promise.resolve([]);
      return getUsersAssignedToWorkspace(workspaceId);
    },
    enabled: !!workspaceId,
  });

  const filteredUsers: User[] = users.filter(
    (singleUser) =>
      singleUser.signUpEmail.includes(filterUser) ||
      singleUser.signUpFullName.includes(filterUser)
  );

  const handleSearchInputChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setFilterUser(event.target.value);
  };

  const renderSearchComponent = () => {
    switch (activeTab) {
      case "guests":
        return <SearchManageGuests />;
      case "limited":
        return <SearchManageLimited />;
      case "full":
      default:
        return (
          <SearchManageFull
            filterUser={filterUser}
            onSearchInputChange={handleSearchInputChange}
          />
        );
    }
  };

  const renderContentComponent = () => {
    switch (activeTab) {
      case "guests":
        return <ContentManageGuests />;
      case "limited":
        return <ContentManageLimited />;
      case "full":
      default:
        return (
          <ContentManageFull
            filterUser={filterUser}
            openRemoveUserFromWorkspaceModal={openRemoveUserFromWorkspaceModal}
            setOpenRemoveUserFromWorkspaceModal={
              setOpenRemoveUserFromWorkspaceModal
            }
            setRemovedUserName={setRemovedUserName}
            setAssociationId={setAssociationId}
          />
        );
    }
  };

  return (
    <>
      <div className="sticky flex flex-col w-full h-full pt-6 px-12 pb-6 bg-white">
        <div className="flex justify-between w-full h-auto font-sans">
          <div className="font-medium text-gray-900 text-2xl/snug">
            Manage people
          </div>
          <div className="flex items-center gap-3">
            <button className="flex h-7 rounded-md text-sm px-2 font-medium text-gray-500 hover:bg-gray-100 flex-row items-center gap-1 cursor-not-allowed">
              <Icons.Import />
              <div>Export</div>
            </button>
            <button className="flex h-7 text-sm font-medium text-blue-500 underline hover:no-underline items-center cursor-pointer">
              Learn more
            </button>
          </div>
        </div>
        {renderSearchComponent()}
        <div className="flex gap-8 items-center font-sans text-sm font-medium mb-[5px]">
          <button
            className={`text-${activeTab === "full" ? "black" : "gray-400"}`}
            onClick={() => setActiveTab("full")}
          >
            Full members ({filteredUsers.length})
          </button>
          <button
            className={`flex text-${
              activeTab === "guests" ? "black" : "gray-400"
            } items-center gap-1`}
            onClick={() => setActiveTab("guests")}
          >
            Guests (0/1)
            <div>
              <Icons.Question className="text-[12px]" />
            </div>
          </button>
          <button
            className={`flex text-${
              activeTab === "limited" ? "black" : "gray-400"
            } items-center gap-1`}
            onClick={() => setActiveTab("limited")}
          >
            Limited Members (0)
            <div>
              <Icons.Question className="text-[12px]" />
            </div>
          </button>
        </div>
        {renderContentComponent()}
        {openRemoveUserFromWorkspaceModal && (
          <div className="fixed inset-0 flex justify-center bg-gray-950 bg-opacity-50 z-50">
            <div
              className="bg-white rounded-xl w-[440px] h-fit mt-[128px] shadow-lg border border-gray-200 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col p-6">
                <div className="flex justify-center items-center w-10 h-10 border-red-300 border bg-red-50 rounded-xl ">
                  <Icons.Trash className="text-[18px] text-red-800 " />
                </div>
                <div className="flex items-center text-lg  mt-4 font-sans font-medium text-gray-950">
                  <span className=" ml-2">Remove {removedUserName}</span>
                </div>
                <div className="flex mt-1 text-sm font-sans text-gray-950">
                  <span>This user will be removed. Are you sure?</span>
                </div>
              </div>
              <div className="flex items-center gap-3 px-6 py-4 w-auto h-auto border-t border-gray-200  bg-gray-100">
                <button
                  className=" flex-1 px-4 w- py-2 bg-white font-sans text-sm font-medium text-gray-700 rounded-lg border border-gray-200 hover:bg-gray-200"
                  onClick={() => setOpenRemoveUserFromWorkspaceModal(false)}
                >
                  Cancel
                </button>
                <RemoveUserFromWorkspaceButton
                  associationId={associatonId}
                  setOpenRemoveUserFromWorkspaceModal={
                    setOpenRemoveUserFromWorkspaceModal
                  }
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
