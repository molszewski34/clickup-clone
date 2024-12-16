import React from "react";
import { useData } from "@/context/DataProvider/DataProvider";
import { useUser } from "@/context/DataProvider/UserDataProvider";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteWorkspace } from "@/app/server-actions/workspace/deleteWorkspace";

const DeleteWorkspaceButton = ({
  workspaceName,
  inputValue,
  closeModal,
}: {
  workspaceName: string;
  inputValue: string;
  closeModal: () => void;
}) => {
  const queryClient = useQueryClient();

  const { workspaceId } = useData();
  const { userId } = useUser();

  const mutation = useMutation<void, Error>({
    mutationFn: () => deleteWorkspace(userId, workspaceId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["workspaces", userId, workspaceId],
      });
      closeModal();
    },
    onError: (error) => {
      console.error("Error deleting project:", error);
    },
  });
  return (
    <button
      className={`flex-1 px-4 w- py-2 bg-red-600 font-sans text-sm font-medium text-white rounded-lg hover:bg-red-800 ${
        workspaceName != inputValue ? "opacity-70" : ""
      }`}
      onClick={() => mutation.mutate()}
      disabled={workspaceName != inputValue}
    >
      Dalete
    </button>
  );
};

export default DeleteWorkspaceButton;
