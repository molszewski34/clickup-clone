"use client";
import Image from "next/image";
import Logo from "../../../img/logo.svg";
import { Icons } from "@/icons/icons";
import Link from "next/link";
import { useUser } from "@/context/DataProvider/UserDataProvider";
import SearchBar from "./components/SearchBar/SearchBar";
import TaskBar from "./components/TaskBar/TaskBar";
import NotePadBar from "./components/NotePadBar/NotePadBar";
import ReminderBar from "./components/ReminderBar/ReminderBar";
import DocBar from "./components/DocBar/DocBar";
import UserProfilBar from "./components/UserProfilBar/UserProfilBar";
import ItemBar from "./components/ItemBar/ItemBar";

export default function TopbarNav() {
  const { userId } = useUser();
  return (
    <>
      <nav className="bg-nav border-gray-200 dark:bg-gray-900 py-1 ">
        <div className="w-full flex items-center justify-between h-8 px-1 ">
          <div className=" flex w-4/12 h-8 py-1 ">
            <div className="flex justify-center items-center w-6 ml-3 ">
              <Link href={`/${userId}/home`}>
                <Image src={Logo} alt="Clickup Logo" height={16} />
              </Link>
            </div>
          </div>
          <SearchBar />
          <div className="flex justify-end items-center	 h-8 w-4/12 ">
            <ItemBar />
            <div className="bg-white bg-opacity-20 h-4 w-px mx-1"></div>
            <TaskBar />
            <NotePadBar />
            <ReminderBar />
            <DocBar />
            <button className="flex justify-center items-center hover:bg-white bg-opacity-10 hover:bg-opacity-20 rounded-md h-8 w-8 mr-1">
              <Icons.GridDotsIcon className="text-[16px] text-white" />
            </button>
            <UserProfilBar />
          </div>
        </div>
      </nav>
    </>
  );
}
