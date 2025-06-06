import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createSpace } from "@/app/server-actions/space/createSpace";
import { useUsersGetUserById } from "./useUsersGetUserById";

import { getAuth } from "firebase/auth";
import { useWorkspaceFormContext } from "@/context/FormProviders/WorkspaceFormProvider";

export const useCreateSpace = () => {
  const queryClient = useQueryClient();

  const auth = getAuth();

  const currentUser = auth.currentUser;

  const { formData } = useWorkspaceFormContext();

  const userId = currentUser?.uid;
  if (!userId) {
    throw new Error("User is not authethificated");
  }

  const { data: userData } = useUsersGetUserById(userId);

  const workspaceId = userData?.activeWorkspace;
  if (!workspaceId) {
    throw new Error("Workspace is undefined");
  }

  return useMutation({
    mutationFn: async () => {
      await createSpace(formData, workspaceId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["spaces"] });
    },
    onError: (error: unknown) => {
      console.error("Error creating workspace:", error);
    },
  });
};
