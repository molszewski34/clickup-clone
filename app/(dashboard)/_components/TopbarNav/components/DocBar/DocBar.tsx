"use client";

import React, { useState } from "react";
import NewItemModal from "../ItemBar/components/ItemModal";
import Icon from "@/app/(dashboard)/ui/Icon";
import { Icons } from "@/icons/icons";

export default function DocBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const defaultTab = "Doc";

  return (
    <>
      <button
        className="flex justify-center items-center hover:bg-white bg-opacity-10 hover:bg-opacity-20 rounded-md h-8 w-8 mr-1"
        onClick={openModal}
      >
        <Icon className="text-[14px] text-white" icon={<Icons.DocMenuIcon />} />
      </button>

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
