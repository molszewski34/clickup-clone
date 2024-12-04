"use client";
import Image from "next/image";
import Logo from "../../img/logo.svg";
import SearchBar from "./search-Bar/SearchBar";
import NewItemBar from "./item-Bar/ItemBar";
import NotePadBar from "./notepad-Bar/NotePadBar";
import ReminderBar from "./reminder-Bar/ReminderBar";
import DocBar from "./doc-Bar/DocBar";
import TaskBar from "./task-Bar/TaskBar";
import { Icons } from "@/icons/icons";

export default function TopbarNav() {
  return (
    <>
      <nav className="bg-nav border-gray-200 dark:bg-gray-900 py-1 ">
        <div className="w-full flex items-center justify-between h-8 px-1 ">
          {/* div with logo  */}
          <div className=" flex w-4/12 h-8 py-1 ">
            <div className="flex justify-center items-center w-6 ml-3 ">
              <a href="/ ">
                <Image src={Logo} alt="Clickup Logo" height={16} />
              </a>
            </div>
          </div>
          {/* div with search bar  */}
          <SearchBar />
          {/* div with icons */}
          <div className="flex justify-end items-center	 h-8 w-4/12 ">
            {/* div to "Create New Items" */}
            <NewItemBar />
            <div className="bg-white bg-opacity-20 h-4 w-px mx-1"></div>
            {/* div to "Open my task" */}
            <TaskBar />
            {/* div to "Open NotePad" */}
            <NotePadBar />
            {/* div to "Create a Reminder" */}
            <ReminderBar />
            {/* div to "create a Doc" */}
            <DocBar />
            {/* div to quick menu action */}
            <button className="flex justify-center items-center hover:bg-white bg-opacity-10 hover:bg-opacity-20 rounded-md h-8 w-8 mr-1">
              <Icons.GridDotsIcon className="text-[16px] text-white" />
            </button>
            {/* div to "My Profile" */}
            <button className="relative flex justify-start items-center bg-white bg-opacity-10 rounded-full border border-transparent hover:border hover:border-gray-400 h-8 w-11 mr-1 pl-1">
              <div className=" relative flex justify-center items-center h-5 w-5 bg-sky-500 rounded-full font-medium  text-white text-xs font-sans">
                J
              </div>
              <div className=" absolute h-2 w-2 bottom-1 right-4 bg-green-500 rounded-full border border-black"></div>
              <div className=" relative flex justify-center items-center h-2 w-4 text-white text-xs">
                <Icons.ArrowDownIcon className="text-[10px] text-white" />
              </div>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
