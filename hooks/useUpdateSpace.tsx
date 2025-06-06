import { useData } from "@/context/DataProvider/DataProvider";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useGetCurrentWorkspace from "./useGetCurrentWorkspace";
import { Space } from "@/app/server-actions/types";
import { updateSpace } from "@/app/server-actions/space/updateSpace";

export const useUpdateSpace = () => {
  const { spaceId, spaceName, isPrivate } = useData();
  const { workspaceId } = useGetCurrentWorkspace();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      return await updateSpace(
        workspaceId as string,
        spaceName,
        spaceId,
        isPrivate
      );
    },

    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: ["space", spaceId] });

      const previousSpace = queryClient.getQueryData<Space>(["space", spaceId]);

      queryClient.setQueryData<Space>(["space", spaceId], (old) => {
        return old
          ? {
              ...old,
              name: spaceName,
              isPrivate: isPrivate,
            }
          : undefined;
      });

      return { previousSpace };
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["spaces"] });
    },

    onError: (_err, _updatedTask, context) => {
      if (context?.previousSpace) {
        queryClient.setQueryData(["space", spaceId], context.previousSpace);
      }
      console.error("Error when updating the space");
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["space", spaceId] });
    },
  });
};
