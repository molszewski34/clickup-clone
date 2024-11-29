"use client";

import React, { useState, useEffect, useCallback } from "react";
import TopbarNav from "@/app/topBar-Nav/components/TopbarNav";
import ResizeHandle from "./components-SideBarContainer/ResizeHandle";
import SidebarContent from "./components-SideBarContainer/SidebarContent";
import SidebarModal from "./components-SideBarContainer/SidebarModal";

export default function SideBarContainer() {
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

  const fetchUserInitial = () => {
    setTimeout(() => {
      const userName = "Jakub King Workspace";
      const firstLetter = userName.trim().charAt(0).toUpperCase();
      setUserInitial(firstLetter);
      setUserName(userName);
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    fetchUserInitial();
  }, []);

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
      <TopbarNav />
      <div className="relative flex items-center h-full">
        <div
          style={{
            width: `${width}px`,
            maxWidth: `${maxContainerWidth}px`,
            height: "calc(100vh - 40px)",
            position: "relative",
          }}
          className="border border-gray-200 bg-opacity-50 bg-gray-100 shadow-md overflow-hidden group"
        >
          <SidebarContent
            userName={userName}
            userInitial={userInitial}
            loading={loading}
            width={width}
            openModal={openModal}
          />
        </div>

        <ResizeHandle width={width} onMouseDown={handleMouseDown} />
      </div>

      <SidebarModal isModalOpen={isModalOpen} closeModal={closeModal} />
    </>
  );
}
