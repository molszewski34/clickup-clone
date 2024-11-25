import { useState } from "react";

import { auth } from "@/db/firebase/lib/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { SignupInputs } from "../page";
function useSignUpHandler() {
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [signUpError, setSignUpError] = useState("");
  const [isSigningUp, setIsSigningUp] = useState(false);
  const handleRegister = async (data: SignupInputs) => {
    setSignUpError("");

    try {
      setIsSigningUp(true);
      await createUserWithEmailAndPassword(auth, data.login, data.password);
      setIsSigningUp(false);
    } catch (err: unknown) {
      setIsSigningUp(false);
      if (err instanceof Error) {
        setSignUpError(err.message);
      } else {
        setSignUpError("An unknown error occurred.");
      }
    }
  };
  return {
    isSigningUp,
    signUpEmail,
    setSignUpEmail,
    signUpPassword,
    setSignUpPassword,
    signUpError,
    setSignUpError,
    handleRegister,
  };
}

export default useSignUpHandler;
