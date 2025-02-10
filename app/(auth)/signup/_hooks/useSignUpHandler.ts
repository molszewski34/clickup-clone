import { useState } from "react";
import { auth, db } from "@/db/firebase/lib/firebase";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";
import { SignupInputs } from "../page";
import { doc, setDoc } from "firebase/firestore";
import { createUserAssociation } from "@/app/server-actions/user2target/createUserAssociation";
import { Role, TargetType } from "@/app/server-actions/types";
import { createWorkspace } from "@/app/server-actions/workspace/createWorkspace";

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
      await setDoc(doc(db, "users", user.uid), {
        signUpFullName,
        signUpEmail,
        uid: user.uid,
        createdAt: new Date().toISOString(),
      });
      const userDefaultWorkspace = await createWorkspace(
        `${signUpFullName}'s space`,
        "This is your private space."
      );
      if (!userDefaultWorkspace) {
        setSignUpError("Could not create workspace for a new user!");
      } else {
        await createUserAssociation(
          TargetType.workspace,
          user.uid,
          userDefaultWorkspace.id,
          Role.admin
        );
      }
      setSignUpSuccess("Account created successfully!");
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
