"use client";
import Icon from "@/app/(dashboard)/ui/Icon";
import { Icons } from "@/icons/icons";
import React, { useState, useEffect } from "react";

export default function ButtonList() {
  const [userInitial, setUserInitial] = useState("?");
  const [loading, setLoading] = useState(true);

  const fetchUserInitial = () => {
    setTimeout(() => {
      const userName = "Jakub King Workspace";
      const nameParts = userName.trim().split(" ");
      const firstLetter = nameParts[0]?.charAt(0).toUpperCase() || "";
      const lastLetter = nameParts[1]?.charAt(0).toUpperCase() || "";
      setUserInitial(firstLetter + lastLetter);
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
      <div className="flex items-center px-6 gap-2 mb-3">
        <button className="flex gap-1 items-center justify-center rounded-[4px] border border-gray-200 hover:bg-gray-100 px-[6px] py-[3px]">
          <Icons.CalendarChackedIcon className="text-[12px] text-gray-500" />
          <div className="flex items-center text-xs font-sans font-medium text-gray-600">
            Today
          </div>
        </button>

        <button className="flex gap-1 items-center justify-center rounded-[4px] border border-gray-200 hover:bg-gray-100 px-[6px] py-[3px] ">
          <div className="flex justify-center items-center w-4 h-4 bg-green-300 rounded-full text-white text-[10px] font-sans p-[2px]">
            {loading ? "?" : userInitial}
          </div>
          <div className="flex items-center text-xs font-sans font-medium text-gray-600">
            For Me
          </div>
        </button>

        <button className="flex gap-1 items-center justify-center rounded-[4px] border border-gray-200 hover:bg-gray-100 px-[6px] py-[3px]">
          <Icon
            className="text-[12px] text-gray-500"
            icon={<Icons.RingingIcon />}
          />
          <div className="flex items-center text-xs font-sans font-medium text-gray-600">
            Notify me
          </div>
        </button>
      </div>
    </>
  );
}
