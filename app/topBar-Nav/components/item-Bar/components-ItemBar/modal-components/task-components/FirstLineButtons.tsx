"use client";
import IconArrowDownStatic from "@/app/topBar-Nav/components/icon/IconArrowDownStatic";
import IconDot from "@/app/topBar-Nav/components/icon/IconDot";
import React, { useState, useEffect } from "react";

export default function FirstLineButtons() {
  const [userInitial, setUserInitial] = useState("?"); // State for the first letter of the user's name
  const [loading, setLoading] = useState(true); // State for loading data

  // Function simulating fetching the first letter of the user's full name from a backend
  const fetchUserInitial = () => {
    setTimeout(() => {
      const userName = "Jakub King Workspace"; // Simulated user's full name
      const firstLetter = userName.trim().charAt(0).toUpperCase(); // Extract the first letter
      setUserInitial(firstLetter); // Save the first letter to state
      setLoading(false); // Set state to "loaded"
    }, 1000); // 1000 ms = 1 second
  };

  // Call the fetch function when the component is mounted
  useEffect(() => {
    if (typeof window !== "undefined") {
      fetchUserInitial(); // Simulate fetching the initials of the user's full name
    }
  }, []);

  return (
    <>
      <div className=" flex items-center px-6 gap-2 mb-3">
        <button className="flex gap-1 items-center justify-center rounded-md border border-gray-200 hover:bg-gray-100 px-[7px] py-[3px] ">
          <div className="flex justify-center items-center w-4 h-4 bg-green-300 rounded-full text-white text-[10px] font-sans font-bold px-[5px] mr-1">
            {loading ? "?" : userInitial}
            {/* Display first letter or question mark if still loading */}
          </div>

          <div className="flex items-center text-xs font-sans font-medium text-gray-600">
            Personal List
          </div>
          <IconArrowDownStatic size="12" color="gray-500" />
        </button>
        <button className="flex gap-1 items-center justify-center rounded-md border border-gray-200 hover:bg-gray-100 px-[7px] py-[3px]">
          <IconDot fill="gray-500" size={12} />

          <div className="flex items-center text-xs font-sans font-medium text-gray-600">
            Task
          </div>

          <IconArrowDownStatic size="12" color="gray-500" />
        </button>
      </div>
    </>
  );
}
