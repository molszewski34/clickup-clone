import Image from "next/image";
import logo from "@/public/big_logo.svg";
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
          <div className="flex flex-row justify-between h-[100px] p-[30px] z-10">
            <Image src={logo} alt="demo logo"></Image>
            <AuthRedirectButton redirectTo={redirectTo} />
          </div>
          <div className="absolute flex h-full w-full items-center justify-center pointer-events-auto">
            <div className="flex flex-col w-1/3 max-w-[500px] py-[30px] px-[60px] shadow-md bg-white rounded-2xl h-fit gap-5">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
