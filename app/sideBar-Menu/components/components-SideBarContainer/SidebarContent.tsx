"use client";

import React, { useState } from "react";
import UserProfile from "./components-SideBarContnet/UserProfile";
import Button from "./components-SideBarContnet/Button";
import ButtonFavourites from "./components-SideBarContnet/ButtonFavourites";
import buttons from "./components-SideBarContnet/buttons";
import { Icons } from "@/icons/icons";
import WorkspaceButtons from "./WorkspaceButtons";

interface SidebarContentProps {
  userName: string;
  userInitial: string;
  loading: boolean;
  width: number;
  openModal: () => void;
}

export default function SidebarContent({
  userName,
  userInitial,
  loading,
  width,
  openModal,
}: SidebarContentProps) {
  const [activeButton, setActiveButton] = useState<number | null>(null);

  return (
    <div>
      <UserProfile
        userName={userName}
        userInitial={userInitial}
        loading={loading}
        width={width}
      />

      <div className="w-full h-px bg-gray-200" />

      <div className="flex-row rounded-lg w-auto h-auto my-2 ml-3 mr-2">
        {buttons.map((button, index) => (
          <Button
            key={index}
            label={button.label}
            icon={button.icon}
            extraIcons={button.extraIcons}
            active={activeButton === index}
            onClick={() => setActiveButton(index)}
            width={width}
          />
        ))}
      </div>

      <div className="w-full h-px bg-gray-200 " />

      <ButtonFavourites />

      {/* At this point, a modal for Adding a Workspace is triggered. */}
      <div className="flex-row ">
        <div className="flex items-center h-8 pl-4 pr-2 justify-between ">
          <div className="flex items-center text-xs font-sans font-medium text-gray-500">
            Space
          </div>
          <div className="flex gap-[2px]">
            <button className="flex justify-center items-center w-6 h-6 rounded-md hover:bg-gray-200">
              <Icons.ThreeDotsIcon className="text-[16px] text-gray-500" />
            </button>
            <button className="flex justify-center items-center w-6 h-6 rounded-md hover:bg-gray-200">
              <Icons.SearchIcon className="text-[16px] text-gray-500" />
            </button>
            <button
              className="flex justify-center items-center w-6 h-6 rounded-md bg-blue-500 hover:bg-blue-700"
              onClick={openModal}
            >
              <Icons.PlusIcon className="text-[14px] text-white" />
            </button>
          </div>
        </div>
        <div className="flex-row rounded-lg w-auto h-auto my-2 ml-3 mr-2">
          <WorkspaceButtons width={width} />
        </div>
      </div>
    </div>
  );
}
