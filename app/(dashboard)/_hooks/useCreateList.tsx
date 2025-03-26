import { useMutation, useQueryClient } from "@tanstack/react-query";

import { useData } from "@/context/DataProvider/DataProvider";
import { useRouter } from "next/navigation";
import { useUser } from "@/context/DataProvider/UserDataProvider";
import { createList } from "@/app/server-actions/list/createList";
import { useUsersGetUserById } from "@/hooks/useUsersGetUserById";

interface UseCreateListProps {
  toggleModal: (modal: "none" | "menuSpaceList" | "createList") => void;
}

export const useCreateList = ({ toggleModal }: UseCreateListProps) => {
  const router = useRouter();
  const { spaceId } = useData();
  const { userId } = useUser();
  const queryClient = useQueryClient();
  const { setListId } = useData();
  const { data: userData } = useUsersGetUserById(userId);

  const workspaceId = userData?.activeWorkspace;
  if (!workspaceId) {
    throw new Error("Workspace is undefined");
  }
  return useMutation({
    mutationFn: async ({
      listName,
      isPrivate,
    }: {
      listName: string;
      isPrivate: boolean;
    }) => {
      return await createList(workspaceId, listName, spaceId, isPrivate);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["lists"] });

      toggleModal("none");

      router.push(`/${workspaceId}/l/${data?.id}`);
      if (!data) {
        throw new Error("List not found");
      }
      setListId(data.id);
    },
    onError: (error: unknown) => {
      console.error("Error creating list:", error);
    },
  });
};
