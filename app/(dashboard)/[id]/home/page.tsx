"use client";

import { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/db/firebase/lib/firebase";
import { useInitializeWorkspace } from "../../_hooks/useInitializeWorkspace";

import TopbarNav from "@/app/topBar-Nav/components/TopbarNav";
import PageNavbar from "../../ui/PageNavbar";
import PageIndicator from "../../ui/PageIndicator";
import { Icons } from "@/icons/icons";
import ViewsBarContainer from "../../_components/ViewsBarContainer";
interface UserHomeProps {
  params: Promise<{ id: string }>;
}

const UserHomePage: React.FC<UserHomeProps> = ({ params }) => {
  const { id } = use(params);
  const router = useRouter();

  useInitializeWorkspace();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user || user.uid !== id) {
        router.push("/login");
      }
    });

    return () => unsubscribe();
  }, [id, router]);

  return (
    <div>
      <TopbarNav />
      <ViewsBarContainer />
      <PageNavbar>
        <PageIndicator icon={<Icons.HomePageIndicatorIcon />} name="Home" />
      </PageNavbar>
    </div>
  );
};

export default UserHomePage;
