"use client";
// components/UserProfile.tsx

import React from "react";
import IconArrowDownStatic from "../../../../topBar-Nav/components/icon/IconArrowDownStatic";
import IconCreateDoc from "@/app/topBar-Nav/components/icon/IconCreateDoc";

interface UserProfileProps {
  userName: string;
  userInitial: string;
  loading: boolean;
  width: number;
}

const UserProfile: React.FC<UserProfileProps> = ({
  userName,
  userInitial,
  loading,
  width,
}) => {
  return (
    <div className="flex justify-between items-center rounded-lg w-auto h-8 my-2 ml-3 mr-2">
      <button
        className={`flex items-center rounded-md hover:bg-gray-200 hover:bg-opacity-50 h-8 w-auto mr-1 pl-1 flex-grow min-w-0 ${
          width < 200 ? "justify-start" : ""
        }`}
      >
        <div className="flex justify-center items-center min-w-6 h-6 bg-green-300 rounded-md text-gray-600 text-xs font-sans font-bold">
          {loading ? "?" : userInitial}
        </div>

        {width >= 200 && (
          <div className="flex-grow min-w-0 ml-1">
            <span className="block text-gray-700 text-left text-base font-semibold truncate font-sans">
              {loading ? "Loading..." : userName}
            </span>
          </div>
        )}

        {width >= 200 && (
          <div className="flex justify-center items-center h-1 w-5 ml-auto">
            <IconArrowDownStatic size="10" color="gray-600" />
          </div>
        )}
      </button>
      {width >= 200 && (
        <div className="flex-shrink-0 opacity-0 group-hover:opacity-100">
          <button className="flex justify-center items-center hover:bg-white bg-opacity-10 hover:bg-opacity-20 rounded-md h-8 w-8">
            <IconCreateDoc />
          </button>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
