"use client";

import { useState } from "react";
import { auth, initializeFirebasePersistence } from "@/db/firebase/lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { LoginInputs } from "../page";
import { getUserById } from "@/app/server-actions/user/getUserById";
function useLoginHandler() {
  const [loginError, setLoginError] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const router = useRouter();

  const handleLogin = async (data: LoginInputs) => {
    setLoginError("");
    setIsLoggingIn(true);
    try {
      await initializeFirebasePersistence();
      const userCredential = await signInWithEmailAndPassword(auth, data.login, data.password);
      const loggedUser = await getUserById(userCredential.user.uid);

      if (loggedUser && loggedUser.activeWorkspace) {
        router.push(`/${loggedUser.activeWorkspace}/home`);
        localStorage.setItem("userId", loggedUser.id);
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setLoginError(err.message);
      } else {
        setLoginError("An unknown error occurred.");
      }
    }
    setIsLoggingIn(false);
  };

  return {
    isLoggingIn,
    loginError,
    setLoginError,
    loginEmail,
    setLoginEmail,
    loginPassword,
    setLoginPassword,
    handleLogin,
  };
}

export default useLoginHandler;
