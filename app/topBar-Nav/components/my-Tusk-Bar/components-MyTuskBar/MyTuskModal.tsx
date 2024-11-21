"use client";
import React, { useState, useEffect } from "react";
import InfoSection from "./modal-components/InfoSection";
import ButtonAiResults from "./modal-components/ButtonAiResults";
import MenuRender from "./modal-components/MenuRender";
import { MyTuskModalProps } from "../../type"; //Import typeScript
import IconArrowDownStatic from "../../icon/IconArrowDownStatic";

export default function MyTuskModal({ onClose }: MyTuskModalProps) {
  const [userInitial, setUserInitial] = useState("?"); // State for the initials
  const [fullName, setFullName] = useState(""); // State for the full name
  const [loading, setLoading] = useState(true); // State for loading data

  // Function simulating fetching user data (name and initials)
  const fetchUserData = () => {
    setTimeout(() => {
      const userName = "Jakub King Workspace"; // Simulated user's full name
      const nameParts = userName.trim().split(" "); // Split name into parts
      const firstLetter = nameParts[0]?.charAt(0).toUpperCase() || ""; // First letter of the first name
      const lastLetter = nameParts[1]?.charAt(0).toUpperCase() || ""; // First letter of the last name (if exists)
      const FullUserName = nameParts[0] + " " + nameParts[1];

      setUserInitial(firstLetter + lastLetter); // Set initials
      setFullName(FullUserName); // Set full name
      setLoading(false); // Set state to "loaded"
    }, 1000); // Simulating delay for loading
  };

  // Run fetchUserData on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      fetchUserData();
    }
  }, []);

  return (
    <>
      <div className="w-full h-1 bg-blue-600" />
      {/* Button to close modal */}
      <button
        onClick={onClose}
        className="absolute w-9 h-9 rounded-full top-[14px] -left-[46px] bg-white font-semibold text-gray-400 
          hover:rotate-180 transition-transform duration-300 ease-in-out"
      >
        ✕
      </button>
      <div className="   flex-row w-full px-8 pt-6">
        <div className="flex w-full gap-2 mb-8">
          {/* Initials Avatar */}
          <div className="static">
            <div className="flex justify-center items-center min-w-16 h-16 bg-green-400 rounded-full text-white text-[24px] font-sans cursor-default">
              {loading ? "?" : userInitial}
              <div className=" absolute z-60 w-6 h-6 border-4 border-white bg-green-600 rounded-full top-[68px] right-[604px] "></div>
            </div>
          </div>

          <div className="flex-row w-full ">
            <div className="flex justify-between items-center mb-3">
              <button className="flex gap-[2px] items-center justify-center rounded-md hover:bg-gray-100 p-1 pl-2 ">
                <div className="flex items-center text-lg font-sans font-medium text-gray-950 mr-1">
                  {loading ? "Loading..." : fullName}
                </div>
                <IconArrowDownStatic size="10" color="gray-900" ml="4" />
              </button>
              <div className="flex items-center bg-green-200 bg-opacity-50 rounded text-green-700 px-2 py-[5px] mt-1 ml-2 text-xs font-sans">
                Online
              </div>
            </div>
            {/* InfoSection Component */}
            <InfoSection />
          </div>
        </div>
        <ButtonAiResults />
      </div>
      <MenuRender />
    </>
  );
}
