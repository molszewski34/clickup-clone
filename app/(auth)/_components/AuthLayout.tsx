import Image from "next/image";
import logo from "@/public/app_logo.svg";
import { ReactNode } from "react";
import { AuthRedirectButton } from "./AuthRedirectButton";
import { RedirectTo } from "../types/types";

export default function AuthLayout({
  redirectTo,
  children,
}: {
  redirectTo: RedirectTo;
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col h-screen bg-login-page bg-cover">
          <div className="flex flex-row px-10 py-12 justify-between">
            <Image src={logo} alt="demo logo"></Image>
            <AuthRedirectButton redirectTo={redirectTo} />
          </div>
          <div className="flex h-full justify-center">
            <div className="flex flex-col w-[480px] py-[30px] px-[60px] shadow-md bg-white rounded-2xl h-fit items-center gap-5">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}