"use client";
import { useState } from "react";
import TaskModal from "./TaskModal";
import TaskTopMenu from "./TaskTopMenu";
import { useRouter } from "next/navigation";

export default function AddTaskModal() {
  const [, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const router = useRouter();

  const closeModal = () => {
    setIsModalOpen(false);
    router.back();
  };

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <>
      <div>
        <div
          className="fixed inset-0 flex justify-center bg-gray-800 bg-opacity-50 z-50"
          onClick={closeModal}
        >
          <div
            className="static bg-white rounded-xl w-full h-[799px] mt-16 shadow-custom border border-gray-200 overflow-hidden"
            style={{ maxWidth: "calc(-40px + 100vw)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <TaskTopMenu onClose={closeModal} toggleMenu={toggleMenu} />
            <TaskModal isMenuOpen={isMenuOpen} />
          </div>
        </div>
      </div>
    </>
  );
}
