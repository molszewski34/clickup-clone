"use client";
import { useState } from "react";
import TaskModal from "./components-TaskBar/TaskModal";
import { Icons } from "@/icons/icons";

export default function TaskBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      {/* Button to open modal */}
      <button
        className="flex justify-center items-center hover:bg-white bg-opacity-10 hover:bg-opacity-20 rounded-md h-8 w-8 mx-1"
        onClick={openModal}
      >
        <Icons.CheckCircleIcon className="text-[16px] text-white" />
      </button>

      {/* Modal */}
      <div
        className={`fixed inset-0 flex items-center justify-end bg-transparent z-50 transition-opacity duration-300 ${
          isModalOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeModal}
      >
        <div
          className={`bg-white w-[700px] h-full shadow-custom transform transition-transform duration-300 ${
            isModalOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <TaskModal onClose={closeModal} />
        </div>
      </div>
    </>
  );
}
