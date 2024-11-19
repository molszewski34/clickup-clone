"use client";

import Image from "next/image";
import Logo from "../img/logo.svg";
import SearchBar from "./components/search-Bar/SearchBar";
import NewItemBar from "./components/new-Item-Bar/NewItemBar";
import MyTuskBar from "./components/open-My-Tusk-Bar/MyTuskBar";
import NotePadBar from "./components/notepad-Bar/NotePadBar";
import ReminderBar from "./components/reminder-Bar/ReminderBar";
import DocBar from "./components/doc-Bar/DocBar";

export default function TopbarNav() {
  return (
    <>
      <nav className="bg-nav border-gray-200 dark:bg-gray-900 py-1 ">
        <div className="w-full flex items-center justify-between h-8 px-1 ">
          {/* div with logo  */}
          <div className=" flex w-3/12 h-8 py-1 ">
            <div className="flex justify-center items-center w-6 ml-3 ">
              <a href="/ ">
                <Image src={Logo} alt="Clickup Logo" height={16} />
              </a>
            </div>
          </div>
          {/* div with search bar  */}
          <SearchBar />
          {/* div with icons */}
          <div className="flex justify-end items-center	 h-8 w-3/12 ">
            {/* div to "Create New Items" */}
            <NewItemBar />
            <div className="bg-white bg-opacity-20 h-4 w-px mr-1"></div>
            {/* div to "Open my task" */}
            <MyTuskBar />
            {/* div to "Open NotePad" */}
            <NotePadBar />
            {/* div to "Create a Reminder" */}
            <ReminderBar />
            {/* div to "create a Doc" */}
            <DocBar />
            {/* div to quick menu action */}
            <button className="flex justify-center items-center hover:bg-white bg-opacity-10 hover:bg-opacity-20 rounded-md h-8 w-8 mr-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                height="14px"
                className="fill-white"
              >
                <path d="M50.047,0C22.404,0,0,22.4,0,50.047c0,27.646,22.404,50.046,50.047,50.046c27.642,0,50.046-22.4,50.046-50.046 C100.093,22.4,77.689,0,50.047,0z"></path>{" "}
                <path d="M256,0c-27.642,0-50.047,22.4-50.047,50.047c0,27.646,22.404,50.046,50.047,50.046 c27.642,0,50.047-22.4,50.047-50.046C306.047,22.4,283.642,0,256,0z"></path>{" "}
                <path d="M461.953,100.093c27.638,0,50.047-22.4,50.047-50.046C512,22.4,489.591,0,461.953,0 s-50.046,22.4-50.046,50.047C411.907,77.693,434.315,100.093,461.953,100.093z"></path>{" "}
                <path d="M50.047,205.953C22.404,205.953,0,228.353,0,256s22.404,50.047,50.047,50.047 c27.642,0,50.046-22.4,50.046-50.047S77.689,205.953,50.047,205.953z"></path>{" "}
                <path d="M256,205.953c-27.642,0-50.047,22.4-50.047,50.047s22.404,50.047,50.047,50.047 c27.642,0,50.047-22.4,50.047-50.047S283.642,205.953,256,205.953z"></path>{" "}
                <path d="M461.953,205.953c-27.638,0-50.046,22.4-50.046,50.047s22.408,50.047,50.046,50.047S512,283.647,512,256 S489.591,205.953,461.953,205.953z"></path>{" "}
                <path d="M50.047,411.907C22.404,411.907,0,434.307,0,461.953C0,489.6,22.404,512,50.047,512 c27.642,0,50.046-22.4,50.046-50.047C100.093,434.307,77.689,411.907,50.047,411.907z"></path>{" "}
                <path d="M256,411.907c-27.642,0-50.047,22.4-50.047,50.046C205.953,489.6,228.358,512,256,512 c27.642,0,50.047-22.4,50.047-50.047C306.047,434.307,283.642,411.907,256,411.907z"></path>{" "}
                <path d="M461.953,411.907c-27.638,0-50.046,22.4-50.046,50.046c0,27.647,22.408,50.047,50.046,50.047 S512,489.6,512,461.953C512,434.307,489.591,411.907,461.953,411.907z"></path>
              </svg>
            </button>
            {/* div to "My Profile" */}
            <button className="relative flex justify-start items-center bg-white bg-opacity-10 rounded-full border border-transparent hover:border hover:border-gray-400 h-8 w-11 mr-1 pl-1">
              <div className=" relative flex justify-center items-center h-5 w-5 bg-sky-500 rounded-full font-medium  text-white text-xs font-sans">
                J
              </div>
              <div className=" absolute h-2 w-2 bottom-1 right-4 bg-green-500 rounded-full border border-black"></div>
              <div className=" relative flex justify-center items-center h-1 w-4 text-white text-xs">
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="10px"
                  className="fill-white"
                >
                  <path d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z"></path>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
