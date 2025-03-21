import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useData } from "@/context/DataProvider/DataProvider";
import useGetCurrentWorkspace from "@/hooks/useGetCurrentWorkspace";
import { deleteList } from "@/app/server-actions/list/deleteList";

const DeleteListButton: React.FC = () => {
  const queryClient = useQueryClient();
  const { workspaceId } = useGetCurrentWorkspace();

  const { spaceId, listId } = useData();
  const [isDeleting, setIsDeleting] = useState(false);

  const mutation = useMutation<void, Error>({
    mutationFn: () => deleteList(workspaceId ?? "", listId, spaceId),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["lists"],
      });
      setIsDeleting(true);
    },
    onError: (error) => {
      console.error("Error deleting list:", error);
    },
  });

  return (
    <button
      className={`flex-1 px-4 py-2 bg-red-600 ${
        isDeleting ? "bg-red-600" : "bg-red-300"
      } font-sans text-sm font-medium text-white rounded-lg hover:bg-red-800`}
      onClick={() => mutation.mutate()}
      disabled={isDeleting}
    >
      Delete
    </button>
  );
};

export default DeleteListButton;
