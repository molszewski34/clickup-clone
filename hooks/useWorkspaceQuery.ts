"use client";

import { getWorkspaces } from "@/app/server-actions/workspace-old/getWorkspaces";
import { useUser } from "@/context/DataProvider/UserDataProvider";
import { useQuery } from "@tanstack/react-query";

export const useWorkspaceQuery = () => {
  const { userId } = useUser();

  return useQuery({
    queryKey: ["workspaces", userId],
    queryFn: () => {
      if (!userId) {
        return Promise.resolve([]); // Zwraca pustą tablicę, jeśli dane są niepełne
      }
      return getWorkspaces(userId);
    },
    enabled: !!userId, // Wyłącz zapytanie, jeśli `userId` jest niedostępny
  });
};
