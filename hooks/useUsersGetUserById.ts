import { getUserById } from "@/app/server-actions/user/getUserById";
import { useQuery } from "@tanstack/react-query";

export const useUsersGetUserById = (userId: string) => {
  return useQuery({
    queryKey: ["user", userId],
    queryFn: () => getUserById(userId),
  });
};
