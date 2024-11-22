"use client";

import AuthLayout from "../AuthLayout";
import { LoginRedirectButton } from "./_components/LoginButtonRedirect";
import { LoginForm } from "./_components/LoginForm";

const LoginPage = () => {
  return <AuthLayout Form={LoginForm} RedirectButton={LoginRedirectButton} />;
};

export default LoginPage;
