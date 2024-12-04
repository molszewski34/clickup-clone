"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/db/firebase/lib/firebase";
import { useInitializeWorkspace } from "../../_hooks/useInitializeWorkspace";

import ModalEditTask from "../home/components/ModalEditTask/ModalEditTask";

interface UserHomeProps {
  params: Promise<{ id: string; name: string; desc: string }>;
}

const UserHomePage: React.FC<UserHomeProps> = ({ params }) => {
  const router = useRouter();

  const [, setUserId] = useState<string | null>(null);

  useInitializeWorkspace();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // @ts-expect-error: jeśli dodam typowanie to nie przejdzie build
      if (!user || user.uid !== params.id) {
        router.push("/login");
      }
    });
    // @ts-expect-error: jeśli dodam typowanie to nie przejdzie build
    setUserId(params.id);
    return () => unsubscribe();
  }, [params, router]);

  return <ModalEditTask />;
};

export default UserHomePage;
