"use client";
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
    fetchUserInitial(); // Simulate fetching the first letter of the user's full name
  }, []);

  return (
    <>
      <div className=" flex items-center px-6 gap-2 mb-3">
        <button className="flex gap-[2px] items-center justify-center rounded-md border border-gray-200 hover:bg-gray-100 px-[7px] py-[3px] ">
          <div className="flex justify-center items-center w-4 h-4 bg-green-300 rounded-full text-white text-[10px] font-sans font-bold px-[5px] mr-1">
            {loading ? "?" : userInitial}
            {/* Display first letter or question mark if still loading */}
          </div>

          <div className="flex items-center text-xs font-sans font-medium text-gray-600">
            Personal List
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="fill-gray-500 ml-1"
            width="12px"
          >
            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
          </svg>
        </button>
        <button className="flex gap-[2px] items-center justify-center rounded-md border border-gray-200 hover:bg-gray-100 px-[7px] py-[3px]">
          <svg
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-gray-500 mr-1"
            width="12px"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                className="fill-gray-500"
                d="M8 4c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z"
              ></path>
              <path
                className="fill-gray-500"
                d="M8 1c3.9 0 7 3.1 7 7s-3.1 7-7 7-7-3.1-7-7 3.1-7 7-7zM8 0c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8v0z"
              ></path>
            </g>
          </svg>
          <div className="flex items-center text-xs font-sans font-medium text-gray-600">
            Tusk
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="fill-gray-500 ml-1"
            width="12px"
          >
            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
          </svg>
        </button>
      </div>
    </>
  );
}
