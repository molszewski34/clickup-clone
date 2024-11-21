"use client"; // Client-side rendering for Next.js

import React, { useState } from "react"; // Import React and useState hook
import NewItemModal from "../new-Item-Bar/components-NewItem/NewItemModal"; // Import the modal component

export default function DocBar() {
  // State to manage the visibility of the modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => setIsModalOpen(true);

  // Function to close the modal
  const closeModal = () => setIsModalOpen(false);

  // Default tab for the modal (Doc)
  const defaultTab = "Doc";

  return (
    <>
      {/* Button to trigger opening of the modal */}
      <button
        className="flex justify-center items-center hover:bg-white bg-opacity-10 hover:bg-opacity-20 rounded-md h-8 w-8 mr-1"
        onClick={openModal} // Trigger the openModal function when clicked
      >
        {/* SVG icon inside the button */}
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="fill-white"
          width="14px"
        >
          {/* Icon path definition */}
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <g id="Complete">
              <g id="F-File">
                <g id="Text">
                  <g>
                    {/* Main file icon shape */}
                    <path
                      d="M18,22H6a2,2,0,0,1-2-2V4A2,2,0,0,1,6,2h7.1a2,2,0,0,1,1.5.6l4.9,5.2A2,2,0,0,1,20,9.2V20A2,2,0,0,1,18,22Z"
                      fill="none"
                      id="File"
                      className="stroke-white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    ></path>
                    {/* File content lines */}
                    <line
                      fill="none"
                      className="stroke-white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      x1="7.9"
                      x2="16.1"
                      y1="17.5"
                      y2="17.5"
                    ></line>
                    <line
                      fill="none"
                      className="stroke-white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      x1="7.9"
                      x2="16.1"
                      y1="13.5"
                      y2="13.5"
                    ></line>
                    <line
                      fill="none"
                      className="stroke-white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      x1="8"
                      x2="13"
                      y1="9.5"
                      y2="9.5"
                    ></line>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </svg>
      </button>

      {/* Modal rendering */}
      {isModalOpen && (
        <div
          className="fixed inset-0 flex justify-center bg-gray-800 bg-opacity-50 z-50"
          onClick={closeModal} // Close modal when clicking outside the modal content
        >
          <div
            className="bg-white rounded-xl w-[638px] h-fit mt-36 shadow-custom border border-gray-200"
            onClick={(e) => e.stopPropagation()} // Prevent closing the modal when clicking inside the modal
          >
            {/* The NewItemModal component */}
            <NewItemModal onClose={closeModal} defaultTab={defaultTab} />
          </div>
        </div>
      )}
    </>
  );
}
