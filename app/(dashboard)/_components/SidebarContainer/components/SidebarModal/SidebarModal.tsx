"use client";

import React from "react";
import SpaceModal from "./components/SpaceModal/SpaceModal";

interface SidebarModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
}

export default function SidebarModal({
  isModalOpen,
  closeModal,
}: SidebarModalProps) {
  if (!isModalOpen) return null;

  return (
    <div
      className="fixed inset-0 flex justify-center bg-gray-800 bg-opacity-50 z-50"
      onClick={closeModal}
    >
      <div
        className="bg-white rounded-xl w-[580px] h-fit mt-32 shadow-custom border border-gray-200"
        onClick={(e) => e.stopPropagation()}
      >
        <SpaceModal onClose={closeModal} />
      </div>
    </div>
  );
}
