"use client";
import { Icons } from "@/icons/icons";
import React, { useState, useEffect } from "react";

export default function FirstLineButtons() {
  const [userInitial, setUserInitial] = useState("?");
  const [loading, setLoading] = useState(true);

  const fetchUserInitial = () => {
    setTimeout(() => {
      const userName = "Jakub King Workspace";
      const firstLetter = userName.trim().charAt(0).toUpperCase();
      setUserInitial(firstLetter);
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      fetchUserInitial();
    }
  }, []);

  return (
    <>
      <div className=" flex items-center px-6 gap-2 mb-3">
        <button className="flex gap-1 items-center justify-center rounded-md border border-gray-200 hover:bg-gray-100 px-[7px] py-[3px] ">
          <div className="flex justify-center items-center w-4 h-4 bg-green-300 rounded-full text-white text-[10px] font-sans font-bold px-[5px] mr-1">
            {loading ? "?" : userInitial}
          </div>

          <div className="flex items-center text-xs font-sans font-medium text-gray-600">
            Personal List
          </div>
          <Icons.ArrowDownIcon className="text-[12px] text-gray-500" />
        </button>
        <button className="flex gap-1 items-center justify-center rounded-md border border-gray-200 hover:bg-gray-100 px-[7px] py-[3px]">
          <Icons.DotIcon className="text-[12px] text-gray-500" />

          <div className="flex items-center text-xs font-sans font-medium text-gray-600">
            Task
          </div>

          <Icons.ArrowDownIcon className="text-[12px] text-gray-500" />
        </button>
      </div>
    </>
  );
}
