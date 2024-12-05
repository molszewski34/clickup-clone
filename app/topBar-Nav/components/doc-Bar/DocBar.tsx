"use client"; // Client-side rendering for Next.js

import React, { useState } from "react"; // Import React and useState hook
import NewItemModal from "../item-Bar/components-ItemBar/ItemModal"; // Import the modal component
import Icon from "@/app/(dashboard)/ui/Icon";
import { Icons } from "@/icons/icons";

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
        <Icon className="text-[14px] text-white" icon={<Icons.DocMenuIcon />} />
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
