import { SetStateAction, useState } from "react";
import { Icons } from "@/icons/icons";
import SearchManageGuests from "./components/Search/SearchManageGuests";
import SearchManageLimited from "./components/Search/SearchManageLimited";
import SearchManageFull from "./components/Search/SearchManageFull";
import ContentManageGuests from "./components/ContentMenage/ContentManageGuests";
import ContentManageLimited from "./components/ContentMenage/ContentManageLimited";
import ContentManageFull from "./components/ContentMenage/ContentManageFull";
import useGetCurrentWorkspace from "@/hooks/useGetCurrentWorkspace";
import getUsersAssignedToWorkspace from "@/app/server-actions/user/getUsersAssignedToWorkspace";
import { useQuery } from "@tanstack/react-query";
import { User } from "@/app/server-actions/types";

export default function UsersManage() {
  const [activeTab, setActiveTab] = useState("full");
  const [filterUser, setFilterUser] = useState("");

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
        return <ContentManageFull filterUser={filterUser} />;
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
      </div>
    </>
  );
}
