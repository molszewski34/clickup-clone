"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/db/firebase/lib/firebase";
import { useInitializeWorkspace } from "../../_hooks/useInitializeWorkspace";
import ViewsBarContainer from "../../_components/ViewsBarContainer";
import TopbarNav from "@/app/topBar-Nav/components/TopbarNav";
import PageNavbar from "../../ui/PageNavbar";
import PageIndicator from "../../ui/PageIndicator";
import { Icons } from "@/icons/icons";
import SideBarContainer from "@/app/sideBar-Menu/components/SideBarContainer";

const UserHomePage = ({ params }: { params: Promise<{ id: string }> }) => {
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
    <div>
      <TopbarNav />
      <ViewsBarContainer />
      <PageNavbar>
        <PageIndicator icon={<Icons.HomePageIndicatorIcon />} name="Home" />
      </PageNavbar>
      <SideBarContainer />
    </div>
  );
};

export default UserHomePage;
