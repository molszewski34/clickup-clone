import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUserAssociation } from "@/app/server-actions/user2workspace/deleteUserAssociation";

interface Props {
  associationId: string;
  setOpenRemoveUserFromWorkspaceModal: (value: boolean) => void;
}

const RemoveUserFromWorkspaceButton: React.FC<Props> = ({
  associationId,
  setOpenRemoveUserFromWorkspaceModal,
}) => {
  const queryClient = useQueryClient();

  const mutation = useMutation<void, Error>({
    mutationFn: async () => {
      await deleteUserAssociation(associationId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user2workspace"] });
      setOpenRemoveUserFromWorkspaceModal(false);
    },
    onError: (error) => {
      console.error("❌ Error deleting user association:", error);
    },
  });

  return (
    <button
      className={`flex-1 px-4 py-2 font-sans text-sm font-medium text-white rounded-lg ${
        mutation.isPending
          ? "bg-red-300 cursor-not-allowed"
          : "bg-red-600 hover:bg-red-800"
      }`}
      onClick={() => {
        console.log("🖱️ Remove button clicked");
        mutation.mutate();
      }}
      disabled={mutation.isPending}
    >
      {mutation.isPending ? "Removing..." : "Remove"}
    </button>
  );
};

export default RemoveUserFromWorkspaceButton;
