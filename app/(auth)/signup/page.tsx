"use client";

// import { authFormTypes } from "../types/types";
import useLoginHandler from "./_hooks/useSignUpHandler";
import AuthLayout from "../AuthLayout";
import { SignupRedirectButton } from "./components/SignupButtonRedirect";
import { SignupForm } from "./components/SignupForm";

const LoginPage = () => {
  const {
    // loginError,
    // loginEmail,
    // setLoginEmail,
    // loginPassword,
    // setLoginPassword,
    // handleLogin,
  } = useLoginHandler();

  return <AuthLayout Form={SignupForm} RedirectButton={SignupRedirectButton} />;
};

export default LoginPage;
