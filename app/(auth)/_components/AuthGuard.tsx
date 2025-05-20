"use client";

import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter, usePathname } from "next/navigation";
import { auth } from "@/db/firebase/lib/firebase";
import { useUsersGetUserById } from "@/hooks/useUsersGetUserById";
import { LoadingScreen } from "@/components/LoadingScreen";

export const AuthGuard = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [isLoading, setIsLoading] = useState(true);
  const [userId, setUserId] = useState<string>("");

  const router = useRouter();
  const pathname = usePathname();
  const { data: userData, isSuccess } = useUsersGetUserById(userId);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        if (!pathname.includes("signup")) {
          router.push("/login");
        } else return;
      } else {
        setUserId(user.uid);
        if (pathname.includes("login") && isSuccess && userData && userData.activeWorkspace) {
          router.push(`/${userData.activeWorkspace}/home`);
        }
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, [router, userData, isSuccess, pathname]);

  return (
    <div className="relative w-screen max-h-screen">
      <LoadingScreen isLoading={isLoading} />
      <div className={`absolute inset-0 z-10 ${isLoading ? "invisible" : "visible"}`}>
        {children}
      </div>
    </div>
  );
};
