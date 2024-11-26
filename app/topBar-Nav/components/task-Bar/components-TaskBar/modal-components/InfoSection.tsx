import React from "react";
import IconArrowDownStatic from "../../../icon/IconArrowDownStatic";

// Custom hooks for fetching user data and local time
import { UseUserData } from "./infoSection-hook/UseUserData";
import { UseLocalTime } from "./infoSection-hook/UseLocalTime";

// Components for displaying information rows and copy email functionality
import { InfoRow } from "./infoSection-components/InfoRow";
import { CopyEmailButton } from "./infoSection-components/CopyEmailButton";

export default function InfoSection() {
  // Fetching user email and loading state from the custom hook
  const { email, loading } = UseUserData();

  // Fetching the local time using the custom hook
  const localTime = UseLocalTime();

  return (
    <div className="flex gap-2 w-full">
      <InfoRow title="Title">
        <button className="flex gap-1 items-center justify-center rounded-md hover:bg-gray-100 group p-1 pl-2 ">
          <div className="flex items-center text-xs font-sans text-gray-400 mr-1">
            Add description...
          </div>
          <IconArrowDownStatic
            size="10"
            color="gray-400"
            classN="opacity-0 group-hover:opacity-100"
          />
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
        {/* Button to copy the email address to clipboard */}
        <CopyEmailButton email={email} loading={loading} />
      </InfoRow>

      <InfoRow title="Local time">
        <div className="flex items-center text-xs h-6 font-sans pl-2 cursor-default font-medium text-gray-600">
          {/* Displaying local time or a loading indicator */}
          {loading ? "?" : localTime}
        </div>
      </InfoRow>
    </div>
  );
}
