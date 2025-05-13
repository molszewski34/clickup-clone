import { getUserAssociation } from "@/app/server-actions/user2workspace/getUserAssociation";
import { useQuery } from "@tanstack/react-query";

export const useGetTaskAssignedToUser = (userId?: string) => {
  return useQuery({
    queryKey: ["user2task", userId],
    queryFn: () => {
      if (!userId) throw new Error("userId is required");
      return getUserAssociation(userId);
    },
    enabled: !!userId,
  });
};
