import { SetStateAction, useState } from "react";
import { Icons } from "@/icons/icons";
import SearchManageFull from "./components/SearchManageFull";
import ContentManageFull from "./components/ContentManageFull";
import SearchManageGuests from "./components/SearchManageGuests";
import ContentManageGuests from "./components/ContentManageGuests";
import SearchManageLimited from "./components/SearchManageLimited";
import ContentManageLimited from "./components/ContentManageLimited";

export default function UsersManage() {
  const [activeTab, setActiveTab] = useState("full");
  const [filterUser, setFilterUser] = useState("");

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
            Full members (1)
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
