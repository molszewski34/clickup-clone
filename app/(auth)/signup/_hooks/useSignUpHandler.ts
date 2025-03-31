import { useState } from "react";
import { auth } from "@/db/firebase/lib/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { SignupInputs } from "../page";
import { getUserByEmail } from "@/app/server-actions/user/getUserByEmail";
import handleSigningUpNewUser from "../utils/handleSigningUpNewUser";
import handleInvitedUser from "../utils/handleInvitedUser";

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
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.login,
        data.password
      );
      const user = userCredential.user;

      if (user) {
        //* being forced to not use firebase server functions i managed to create new working way. Here is point by point explanation.
        const userMailExist = await getUserByEmail(signUpEmail); //* To validate if user is joining workspace or just signing up function check if user has been added to database in InviteToWorkspace.tsx. If true process start
        // if (!userMailExist) {
        //   throw new Error("User email do not exist");
        // }
        const userMailId = userMailExist?.id; //* Here code starts to be complicated. Because firebase (or any db model) don't allow to change key of user - server takes record with old id - clones to new (id from firebase auth) and delete old. It uses additional db callbacks but makes job done. All of this is made because this hook can't take params needed for proper workflow. Hook is also out of context scope. This operation is required for updateUser to work.

        if (userMailExist) {
          //* Check function for detailed explanation of other processes
          handleInvitedUser(signUpEmail, signUpFullName, user, userMailId);
        } else {
          handleSigningUpNewUser(
            signUpFullName,
            data,
            signUpEmail,
            setSignUpError,
            setSignUpSuccess
          );
        }
      } else {
        console.error("User object is missing");
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
