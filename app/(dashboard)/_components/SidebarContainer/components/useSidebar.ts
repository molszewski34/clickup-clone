import { useState, useEffect, useCallback } from "react";
import { useUserProfile } from "@/hooks/useUserProfile";

export function useSidebar() {
  const [modalState, setModalState] = useState("none");
  const [width, setWidth] = useState(369);
  const [isResizing, setIsResizing] = useState(false);
  const [userName, setUserName] = useState("");
  const [userInitial, setUserInitial] = useState("");
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { userData } = useUserProfile();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const fetchUserInitial = useCallback(() => {
    const userName = userData?.signUpFullName || "";
    const firstLetter = userName.trim().charAt(0).toUpperCase() || "";
    setUserInitial(firstLetter);
    setUserName(userName);
    setLoading(false);
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
        const newWidth = e.clientX;
        console.log("Mouse Move: Setting width to", newWidth);
        setWidth(newWidth < 200 ? 60 : Math.min(Math.max(newWidth, 60), 369));
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

  const shrinkSidebar = () => {
    setWidth(60);
  };

  return {
    modalState,
    width,
    userName,
    userInitial,
    loading,
    isModalOpen,
    openModal,
    closeModal,
    toggleModal,
    handleMouseDown,
    shrinkSidebar,
  };
}
