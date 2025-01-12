"use client";
import { useState } from "react";
import { Icons } from "@/icons/icons";
import NotePadModal from "./components/NotePadModal/NotePadModal";

export default function NotePadBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <button
        className="flex justify-center items-center hover:bg-white bg-opacity-10 hover:bg-opacity-20 rounded-md h-8 w-8 mr-1"
        onClick={openModal}
      >
        <Icons.NotePadIcon className="text-[14px] text-white" />
      </button>

      {isModalOpen && (
        <div
          className="fixed inset-0 flex justify-end  bg-transparent z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-xl w-[399px] h-[465px] mt-12 shadow-[0_20px_54px_#0000001a] border m-2 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <NotePadModal onClose={closeModal} />
          </div>
        </div>
      )}
    </>
  );
}
