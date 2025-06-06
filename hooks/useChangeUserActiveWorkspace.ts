"use client";
import { User, Workspace } from "@/app/server-actions/types";
import { getUserById } from "@/app/server-actions/user/getUserById";
import { updateUser } from "@/app/server-actions/user/updateUser";
import { getWorkspaceById } from "@/app/server-actions/workspace/getWorkspaceById";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export const useChangeUserActiveWorkspace = () => {
  const router = useRouter();
  const changeUserActiveWorkspace = async ({
    userId,
    newActiveWorkspaceId,
  }: {
    userId: User["id"];
    newActiveWorkspaceId: Workspace["id"];
  }) => {
    const user = await getUserById(userId);
    const workspace = await getWorkspaceById(newActiveWorkspaceId);

    if (!user) {
      console.error("Could not find user!");
      return;
    }
    if (!workspace) {
      console.error("Could not find workspace!");
      return;
    }

    return await updateUser(userId, undefined, undefined, newActiveWorkspaceId);
  };

  return useMutation({
    mutationFn: ({
      userId,
      newActiveWorkspaceId,
    }: {
      userId: User["id"];
      newActiveWorkspaceId: Workspace["id"];
    }) => changeUserActiveWorkspace({ userId, newActiveWorkspaceId }),
    onSuccess: (_, variables) => {
      router.push(`/${variables.newActiveWorkspaceId}/home`);
    },
    onError: (error) => {
      console.error("Error occured when switching workspace.", error);
    },
  });
};
