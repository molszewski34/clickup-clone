"use client";
import React, { useState } from "react";
import ItemModal from "../ItemBar/components/ItemModal";
import { Icons } from "@/icons/icons";
import IconButton from "../components/IconButton";
import Modal from "../components/Modal";

const ReminderBar: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const defaultTab = "Reminder";
  return (
    <>
      <IconButton onClick={openModal} icon={<Icons.AlarmIcon />} size="14px" />
      <Modal
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        width="638px"
        height="fit-content"
        sClassName="mt-36"
      >
        <ItemModal onClose={closeModal} defaultTab={defaultTab} />
      </Modal>
    </>
  );
};
export default ReminderBar;
