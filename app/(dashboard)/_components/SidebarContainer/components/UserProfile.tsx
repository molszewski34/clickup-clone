"use client";

import { Icons } from "@/icons/icons";
import Icon from "@/app/(dashboard)/ui/Icon";
import { useEffect, useRef, useState } from "react";
import { ChangeWorkspace } from "./ChangeWorkspace";
import { Workspace } from "@/app/server-actions/types";
import Skeleton from "react-loading-skeleton";
import { WorkspaceWithMembers } from "@/hooks/useGetWorkspacesForUser";

interface UserProfileProps {
  isLoading: boolean;
  currentWorkspace: Workspace | undefined;
  workspacesToSwitch: WorkspaceWithMembers[] | undefined;
  userInitial: string;
  width: number;
  shrinkSidebar: () => void;
}

const UserProfile: React.FC<UserProfileProps> = ({
  isLoading,
  currentWorkspace,
  workspacesToSwitch,
  userInitial,
  width,
  shrinkSidebar,
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setModalIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative flex justify-between items-center rounded-lg w-auto h-8 my-2 ml-3 mr-2">
      <button
        className={`flex items-center rounded-md hover:bg-gray-200 hover:bg-opacity-50 h-8 w-auto mr-1 pl-1 flex-grow min-w-0 ${
          width < 200 ? "justify-start" : ""
        }`}
        onClick={() => setModalIsOpen(true)}
      >
        <div className="flex justify-center items-center min-w-6 h-6 bg-emerald-600 rounded-md text-white text-xs font-sans font-bold">
          {userInitial}
        </div>

        {width >= 200 && (
          <div className="flex-grow min-w-0 ml-2">
            <span className="block text-gray-700 text-left text-base font-semibold truncate font-sans">
              {isLoading || !currentWorkspace ? (
                <Skeleton width={120} height={16} borderRadius={4} />
              ) : (
                currentWorkspace.name
              )}
            </span>
          </div>
        )}

        {width >= 200 && (
          <div className="flex justify-center items-center h-1 w-5 ml-auto">
            <Icons.ArrowDownIcon className="text-[16px] text-gray-600 " />
          </div>
        )}
      </button>
      {width >= 200 && (
        <div className="flex-shrink-0 opacity-0 group-hover:opacity-100">
          <button
            onClick={() => {
              shrinkSidebar();
            }}
            className="flex justify-center items-center hover:bg-white bg-opacity-10 hover:bg-opacity-20 rounded-md h-8 w-8"
          >
            <Icon
              className="text-[20px] text-gray-700"
              icon={<Icons.CreateDocIcon />}
            />
          </button>
        </div>
      )}
      {modalIsOpen && workspacesToSwitch && currentWorkspace && (
        <div className="absolute left-[0] top-full mt-2 z-50 flex">
          <div
            ref={modalRef}
            className="bg-gray-50 w-[250px] border border-gray-200 rounded-md shadow-lg flex flex-col"
          >
            <ChangeWorkspace
              workspacesToSwitch={workspacesToSwitch}
              currentWorkspace={currentWorkspace}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
