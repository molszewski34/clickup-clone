"use client";

import React, { useState, useEffect, useCallback } from "react";

import { useUserProfile } from "@/hooks/useUserProfile";
import SidebarContent from "./components/SidebarContent/SidebarContent";
import ResizeHandle from "./components/ResizeHandle";
import SidebarModal from "./components/SidebarModal/SidebarModal";
import ContainerModalFavouritesButton from "./components/ContainerModalFavouritesButton";
import ContainerModalWorkButtons from "./components/ContainerModalWorkButtons";

export default function SidebarContainer() {
  const [modalState, setModalState] = useState<
    "none" | "menuFavorite" | "menuSpace"
  >("none");

  const maxContainerWidth = 369;
  const minContainerWidth = 60;
  const [width, setWidth] = useState(maxContainerWidth);
  const [isResizing, setIsResizing] = useState(false);
  const [userName, setUserName] = useState("");
  const [userInitial, setUserInitial] = useState("");
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const { userData } = useUserProfile();

  const fetchUserInitial = useCallback(() => {
    setTimeout(() => {
      const userName = userData?.signUpFullName || "";
      const firstLetter = userName.trim().charAt(0).toUpperCase() || "";
      setUserInitial(firstLetter);
      setUserName(userName);
      setLoading(false);
    }, 1000);
  }, [userData]);

  useEffect(() => {
    if (userData) {
      fetchUserInitial();
    }
  }, [userData, fetchUserInitial]);

  const toggleModal = (modal: "none" | "menuFavorite" | "menuSpace") => {
    setModalState(modalState === modal ? "none" : modal);
  };

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (isResizing) {
        let newWidth = e.clientX;
        if (newWidth < 200) newWidth = minContainerWidth;
        else
          newWidth = Math.min(
            Math.max(newWidth, minContainerWidth),
            maxContainerWidth
          );
        setWidth(newWidth);
      }
    },
    [isResizing]
  );

  const handleMouseUp = useCallback(() => {
    setIsResizing(false);
  }, []);

  const handleMouseDown = () => {
    setIsResizing(true);
  };

  useEffect(() => {
    if (isResizing) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isResizing, handleMouseMove, handleMouseUp]);

  return (
    <>
      <div className="relative flex items-center h-full">
        <div
          style={{
            width: `${width}px`,
            maxWidth: `${maxContainerWidth}px`,
            height: "calc(100vh - 40px)",
            position: "relative",
          }}
          className="border border-gray-200 bg-opacity-50 bg-gray-100 shadow-md  group custom-scrollbar overflow-x-hidden overflow-y-auto"
        >
          <SidebarContent
            userName={`${userName} workspace`}
            userInitial={userInitial}
            loading={loading}
            width={width}
            openModal={openModal}
            toggleModal={toggleModal}
          />
        </div>

        <ResizeHandle width={width} onMouseDown={handleMouseDown} />
      </div>

      {modalState === "menuFavorite" && (
        <div
          className="fixed inset-0 flex justify-center bg-transparent bg-opacity-50 z-50"
          style={{ left: `${minContainerWidth}px` }}
          onClick={() => setModalState("none")}
        >
          <div
            id="menuWorkspaceList"
            className="fixed z-50 top-10 w-[255px] bg-gray-50 border-r border-gray-300  py-2"
            style={{
              left: `${minContainerWidth}px`,
              height: `calc(100vh - 40px)`,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <ContainerModalFavouritesButton />
          </div>
        </div>
      )}
      {modalState === "menuSpace" && (
        <div
          className="fixed inset-0 flex justify-center bg-transparent bg-opacity-50 z-50"
          style={{ left: `${minContainerWidth}px` }}
          onClick={() => setModalState("none")}
        >
          <div
            id="menuWorkspaceList"
            className="fixed z-50 top-10 w-[255px] bg-gray-50 border-r border-gray-300  py-2"
            style={{
              left: `${minContainerWidth}px`,
              height: `calc(100vh - 40px)`,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <ContainerModalWorkButtons openModal={openModal} />
          </div>
        </div>
      )}

      <SidebarModal isModalOpen={isModalOpen} closeModal={closeModal} />
    </>
  );
}
