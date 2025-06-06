import { useData } from "@/context/DataProvider/DataProvider";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import useGetCurrentWorkspace from "./useGetCurrentWorkspace";
import { List } from "@/app/server-actions/types";
import { updateList } from "@/app/server-actions/List/updateList";

export const useUpdateList = () => {
  const { listId, spaceId, listName, isPrivate } = useData();
  const { workspaceId } = useGetCurrentWorkspace();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      return await updateList(
        workspaceId as string,
        listName,
        spaceId,
        isPrivate,
        listId
      );
    },

    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: ["list", listId] });

      const previousList = queryClient.getQueryData<List>(["list", listId]);

      queryClient.setQueryData<List>(["list", listId], (old) => {
        return old
          ? {
              ...old,
              name: listName,
              isPrivate: isPrivate,
            }
          : undefined;
      });

      return { previousList };
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["lists"] });
    },

    onError: (_err, _updatedTask, context) => {
      if (context?.previousList) {
        queryClient.setQueryData(["list", listId], context.previousList);
      }
      console.error("Error when updating the list");
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["list", listId] });
    },
  });
};
