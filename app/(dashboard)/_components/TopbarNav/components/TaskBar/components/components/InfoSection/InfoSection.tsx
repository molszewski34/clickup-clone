import React from "react";
import { InfoRow } from "./components/InfoRow";
import { CopyEmailButton } from "./components/CopyEmailButton";
import { Icons } from "@/icons/icons";
import { useUserProfile } from "@/hooks/useUserProfile";
import { UseUserData } from "./hook/useUserData";
import { UseLocalTime } from "./hook/useLocalTime";

export default function InfoSection() {
  const { loading } = UseUserData();
  const { userData } = useUserProfile();
  const localTime = UseLocalTime();

  return (
    <div className="flex gap-2 w-full">
      <InfoRow title="Title">
        <button className="flex gap-1 items-center justify-center rounded-md hover:bg-gray-100 group p-1 pl-2 ">
          <div className="flex items-center text-xs font-sans text-gray-400 mr-1">
            Add description...
          </div>
          <Icons.ArrowDownIcon className="text-[10px] text-gray-400 opacity-0 group-hover:opacity-100" />
        </button>
      </InfoRow>

      <InfoRow title="Manager">
        <button className="flex items-center h-[22px] rounded-md hover:bg-gray-100 px-2 ">
          <div className="flex items-center text-xs font-sans text-gray-400 ">
            None
          </div>
        </button>
      </InfoRow>

      <InfoRow title="Email">
        <CopyEmailButton
          email={userData?.signUpEmail || ""}
          loading={loading}
        />
      </InfoRow>

      <InfoRow title="Local time">
        <div className="flex items-center text-xs h-6 font-sans pl-2 cursor-default font-medium text-gray-600">
          {loading ? "?" : localTime}
        </div>
      </InfoRow>
    </div>
  );
}
