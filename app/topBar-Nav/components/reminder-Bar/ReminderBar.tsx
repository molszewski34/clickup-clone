"use client";

import React, { useState } from "react";
import NewItemModal from "../item-Bar/components-ItemBar/ItemModal";
import Icon from "@/app/(dashboard)/ui/Icon";
import { Icons } from "@/icons/icons";

export default function ReminderBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const defaultTab = "Reminder";

  return (
    <>
      <button
        className="flex justify-center items-center hover:bg-white bg-opacity-10 hover:bg-opacity-20 rounded-md h-8 w-8 mr-1"
        onClick={openModal}
      >
        <Icon className="text-[14px] text-white" icon={<Icons.AlarmIcon />} />
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 flex justify-center bg-gray-800 bg-opacity-50 z-50"
          onClick={closeModal} // close modal when you click outspace on modal
        >
          <div
            className="bg-white rounded-xl w-[638px] h-fit mt-36 shadow-custom border border-gray-200"
            onClick={(e) => e.stopPropagation()} // stop propagation when you click in modal. This elements givie you function to work in modal
          >
            <NewItemModal onClose={closeModal} defaultTab={defaultTab} />
          </div>
        </div>
      )}
    </>
  );
}
