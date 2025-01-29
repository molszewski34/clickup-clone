"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/db/firebase/lib/firebase";
import { useInitializeWorkspace } from "../../../_hooks/useInitializeWorkspace";
import SettingMenu from "@/app/(dashboard)/_components/SidebarContainer/components/SettingPreview/components/SettingMenu/SettingMenu";
import UsersManage from "@/app/(dashboard)/_components/UsersManage/UsersManage";

const UserPulsePage = ({ params }: { params: Promise<{ id: string }> }) => {
  const router = useRouter();
  const [, setUserId] = useState<string | null>(null);

  useInitializeWorkspace();

  useEffect(() => {
    const fetchParams = async () => {
      const resolvedParams = await params;
      const userId = resolvedParams.id;

      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (!user || user.uid !== userId) {
          router.push("/login");
        }
      });

      setUserId(userId);

      return () => unsubscribe();
    };

    fetchParams();
  }, [params, router]);

  return (
    <>
      <SettingMenu />
      <div
        className="flex w-full font-sans text-4xl"
        style={{ height: "calc(100vh - 40px)" }}
      >
        <UsersManage />
      </div>
    </>
  );
};

export default UserPulsePage;
