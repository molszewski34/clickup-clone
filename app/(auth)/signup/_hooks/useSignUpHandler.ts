import { useState } from "react";
import { auth } from "@/db/firebase/lib/firebase";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
  getAuth,
} from "firebase/auth";
import { SignupInputs } from "../page";
import { createUserAssociation } from "@/app/server-actions/user2workspace/createUserAssociation";
import { Role } from "@/app/server-actions/types";
import { createWorkspace } from "@/app/server-actions/workspace/createWorkspace";
import { createUser } from "@/app/server-actions/user/createUser";
import { getUserByEmail } from "@/app/server-actions/user/getUserByEmail";
import { updateUser } from "@/app/server-actions/user/updateUser";
import { updateUserAssociation } from "@/app/server-actions/user2workspace/updateUserAssociation";
import { getUserAssociation } from "@/app/server-actions/user2workspace/getUserAssociation";

export const useSignUpHandler = () => {
  const [signUpFullName, setSignUpFullName] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [signUpError, setSignUpError] = useState("");
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [signUpSuccess, setSignUpSuccess] = useState("");

  const handleRegister = async (data: SignupInputs) => {
    setSignUpError("");
    setIsSigningUp(true);

    try {
      const userMailExist = await getUserByEmail(signUpEmail);
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.login,
        data.password
      );
      const user = userCredential.user;

      if (userMailExist) {
        await sendEmailVerification(user);
        const auth = getAuth();

        const currentUser = auth.currentUser;
        const currentUserId = currentUser?.uid;
        if (!currentUserId) {
          throw new Error("User ID is undefined. Cannot update user.");
        }
        const currentUserAssociation2Workspace =
          await getUserAssociation(currentUserId);
        if (!currentUserAssociation2Workspace) {
          throw new Error("Reference not found.");
        }
        const currentUserRole = currentUserAssociation2Workspace.role;

        await updateUser(currentUserId);
        await updateUserAssociation(currentUserId, currentUserRole);
      } else {
        await updateProfile(user, { displayName: signUpFullName });
        const userCreated = await createUser(
          signUpFullName,
          signUpEmail,
          user.uid
        );
        await sendEmailVerification(user);
        if (userCreated !== undefined) {
          const userDefaultWorkspace = await createWorkspace(
            `${signUpFullName}'s workspace`,
            "This is your default workspace"
          );
          if (!userDefaultWorkspace) {
            setSignUpError("Could not create workspace for a new user!");
          } else {
            await createUserAssociation(
              userCreated.id,
              userDefaultWorkspace.id,
              Role.admin
            );
          }
          setSignUpSuccess("Account created successfully!");
        } else {
          console.error("Error! Newly created user not found");
        }
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setSignUpError(err.message);
      } else {
        setSignUpError("An unknown error occurred.");
      }
    }
    setIsSigningUp(false);
  };
  return {
    signUpFullName,
    setSignUpFullName,
    isSigningUp,
    signUpEmail,
    setSignUpEmail,
    signUpPassword,
    setSignUpPassword,
    signUpError,
    setSignUpError,
    signUpSuccess,
    handleRegister,
  };
};
