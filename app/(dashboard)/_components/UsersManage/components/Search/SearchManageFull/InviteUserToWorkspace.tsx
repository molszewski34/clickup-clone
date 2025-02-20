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
  } = useForm<{ email: string }>();

  const auth = getAuth();

  const onSubmit = async (data: { email: string }) => {
    try {
      const user = auth.currentUser;
      if (!user) throw new Error("User not authenticated");

      const users = await getUsers();

      const userToWorkspaceRef = await getUserAssociation(user.uid);
      if (!userToWorkspaceRef) {
        throw new Error("User association not found");
      }
      const associatedWorkspace: string = userToWorkspaceRef.workspaceId;
      const userFullName = userToWorkspaceRef.userFullName;
      const userEmail = userToWorkspaceRef?.userEmail;
      const workspace = await getWorkspaceById(associatedWorkspace);
      const workspaceName = workspace?.name;
      const role = buttonText as Role;
      const invitedUserId = generateFirebaseId();
      const signUpFullName = "Unregistered";
      const signUpEmail = data.email;

      const userExists = users.some(
        (existingUser: User) => existingUser.signUpEmail === data.email
      );

      if (userExists) {
        await createUserAssociation(user.uid, associatedWorkspace, role);
      } else {
        await createUser(signUpFullName, signUpEmail, invitedUserId);
        await createUserAssociation(invitedUserId, associatedWorkspace, role);
        await fetch("/api/send-email", {
          method: "POST",
          cache: "no-cache",
          body: JSON.stringify({
            email: data.email,
            userFullName: userFullName,
            userEmail: userEmail,
            workspaceName: workspaceName,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((response) => {
            console.log(response);
          });
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
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
            className={`text-[12px] text-black ${
              modalIsOpen ? "-rotate-90" : "rotate-90"
            }`}
          />
        </div>
      </button>
      <button
        type="submit"
        className="flex items-center px-[30px] text-sm font-medium text-white h-full bg-violet-700 rounded-r"
      >
        Invite
      </button>
    </form>
  );
};

export default InviteForm;
