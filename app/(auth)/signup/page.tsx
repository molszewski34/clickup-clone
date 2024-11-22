"use client";

import AuthLayout from "../AuthLayout";
import { SignupRedirectButton } from "./_components/SignupButtonRedirect";
import { SignupForm } from "./_components/SignupForm";

const LoginPage = () => {
  return <AuthLayout Form={SignupForm} RedirectButton={SignupRedirectButton} />;
};

export default LoginPage;
