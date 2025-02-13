import { useState } from "react";
import { auth } from "@/db/firebase/lib/firebase";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";
import { SignupInputs } from "../page";
import { createUserAssociation } from "@/app/server-actions/user2workspace/createUserAssociation";
import { Role } from "@/app/server-actions/types";
import { createWorkspace } from "@/app/server-actions/workspace/createWorkspace";
import { createUser } from "@/app/server-actions/user/createUser";

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
      const userCredential = await createUserWithEmailAndPassword(auth, data.login, data.password);
      const user = userCredential.user;
      await sendEmailVerification(user);
      await updateProfile(user, { displayName: signUpFullName });
      const userCreated = await createUser(signUpFullName, signUpEmail, user.uid);
      if (userCreated !== undefined) {
        const userDefaultWorkspace = await createWorkspace(
          `${signUpFullName}'s workspace`,
          "This is your default workspace"
        );
        if (!userDefaultWorkspace) {
          setSignUpError("Could not create workspace for a new user!");
        } else {
          await createUserAssociation(userCreated.id, userDefaultWorkspace.id, Role.admin);
        }
        setSignUpSuccess("Account created successfully!");
      } else {
        console.error("Error! Newly created user not found");
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
