"use client";

import React, { useState, useEffect } from "react";
import IconArrowDownStatic from "../../../icon/IconArrowDownStatic";

export default function InfoSection() {
  const [localTime, setLocalTime] = useState(""); // State for local time
  const [copySuccess, setCopySuccess] = useState(false); // State for copy success message
  const [email, setEmail] = useState(""); // State for the email
  const [loading, setLoading] = useState(true); // State for loading data

  // Function simulating fetching user data (name, initials, and email)
  const fetchUserData = () => {
    setTimeout(() => {
      const userEmail = "jakub.king@example.com"; // Simulated email
      setEmail(userEmail); // Set email
      setLoading(false); // Set state to "loaded"
    }, 1000); // 1000 ms = 1 second
  };

  // Function to format the local time
  const getLocalTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  // Function to handle copying email to clipboard
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email).then(
      () => {
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000); // Hide success message after 2 seconds
      },
      () => {
        setCopySuccess(false); // In case of failure
      }
    );
  };

  // Set the local time and update every minute, only on the client-side
  useEffect(() => {
    fetchUserData(); // Simulate fetching the user data
    // Update local time every minute
    const intervalId = setInterval(() => {
      setLocalTime(getLocalTime());
    }, 60000); // 60,000 ms = 1 minute

    // Set the initial time immediately
    setLocalTime(getLocalTime());

    // Clean up the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []); // The empty dependency array means this runs only on the client after the initial render

  return (
    <div className="flex gap-2 w-full">
      <div className="flex-row w-1/4">
        <div className="text-sm font-sans pl-2 cursor-default font-medium text-gray-950">
          Title
        </div>
        <button className="flex gap-[2px] items-center justify-center rounded-md hover:bg-gray-100 group p-1 pl-2 ">
          <div className="flex items-center text-xs font-sans text-gray-400 mr-1">
            Add description...
          </div>
          <IconArrowDownStatic
            size="10"
            color="gray-400"
            ml="4"
            classN="opacity-0 group-hover:opacity-100"
          />
        </button>
      </div>
      <div className="flex-row w-1/4">
        <div className="text-sm font-sans pl-2 cursor-default font-medium text-gray-950">
          Manager
        </div>
        <button className="flex items-center h-[22px] rounded-md hover:bg-gray-100 px-2 ">
          <div className="flex items-center text-xs font-sans text-gray-400 ">
            None
          </div>
        </button>
      </div>
      <div className="flex-row w-1/4">
        <div className="text-sm font-sans pl-2 cursor-default font-medium text-gray-950">
          Email
        </div>
        <div className="flex w-full gap-[2px] items-center justify-start rounded-md hover:bg-gray-100 group p-1 pl-2">
          {/* Display either email or copied message */}
          <div className="text-xs font-sans text-gray-600 font-medium truncate overflow-hidden text-ellipsis whitespace-nowrap">
            {copySuccess ? (
              <span className="text-green-500">Copied!</span>
            ) : loading ? (
              "?"
            ) : (
              email
            )}
          </div>
          <button onClick={handleCopyEmail}>
            {/* copy */}
            <IconArrowDownStatic
              size="10"
              color="gray-400"
              ml="4"
              classN="opacity-0 group-hover:opacity-100"
            />
          </button>
        </div>
      </div>
      <div className="flex-row w-1/4">
        <div className="text-sm font-sans pl-2 cursor-default font-medium text-gray-950">
          Local time
        </div>
        <div className="flex items-center text-xs h-6 font-sans pl-2 cursor-default font-medium text-gray-600">
          {loading ? "?" : localTime}
        </div>
      </div>
    </div>
  );
}
