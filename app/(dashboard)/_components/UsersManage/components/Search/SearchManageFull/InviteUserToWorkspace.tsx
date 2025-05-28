"use client";

import { useForm } from "react-hook-form";
import { Icons } from "@/icons/icons";
import { getUsers } from "@/app/server-actions/user/getUsers";
import { getAuth } from "firebase/auth";
import { createUserAssociation } from "@/app/server-actions/user2workspace/createUserAssociation";
import { getUserAssociation } from "@/app/server-actions/user2workspace/getUserAssociation";
import { getWorkspaceById } from "@/app/server-actions/workspace/getWorkspaceById";
import { createUser } from "@/app/server-actions/user/createUser";
import { Role, User } from "@/app/server-actions/types";
import { generateFirebaseId } from "./utils/generateFirebaseId";
import { sendInvitationEmail } from "./utils/sendEmail";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface InviteFormProps {
  openModal: () => void;
  buttonText: string;
  modalIsOpen: boolean;
}

const InviteForm: React.FC<InviteFormProps> = ({
  openModal,
  buttonText,
  modalIsOpen,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<{ email: string }>();

  const auth = getAuth();
  const queryClient = useQueryClient();

  const inviteUserMutation = useMutation({
    mutationFn: async (email: string) => {
      const user = auth.currentUser;
      if (!user) throw new Error("User not authenticated");

      const users = await getUsers();
      const userToWorkspaceRef = await getUserAssociation(user.uid);
      if (!userToWorkspaceRef) throw new Error("User association not found");

      const associatedWorkspace: string = userToWorkspaceRef.workspaceId;
      const userFullName = userToWorkspaceRef.userFullName;
      const userEmail = userToWorkspaceRef?.userEmail;
      const workspace = await getWorkspaceById(associatedWorkspace);
      if (!workspace) throw new Error("Workspace not found");

      const workspaceName = workspace.name;
      const role = buttonText as Role;
      const invitedUserId = generateFirebaseId();

      const userExists = users.some(
        (existingUser: User) => existingUser.signUpEmail === email
      );

      if (userExists) {
        await createUserAssociation(user.uid, associatedWorkspace, role);
      } else {
        await createUser(
          "Unregistered",
          email,
          invitedUserId,
          associatedWorkspace
        );
        await createUserAssociation(invitedUserId, associatedWorkspace, role);
      }

      await sendInvitationEmail(email, userFullName, userEmail, workspaceName);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      queryClient.invalidateQueries({ queryKey: ["user2workspace"] });
      reset();
    },
    onError: (error) => {
      console.error("Invitation error:", error);
    },
  });

  const onSubmit = (data: { email: string }) => {
    inviteUserMutation.mutate(data.email);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full items-center h-[34px] pl-[15px]"
    >
      <div
        className={`flex w-full h-full border px-[15px] focus-within:border-gray-500 rounded-l ${
          errors.email ? "border-red-500" : "border-gray-300"
        }`}
      >
        <input
          type="text"
          placeholder="Invite by email"
          className="text-[14px] w-full h-full font-normal text-black bg-transparent outline-none"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email address",
            },
          })}
        />
      </div>
      <button
        type="button"
        onClick={openModal}
        className="flex items-center px-[15px] h-full border-t border-b border-gray-300"
      >
        <div className="flex justify-center items-center w-[88px] gap-1 font-sans text-sm text-black">
          <div className="truncate max-w-[72px]">{buttonText}</div>
          <Icons.PlayWorkspace
            className={`text-[12px] text-black ${modalIsOpen ? "-rotate-90" : "rotate-90"}`}
          />
        </div>
      </button>
      <button
        type="submit"
        className="flex items-center px-[30px] text-sm font-medium text-white h-full bg-violet-700 rounded-r"
        disabled={inviteUserMutation.isPending}
      >
        {inviteUserMutation.isPending ? "Inviting..." : "Invite"}
      </button>
    </form>
  );
};

export default InviteForm;
