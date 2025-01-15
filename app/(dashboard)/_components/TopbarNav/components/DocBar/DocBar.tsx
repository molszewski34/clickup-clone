"use client";
import { useState } from "react";
import IconButton from "../components/IconButton";
import { Icons } from "@/icons/icons";
import Modal from "../components/Modal";
import ItemModal from "../ItemBar/components/ItemModal";

const DocBar: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const defaultTab = "Doc";
  return (
    <>
      <IconButton
        onClick={openModal}
        icon={<Icons.DocMenuIcon />}
        size="14px"
      />
      <Modal
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        width="638px"
        height="fit-content"
        sClassName="mt-36"
      >
        <ItemModal onClose={closeModal} defaultTab={defaultTab} />{" "}
      </Modal>
    </>
  );
};
export default DocBar;
