"use client";

import AuthLayout from "../AuthLayout";
// import { authFormTypes } from "../types/types";
// import LogInWithGoogle from "./_components/LogInWithGoogle";
import useLoginHandler from "./_hooks/useLoginHandler";
import { LoginRedirectButton } from "./components/LoginButtonRedirect";
import { LoginForm } from "./components/LoginForm";

const LoginPage = () => {
  const {
    // loginError,
    // loginEmail,
    // setLoginEmail,
    // loginPassword,
    // setLoginPassword,
    // handleLogin,
  } = useLoginHandler();

  return <AuthLayout Form={LoginForm} RedirectButton={LoginRedirectButton} />;
};

export default LoginPage;
