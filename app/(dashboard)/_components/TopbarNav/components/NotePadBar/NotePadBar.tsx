"use client";
import { useState } from "react";
import { Icons } from "@/icons/icons";
import NotePadModal from "./components/NotePadModal/NotePadModal";
import IconButton from "../components/IconButton";

export default function NotePadBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <IconButton
        onClick={openModal}
        icon={<Icons.NotePadIcon />}
        size="14px"
      />

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
