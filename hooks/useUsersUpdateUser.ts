import { updateUser } from "@/app/server-actions/user/updateUser";
import { useMutation } from "@tanstack/react-query";
import { Timestamp } from "firebase/firestore";

export const useUsersUpdateUser = () => {
  return useMutation({
    mutationFn: async ({
      userId,
      userLastActive,
      userFullName,
    }: {
      userId: string;
      userLastActive?: Timestamp;
      userFullName?: string;
    }) => {
      return await updateUser(userId, userLastActive, userFullName);
    },
    onSuccess: () => {},
    onError: (error) => {
      console.error("Error when updating the user data: ", error);
    },
  });
};
