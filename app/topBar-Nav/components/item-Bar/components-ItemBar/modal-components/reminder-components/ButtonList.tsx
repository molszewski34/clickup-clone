"use client";
import IconCalendarChacked from "@/app/topBar-Nav/components/icon/IconCalendarChacked";
import IconRinging from "@/app/topBar-Nav/components/icon/IconRinging";
import React, { useState, useEffect } from "react";

export default function ButtonList() {
  const [userInitial, setUserInitial] = useState("?"); // State for storing user initials
  const [loading, setLoading] = useState(true); // State to handle loading state

  // Simulated function to fetch user's initials from their full name
  const fetchUserInitial = () => {
    setTimeout(() => {
      const userName = "Jakub King Workspace"; // Example user name
      const nameParts = userName.trim().split(" "); // Split name into parts
      const firstLetter = nameParts[0]?.charAt(0).toUpperCase() || ""; // First letter of first name
      const lastLetter = nameParts[1]?.charAt(0).toUpperCase() || ""; // First letter of last name
      setUserInitial(firstLetter + lastLetter); // Combine initials
      setLoading(false); // Set loading to false once initials are fetched
    }, 1000); // Simulate delay of 1 second
  };

  // Fetch the initials when the component is mounted
  useEffect(() => {
    if (typeof window !== "undefined") {
      fetchUserInitial(); // Call the fetch function
    }
  }, []); // Empty dependency array ensures this runs only once after mount

  return (
    <>
      {/* Container for all the buttons */}
      <div className="flex items-center px-6 gap-2 mb-3">
        {/* Button with an icon */}
        <button className="flex gap-1 items-center justify-center rounded-[4px] border border-gray-200 hover:bg-gray-100 px-[6px] py-[3px]">
          <IconCalendarChacked size="12" color="gray-500" />
          <div className="flex items-center text-xs font-sans font-medium text-gray-600">
            Today
          </div>
        </button>

        {/* Button displaying the user's initials or a loading state */}
        <button className="flex gap-1 items-center justify-center rounded-[4px] border border-gray-200 hover:bg-gray-100 px-[6px] py-[3px] ">
          <div className="flex justify-center items-center w-4 h-4 bg-green-300 rounded-full text-white text-[10px] font-sans p-[2px]">
            {loading ? "?" : userInitial}
            {/* Show "?" while loading, else show the initials */}
          </div>
          <div className="flex items-center text-xs font-sans font-medium text-gray-600">
            For Me
          </div>
        </button>

        {/* Another button with a similar structure */}
        <button className="flex gap-1 items-center justify-center rounded-[4px] border border-gray-200 hover:bg-gray-100 px-[6px] py-[3px]">
          <IconRinging fill="gray-500" size={12} />
          <div className="flex items-center text-xs font-sans font-medium text-gray-600">
            Notify me
          </div>
        </button>
      </div>
    </>
  );
}
