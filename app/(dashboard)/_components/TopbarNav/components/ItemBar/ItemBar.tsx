"use client";
import React, { useState } from "react";
import ItemModal from "./components/ItemModal";
import { Icons } from "@/icons/icons";
import IconButton from "../components/IconButton";
import Modal from "../components/Modal";
const ItemBar: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const defaultTab = "Task";
  return (
    <>
      <IconButton
        onClick={openModal}
        icon={<Icons.PlusCircleIcon />}
        size="16px"
        textIcon="New"
        buttonClass="h-8 px-[11px] mx-1"
      />
      {isModalOpen && (
        <Modal
          isModalOpen={isModalOpen}
          closeModal={closeModal}
          width="638px"
          height="fit-content"
          sClassName="mt-36"
        >
          <ItemModal onClose={closeModal} defaultTab={defaultTab} />{" "}
        </Modal>
      )}{" "}
    </>
  );
};
export default ItemBar;
