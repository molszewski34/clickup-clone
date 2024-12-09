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
import ButtonVariant3 from "@/components/ButtonVariant3";
import ButtonVariant2 from "@/components/ButtonVariant2";

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
      <WidgetHeader className="justify-between">
        <div className="flex px-2 items-center">
          <Icons.HomeIcon className="mr-1" />
          Home
        </div>
        <div className="flex items-center px-2 gap-1">
          <ButtonVariant3 className={` !text-sm h-8 font-semibold px-[11px]`}>
            Menage cards
          </ButtonVariant3>
          <div className="w-[1px] h-4 mx-2  bg-darkGray_400"></div>
          <ButtonVariant2 className={`items-center h-8`}>
            <Icons.SettingsIcon className="text-base" />
          </ButtonVariant2>
        </div>
      </WidgetHeader>
      {/* <ViewsBarContainer /> */}
      <PageNavbar>
        <PageIndicator icon={<Icons.HomePageIndicatorIcon />} name="Home" />
      </PageNavbar>
    </div>
  );
};

export default UserHomePage;
