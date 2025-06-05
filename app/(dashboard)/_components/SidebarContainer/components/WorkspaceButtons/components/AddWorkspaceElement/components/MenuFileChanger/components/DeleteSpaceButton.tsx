import React from "react";
import { useData } from "@/context/DataProvider/DataProvider";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getAuth } from "firebase/auth";
import { useUsersGetUserById } from "@/hooks/useUsersGetUserById";
import useUserAssociation from "@/hooks/useUserAssociation";
import { deleteSpace } from "@/app/server-actions/space/deleteSpace";

const DeleteSpaceButton = ({
  spaceName,
  inputValue,
}: {
  spaceName: string;
  inputValue: string;
  closeModal: () => void;
}) => {
  const queryClient = useQueryClient();
  const auth = getAuth();
  const currentUser = auth.currentUser;
  const userId = currentUser?.uid;

  if (!userId) {
    throw new Error("User is not authenticated");
  }

  const { userAssociation } = useUserAssociation();

  // Pobranie danych użytkownika
  const { data: userData } = useUsersGetUserById(userId);
  const workspaceId = userData?.activeWorkspace;

  if (!workspaceId) {
    throw new Error("Workspace is undefined");
  }

  const userRole = userAssociation?.role;

  const { spaceId } = useData();

  const mutation = useMutation<void, Error>({
    mutationFn: () => deleteSpace(workspaceId, spaceId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["spaces"] });
    },
    onError: (error) => {
      console.error("Error deleting project:", error);
    },
  });

  const handleDelete = () => {
    if (userRole !== "Admin") {
      console.error("User have no permision to delete a space");
      return;
    }
    mutation.mutate();
  };

  return (
    <button
      className={`flex-1 px-4 py-2 bg-red-600 font-sans text-sm font-medium text-white rounded-lg hover:bg-red-800 ${
        spaceName !== inputValue ? "opacity-70 cursor-not-allowed" : ""
      }`}
      onClick={handleDelete}
      disabled={spaceName !== inputValue}
    >
      Delete
    </button>
  );
};

export default DeleteSpaceButton;
