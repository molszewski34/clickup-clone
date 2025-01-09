"use client";
import React, { useState, useEffect } from "react";
import InfoSection from "./modal-components/InfoSection";
import ButtonAiResults from "./modal-components/ButtonAiResults";
import MenuRender from "./modal-components/MenuRender";
import { TaskModalProps } from "../../type"; //Import typeScript
import { Icons } from "@/icons/icons";
import { useUserProfile } from "@/hooks/useUserProfile";
import Skeleton from "react-loading-skeleton";

export default function TaskModal({ onClose }: TaskModalProps) {
  const { userData } = useUserProfile();

  const [userInitial, setUserInitial] = useState("?"); // State for the initials
  const [fullName, setFullName] = useState(""); // State for the full name
  const [loading, setLoading] = useState(true); // State for loading data

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userName = userData?.signUpFullName || "";
      const nameParts = userName.trim().split(" ");
      const firstLetter = nameParts[0]?.charAt(0).toUpperCase() || "";
      const lastLetter = nameParts[1]?.charAt(0).toUpperCase() || "";
      const fullUserName = nameParts[0] + " " + nameParts[1];

      setUserInitial(firstLetter + lastLetter);
      setFullName(fullUserName);
      setLoading(false);
    }
  }, [userData]);

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
      <div className="flex-row w-full px-8 pt-6">
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
              <button className="flex gap-1 items-center justify-center rounded-md hover:bg-gray-100 p-1 pl-2 ">
                <div className="flex items-center text-lg font-sans font-medium text-gray-950 mr-1">
                  {loading ? <Skeleton /> : fullName}
                </div>
                <Icons.ArrowDownIcon className="text-[10px] fill-gray-900" />
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
