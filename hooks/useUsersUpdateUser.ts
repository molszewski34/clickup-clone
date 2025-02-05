import { updateUser } from "@/app/server-actions/user/updateUser";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useUsersUpdateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      userId,
      userLastActive,
      userFullName,
    }: {
      userId: string;
      userLastActive?: Date;
      userFullName?: string;
    }) => {
      return await updateUser(userId, userLastActive, userFullName);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      console.log("User updated successfully!");
    },
    onError: (error) => {
      console.error("Error when updating the user data: ", error);
    },
  });
};
