"use client";

import React, { useState, useRef, useEffect } from "react";
import { ModalProps } from "@/app/topBar-Nav/components/type";
import SpaceModalHeader from "./components-SpaceModal/SpaceModalHeader";
import SpaceModalBody from "./components-SpaceModal/SpaceModalBody";
import SpaceModalFooter from "./components-SpaceModal/SpaceModalFooter";

export default function SpaceModal({ onClose }: ModalProps) {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedColor, setSelectedColor] = useState("indigo-500");
  const [selectedIcon, setSelectedIcon] = useState<string>("");

  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleOutsideClick = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setModalVisible(false);
    }
  };

  useEffect(() => {
    if (isModalVisible) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isModalVisible]);

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
      <SpaceModalFooter />
    </div>
  );
}
