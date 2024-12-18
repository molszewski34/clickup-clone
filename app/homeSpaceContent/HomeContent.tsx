import { Icons } from "@/icons/icons";
import { useState } from "react";
import RecentsContent from "./RecentsContent";
import AgendaContent from "./AgendaContent";
import MyWorkContent from "./MyWorkContent";
import AssignedContent from "./AssignedContent";
import Image from "next/image";
import PersonalListIMG from "../img/empty-my-list.svg";
import AssignedCommentsIMG from "../img/no-assigned.svg";
import LineUpIMG from "../img/empty-lineup.svg";

export default function HomeContent() {
  const [userName] = useState("Jakub"); // Dodaj zarządzanie stanem dla menu
  return (
    <>
      <div className="mx-6 my-6">
        <h1 className="px-6 font-sans font-semibold text-2xl text-gray-950 ">
          Good evening, {userName}
        </h1>
        <div className=" flex flex-col mt-4 mb-[14px] gap-4 ">
          <div className="grid grid-flow-col grid-cols-2  gap-4">
            <RecentsContent />
            <AgendaContent />
          </div>
          <div className="grid grid-flow-col grid-cols-2 gap-4">
            <MyWorkContent />
            <AssignedContent />
          </div>
          <div className="grid grid-flow-col grid-cols-2 gap-4">
            <div className="h-[456px] border border-gray-200 rounded-xl hover:border-gray-400 overflow-hidden group">
              <div className="flex items-center justify-between pb-2 mt-3 px-4 font-sans font-semibold text-base text-gray-950">
                Personal List
                <div className=" hidden gap-1 group-hover:flex">
                  <button className="flex justify-center items-center  w-6 h-6 rounded-md hover:bg-gray-100">
                    <Icons.SettingsIcon className="text-[14px] text-gray-600" />
                  </button>
                  <button className="flex justify-center items-center  w-6 h-6 rounded-md hover:bg-gray-100">
                    <Icons.FullScreen className="text-[14px] text-gray-600" />
                  </button>
                  <button className="flex justify-center items-center  w-6 h-6 rounded-md hover:bg-gray-100">
                    <Icons.ThreeDotsIcon className="text-[14px] text-gray-600" />
                  </button>
                </div>
              </div>
              <div className=" w-full h-[394px] pb-4 custom-scrollbar overflow-y-auto overflow-x-hidden">
                <div className="flex flex-col items-center h-full justify-center">
                  <Image
                    src={PersonalListIMG}
                    alt="Agenda Grafic"
                    height={80}
                    width={80}
                  />
                  <span className="flex gap-1 font-sans text-xs text-gray-600">
                    Agenda items from your calendars will show here.
                    <span className="text-blue-700">Learn more</span>
                  </span>
                  <button className="flex items-center mt-4 gap-1 rounded-md px-2 py-[6px] text-xs bg-blue-700 text-white  font-semibold">
                    <Icons.PlusNew className="text-[14px] text-white" />
                    Create a task
                  </button>
                </div>
              </div>
            </div>
            <div className="h-[456px] border border-gray-200 rounded-xl hover:border-gray-400 overflow-hidden group">
              <div className="flex items-center justify-between pb-2 mt-3 px-4 font-sans font-semibold text-base text-gray-950">
                Assigned comments
                <div className=" hidden gap-1 group-hover:flex">
                  <button className="flex justify-center items-center  w-6 h-6 rounded-md hover:bg-gray-100">
                    <Icons.FullScreen className="text-[14px] text-gray-600" />
                  </button>
                  <button className="flex justify-center items-center  w-6 h-6 rounded-md hover:bg-gray-100">
                    <Icons.ThreeDotsIcon className="text-[14px] text-gray-600" />
                  </button>
                </div>
              </div>
              <div className=" w-full h-[394px] pb-4 custom-scrollbar overflow-y-auto overflow-x-hidden">
                <div className="flex flex-col items-center h-full justify-center">
                  <Image
                    src={AssignedCommentsIMG}
                    alt="Agenda Grafic"
                    height={80}
                    width={80}
                  />
                  <span className="flex font-sans text-base font-bold text-gray-900">
                    No Comments
                  </span>
                  <span className="flex gap-1 font-sans text-xs mt-2 text-gray-600">
                    You don t have any assigned comments.
                    <span className="text-blue-700">Learn more</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-flow-col grid-cols-1">
            <div className="h-[318px] border border-gray-200 rounded-xl hover:border-gray-400 overflow-hidden group">
              <div className="flex items-center justify-between pb-2 mt-3 px-4 font-sans font-semibold text-base text-gray-950">
                LineUp
                <div className=" hidden gap-1 group-hover:flex">
                  <button className="flex justify-center items-center  w-6 h-6 rounded-md hover:bg-gray-100">
                    <Icons.FullScreen className="text-[14px] text-gray-600" />
                  </button>
                  <button className="flex justify-center items-center  w-6 h-6 rounded-md hover:bg-gray-100">
                    <Icons.ThreeDotsIcon className="text-[14px] text-gray-600" />
                  </button>
                </div>
              </div>

              <div className=" w-full h-[280px] pb-4 custom-scrollbar overflow-y-auto overflow-x-hidden">
                <div className="flex flex-col items-center h-full justify-center">
                  <Image
                    src={LineUpIMG}
                    alt="Agenda Grafic"
                    height={80}
                    width={80}
                  />
                  <span className="flex gap-1 font-sans text-xs text-gray-600 text-center">
                    LineUp keeps your most important tasks in one list. Add your
                    most important task to get started.
                    <span className="text-blue-700">Learn more</span>
                  </span>
                  <button className="flex items-center mt-4 gap-1 rounded-md px-2 py-[6px] text-xs bg-blue-700 text-white  font-semibold">
                    <Icons.PlusNew className="text-[14px] text-white" />
                    Add task
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
