import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "@/db/firebase/lib/firebase";
import { useData } from "@/context/DataProvider/DataProvider";
import useGetCurrentWorkspace from "@/hooks/useGetCurrentWorkspace";
import { deleteList } from "@/app/server-actions/List/deleteList";

const DeleteProjectButton: React.FC = () => {
  const queryClient = useQueryClient();

  const { workspaceId, projectId } = useData();
  const { userId } = useUser();
  const [isDeleting, setIsDeleting] = useState(false);

  const mutation = useMutation<void, Error>({
    mutationFn: () => deleteProject(userId, workspaceId, projectId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["projects", userId, workspaceId],
      });
      setIsDeleting(true);
    },
    onError: (error) => {
      console.error("Error deleting project:", error);
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

export default DeleteProjectButton;
