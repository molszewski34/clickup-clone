import { useState, useEffect, useCallback, useMemo } from "react";
import { useUserProfile } from "@/hooks/useUserProfile";
import { useGetWorkspaceById } from "@/hooks/useGetWorkspaceById";
import { useParams } from "next/navigation";
import { Workspace } from "@/app/server-actions/types";
import { useGetWorkspacesForUser } from "@/hooks/useGetWorkspacesForUser";
import { useUser } from "@/context/DataProvider/UserDataProvider";
import { useQueryClient } from "@tanstack/react-query";

export function useSidebar() {
  const [modalState, setModalState] = useState("none");
  const [width, setWidth] = useState(369);
  const [isResizing, setIsResizing] = useState(false);
  const [userInitial, setUserInitial] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { userData } = useUserProfile();
  const { userId } = useUser();
  const { id } = useParams();
  const {
    data: userWorkspaces,
    isLoading: isLoadingUserWorkspaces,
    isRefetching: isRefetchingUserWorkspaces,
  } = useGetWorkspacesForUser(userId);
  const {
    data: currentWorkspace,
    isLoading: isLoadingCurrentWorkspace,
    isRefetching: isRefetchingCurrentWorkspace,
  } = useGetWorkspaceById(id as Workspace["id"]);

  const queryClient = useQueryClient();

  useEffect(() => {
    //@ts-expect-error react query here accepts string[], but typescript in react query expects {queryKey: ["workspace", "userWorkspaces"]} but with object syntax the function does not work
    queryClient.invalidateQueries(["workspace", "userWorkspaces"]);
  }, [id, queryClient]);

  const isLoading =
    isLoadingCurrentWorkspace ||
    isLoadingUserWorkspaces ||
    isRefetchingCurrentWorkspace ||
    isRefetchingUserWorkspaces;

  const workspacesToSwitch = userWorkspaces?.filter(
    (singleWorkspace) => singleWorkspace.id !== currentWorkspace?.id
  );

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const fetchUserInitial = useCallback(() => {
    const userName = userData?.signUpFullName || "";
    const firstLetter = userName.trim().charAt(0).toUpperCase() || "";
    setUserInitial(firstLetter);
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

  return useMemo(() => {
    return {
      isLoading,
      currentWorkspace,
      workspacesToSwitch,
      modalState,
      width,
      userInitial,
      isModalOpen,
      openModal,
      closeModal,
      toggleModal,
      handleMouseDown,
      shrinkSidebar,
    };
  }, [
    currentWorkspace,
    isLoading,
    isModalOpen,
    modalState,
    userInitial,
    userWorkspaces,
    workspacesToSwitch,
    width,
  ]);
}
