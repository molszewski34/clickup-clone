"use client";
import { useState } from "react";
import TaskModal from "./components/TaskModal";
import { Icons } from "@/icons/icons";
import IconButton from "../components/IconButton";

export default function TaskBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <IconButton
        onClick={openModal}
        icon={<Icons.CheckCircleIcon />}
        size="16px"
      />

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
