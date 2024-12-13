"use client";

import { Icons } from "@/icons/icons";
import MenuRightTask from "./MenuRightTask";
import MainContentTask from "./MainContentTask";

export default function TaskModal({ isMenuOpen }: { isMenuOpen: boolean }) {
  return (
    <>
      <div className="flex flex-row h-full">
        {/* Menu boczne */}
        <div
          className={`flex flex-col h-full ${
            isMenuOpen ? "w-[300px]" : "w-[0px]"
          } transition-all duration-300 overflow-hidden bg-gray-50 border-r border-gray-200`}
        >
          {isMenuOpen && (
            <>
              <div className="h-12 pr-3 py-3 pl-4 font-sans text-xl/5 text-gray-900 font-semibold border-b border-gray-200">
                Subtasks
              </div>
              <div className="flex w-full h-8 items-center pl-[14px] bg-gray-100 pr-2 group">
                <div className="flex justify-center items-center min-w-4 min-h-4 rounded-full mr-3 bg-green-700">
                  <Icons.Check className="text-[10px] text-white" />
                </div>
                <div className="p-0 w-auto font-sans text-sm font-medium  flex-grow overflow-hidden whitespace-nowrap text-ellipsis truncate">
                  create-workspace-three-branch-colection
                </div>
                <div className=" gap-1 hidden group-hover:flex">
                  <div className="flex justify-center items-center min-h-4 min-w-4 hover:bg-gray-200 rounded-[4px]">
                    <Icons.ThreeDotsIcon className="text-[16px] text-gray-500" />
                  </div>
                  <div className="flex justify-center items-center min-h-4 min-w-4 bg-indigo-400 hover:bg-indigo-700 rounded-[4px]">
                    <Icons.PlusIcon className="text-[10px] text-white" />
                  </div>
                </div>
              </div>
              <button className="flex w-full h-8 items-center px-[14px] font-sans text-[13px] font-medium text-gray-500">
                <Icons.PlusIcon className="text-[10px] text-gray-500 mr-3" />{" "}
                Add subtask
              </button>
            </>
          )}
        </div>
        <MainContentTask />
        <MenuRightTask />
      </div>
    </>
  );
}
