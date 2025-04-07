"use client";
import { useState } from "react";
import { Icons } from "@/icons/icons";
import Breadcrumbs from "./TaskTopMenu/Breadcrumbs";
import CreatedAtInfo from "./TaskTopMenu/CreatedAtInfo";
import ShareButton from "./TaskTopMenu/ShareButton";

export default function TaskTopMenu({
  onClose,
  toggleMenu,
}: {
  onClose: () => void;
  toggleMenu: () => void;
}) {
  const [isButtonActive, setIsButtonActive] = useState(false);

  const handleButtonClick = () => {
    setIsButtonActive((prev) => !prev);
    toggleMenu();
  };
  return (
    <>
      <div className="flex w-full h-[49px] px-2 bg-gray-50 border-b border-gray-200">
        <div className="flex items-center flex-grow">
          <button
            className={`px-2 min-h-8 min-w-8 rounded-lg ${
              isButtonActive ? "hover:bg-gray-200" : "bg-blue-200"
            }`}
            onClick={handleButtonClick}
          >
            <Icons.ColumnIcon
              className={`text-[16px] ${
                isButtonActive ? "text-gray-500" : "text-blue-700"
              }`}
            />
          </button>
          {/* 
           // TODO: Nie wiem czy będę wprowadzał ten feature.
          <button className="px-2 min-h-8 min-w-8 hover:bg-gray-200 rounded-lg">
            <Icons.ArrowUpIcon className="text-[16px] text-gray-500" />
          </button>
          <button className="px-2 min-h-8 min-w-8 hover:bg-gray-200 rounded-lg">
            <Icons.ArrowDownIcon className="text-[16px] text-gray-500" />
          </button> */}
          <div className="flex items-center ml-3 font-sans text-sm gap-2 text-gray-700">
            <div className="flex justify-center items-center px-1 min-h-5 min-w-5 bg-blue-200 rounded-md">
              <Icons.People className="text-[14px] text-gray-700 transform scale-x-[-1]" />
            </div>
            <Breadcrumbs />
            <div className="w-px h-3 bg-gray-300"></div>
            <div className="flex">
              <div className="flex justify-center items-center px-1 min-h-6 min-w-6 hover:bg-gray-200 rounded-md">
                <Icons.Logout className="text-[16px] text-gray-500" />
              </div>
              <div className="flex justify-center items-center px-1 min-h-6 min-w-6 hover:bg-gray-200 rounded-md">
                <Icons.PlusIcon className="text-[14px] text-gray-500" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center flex-shrink-0">
          <CreatedAtInfo />
          <ShareButton />
          <div className="w-px h-6 mx-3 bg-gray-300"></div>

          {/* 
          // TODO: Nie wiem czy będę wprowadzał ten feature.
          <button className="px-2 min-h-8 min-w-8 hover:bg-gray-200 rounded-lg">
            <Icons.ThreeDotsIcon className="text-[16px] text-gray-500" />
          </button>
          <button className="px-2 min-h-8 min-w-8 hover:bg-gray-200 rounded-lg">
            <Icons.Star className="text-[16px] text-gray-500" />
          </button>
          <button className="flex-col px-2 min-h-8 min-w-8 hover:bg-gray-200 rounded-lg">
            <Icons.ArrowHorizontal className="text-[14px] text-gray-500" />
            <div className="h-[2px] w-4 bg-gray-500"></div>
          </button>
          <button className="px-2 min-h-8 min-w-8 hover:bg-gray-200 rounded-lg">
            <Icons.Switch className="text-[16px] text-gray-500 stroke-2" />
          </button> */}
          <button
            className="flex justify-center items-center px-1 min-h-8 min-w-8 hover:bg-gray-200 rounded-lg"
            onClick={onClose}
          >
            <Icons.CloseIcon className="text-[20px] text-gray-500 stroke-2" />
          </button>
        </div>
      </div>
    </>
  );
}
