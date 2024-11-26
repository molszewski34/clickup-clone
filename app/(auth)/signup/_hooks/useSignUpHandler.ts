import { useState } from "react";

import { auth, db } from "@/db/firebase/lib/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { SignupInputs } from "../page";
import { doc, setDoc } from "firebase/firestore";
function useSignUpHandler() {
  const [signUpFullName, setSignUpFullName] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [signUpError, setSignUpError] = useState("");
  const [isSigningUp, setIsSigningUp] = useState(false);
  const handleRegister = async (data: SignupInputs) => {
    setSignUpError("");

    try {
      setIsSigningUp(true);
      const userCredential = await createUserWithEmailAndPassword(auth, data.login, data.password);
      const user = userCredential.user;
      await updateProfile(user, { displayName: signUpFullName });
      await setDoc(doc(db, "users", user.uid), {
        signUpFullName,
        signUpEmail,
        uid: user.uid,
        createdAt: new Date().toISOString(),
      });

      console.log("Account created successfully!");
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
    signUpFullName,
    setSignUpFullName,
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
