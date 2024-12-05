"use client";
import React, { useState } from "react";
import NewItemModal from "./components-ItemBar/ItemModal";
import { Icons } from "@/icons/icons";

export default function ItemBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const defaultTab = "Task";

  return (
    <>
      <button
        className="flex justify-center items-center hover:bg-white bg-opacity-10 hover:bg-opacity-20 rounded-md h-8 px-[11px] mx-1"
        onClick={openModal}
      >
        <Icons.PlusCircleIcon className="text-[16px] text-white ml-1" />
        <span className="h-4 w-8 ml-1 text-sm/[16px] text-center font-semibold text-white font-sans">
          New
        </span>
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 flex justify-center bg-gray-800 bg-opacity-50 z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-xl w-[638px] h-fit mt-36 shadow-custom border border-gray-200"
            onClick={(e) => e.stopPropagation()}
          >
            <NewItemModal onClose={closeModal} defaultTab={defaultTab} />
          </div>
        </div>
      )}
    </>
  );
}
