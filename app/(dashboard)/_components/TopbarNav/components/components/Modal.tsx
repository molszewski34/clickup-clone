import React, { ReactNode } from "react";

interface ModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
  children: ReactNode;
  width: string;
  height: string;
  sClassName?: string;
}

const Modal: React.FC<ModalProps> = ({
  isModalOpen,
  closeModal,
  children,
  width,
  height,
  sClassName,
}) => {
  return (
    <div
      className={`fixed inset-0 flex justify-center bg-gray-800 bg-opacity-50 z-50 ${
        isModalOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      onClick={closeModal}
    >
      <div
        className={`bg-white rounded-xl shadow-custom border border-gray-200  ${sClassName} `}
        style={{ width: width, height: height }}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
