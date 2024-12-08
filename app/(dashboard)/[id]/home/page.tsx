"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/db/firebase/lib/firebase";
import { useInitializeWorkspace } from "../../_hooks/useInitializeWorkspace";
import PageNavbar from "../../ui/PageNavbar";
import PageIndicator from "../../ui/PageIndicator";
import { Icons } from "@/icons/icons";
import WidgetHeader from "../../_components/WidgetHeader";
import ViewsBarContainer from "../../_components/ViewsBarContainer";

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
    <div className="w-full">
      <WidgetHeader>
        <Icons.HomeIcon />
        Home
      </WidgetHeader>
      <ViewsBarContainer />
      <PageNavbar>
        <PageIndicator icon={<Icons.HomePageIndicatorIcon />} name="Home" />
      </PageNavbar>
    </div>
  );
};

export default UserHomePage;
