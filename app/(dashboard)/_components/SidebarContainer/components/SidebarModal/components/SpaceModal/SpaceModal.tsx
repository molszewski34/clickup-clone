"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { useWorkspaceFormContext } from "@/context/FormProviders/WorkspaceFormProvider";
import SpaceModalHeader from "./components/SpaceModalHeader";
import SpaceModalBody from "./components/SpaceModalBody/SpaceModalBody";
import SpaceModalFooter from "./components/SpaceModalFooter";
import { ModalProps } from "@/app/(dashboard)/_components/TopbarNav/components/type";

export default function SpaceModal({ onClose }: ModalProps) {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedColor, setSelectedColor] = useState("indigo-500");
  const [selectedIcon, setSelectedIcon] = useState<string>("");

  const modalRef = useRef<HTMLDivElement | null>(null);
  const { setError } = useWorkspaceFormContext();

  const handleOutsideClick = useCallback(
    (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setModalVisible(false);
        setError(false);
      }
    },
    [setError]
  );

  useEffect(() => {
    if (isModalVisible) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isModalVisible, handleOutsideClick]);

  return (
    <div ref={modalRef} className="relative bg-white rounded-lg shadow-custom">
      <SpaceModalHeader onClose={onClose} />
      <div className="w-full h-px bg-gray-200" />
      <SpaceModalBody
        isModalVisible={isModalVisible}
        setModalVisible={setModalVisible}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
        selectedIcon={selectedIcon}
        setSelectedIcon={setSelectedIcon}
      />
      <SpaceModalFooter onClose={onClose} />
    </div>
  );
}
