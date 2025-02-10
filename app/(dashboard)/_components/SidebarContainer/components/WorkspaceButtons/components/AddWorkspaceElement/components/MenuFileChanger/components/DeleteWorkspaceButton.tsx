import React from "react";
import { useData } from "@/context/DataProvider/DataProvider";
import { useUser } from "@/context/DataProvider/UserDataProvider";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteWorkspace } from "@/app/server-actions/workspace-old/deleteWorkspace";

const DeleteWorkspaceButton = ({
  workspaceName,
  inputValue,
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
      queryClient.invalidateQueries({ queryKey: ["workspaces"] });
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
      disabled={workspaceName != inputValue}>
      Delete
    </button>
  );
};

export default DeleteWorkspaceButton;
