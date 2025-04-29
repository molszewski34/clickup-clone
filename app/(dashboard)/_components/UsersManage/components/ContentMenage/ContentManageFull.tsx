import { getInitials } from "@/app/(dashboard)/[id]/l/[projectId]/utils/getInitials";
import { User } from "@/app/server-actions/types";

import getUsersAssignedToWorkspace from "@/app/server-actions/user/getUsersAssignedToWorkspace";
import { useUser } from "@/context/DataProvider/UserDataProvider";
import useGetCurrentWorkspace from "@/hooks/useGetCurrentWorkspace";
import { Icons } from "@/icons/icons";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";

type UsersListProps = {
  filterUser: string;
};

export default function ContentManageFull({
  filterUser,
}: UsersListProps): JSX.Element {
  const { workspaceId } = useGetCurrentWorkspace();

  const { data: users = [] } = useQuery<User[]>({
    queryKey: ["users", workspaceId],
    queryFn: () => {
      if (!workspaceId) return Promise.resolve([]);
      return getUsersAssignedToWorkspace(workspaceId);
    },
    enabled: !!workspaceId,
  });

  const { userId } = useUser();
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeUserId, setActiveUserId] = useState<string | null>(null);

  const modalRef = useRef<HTMLDivElement | null>(null);

  const filteredUsers: User[] = users.filter(
    (singleUser) =>
      singleUser.signUpEmail.includes(filterUser) ||
      singleUser.signUpFullName.includes(filterUser)
  );

  const copyToClipboard = (text: string, type: "email" | "id") => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        if (type === "email") setCopiedEmail(text);
        if (type === "id") {
          setCopiedId(text);
          setActiveUserId(null);
        }
        setTimeout(() => {
          if (type === "email") setCopiedEmail(null);
          if (type === "id") setCopiedId(null);
        }, 2000);
      })
      .catch((err) => console.error("Could not copy text: ", err));
  };

  const handleOpenModal = (event: React.MouseEvent, userId: string) => {
    event.stopPropagation();
    setActiveUserId((prev) => (prev === userId ? null : userId));
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setActiveUserId(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex relative flex-col rounded-md border border-gray-200 h-full mt-[10px] mb-[30px] custom-scrollbar">
      <div className="flex bg-white sticky z-10 top-0 w-full h-[37px] text-[11px] text-center text-gray-400 font-medium border-b uppercase border-gray-200 px-[30px]">
        <button className="w-4/12 h-full uppercase">Name</button>
        <button className="w-4/12 h-full uppercase">Email</button>
        <div className="flex w-4/12 h-full">
          <button className="w-1/3 h-full uppercase">Role</button>
          <button className="w-1/3 h-full uppercase">Last Active</button>
          <button className="w-1/3 h-full uppercase">Settings</button>
        </div>
      </div>
      {filteredUsers.map((user) => {
        return (
          <div
            key={user.id}
            className=" relative flex items-center w-full h-[59px] py-3 px-[30px] text-base hover:bg-gray-100 text-gray-700 hover:text-gray-800"
          >
            <div className="w-4/12 h-full flex items-center">
              <button className="flex w-full h-7 items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-violet-700 text-white flex items-center justify-center font-sans text-[10px]">
                  {getInitials(user.signUpFullName)}
                </div>
                <div className="text-sm hover:bg-gray-100 rounded px-2">
                  {user.signUpFullName}
                </div>
              </button>
              <div className="flex items-center gap-1 px-[15px]">
                <div className="flex px-3 text-violet-500 rounded font-medium border border-violet-500 items-center justify-center h-6 text-[9px]">
                  {userId === user.id ? "OWNER" : "MEMBER"}
                </div>
                <div>
                  <Icons.Info className="text-[12px] text-gray-700" />
                </div>
              </div>
            </div>
            <div className="flex items-center w-4/12 h-full gap-2 group">
              <div className="text-xs">{user.signUpEmail}</div>
              <button
                className="bg-violet-700 h-6 rounded text-white text-xs font-medium px-2 hidden group-hover:block"
                onClick={() => copyToClipboard(user.signUpEmail, "email")}
              >
                {copiedEmail === user.signUpEmail ? "Copied!" : "Copy"}
              </button>
            </div>
            <div className="flex items-center w-4/12 h-full text-xs ">
              <div className="flex items-center justify-center w-1/3 h-full">
                {userId === user.id ? "Owner" : "no declared role"}
              </div>
              <div className="flex items-center justify-center w-1/3 h-full">
                none
              </div>
              <div className="flex items-center justify-center w-1/3 h-full relative">
                <button
                  className="text-gray-500 hover:text-gray-700 text-xl"
                  onClick={(e) => handleOpenModal(e, user.id)}
                >
                  <Icons.ThreeDotsIcon />
                </button>
              </div>
            </div>
            {activeUserId === user.id && (
              <div
                ref={modalRef}
                className="absolute  top-full right-2 z-50 bg-white border border-gray-300 shadow-lg rounded-md  w-48 h-[41px]"
              >
                <button
                  className="w-full hover:bg-gray-100 bg-white flex items-center gap-1 text-gray-500 h-full text-sm font-normal py-[6px] px-[20px] rounded"
                  onClick={() => copyToClipboard(user.id, "id")}
                >
                  <Icons.Copy className="text-[16px] text-gray-700" />
                  {copiedId === user.id ? "Copied!" : "Copy member ID"}
                </button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
