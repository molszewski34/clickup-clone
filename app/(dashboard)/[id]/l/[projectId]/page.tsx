"use client";

import React from "react";
import ViewsBarContainer from "@/app/(dashboard)/_components/SubNavBar/ViewsBarContainer";
import WidgetHeader from "@/app/(dashboard)/_components/SubNavBar/WidgetHeader";
import ButtonVariant2 from "@/components/ButtonVariant2";
import { DataProvider } from "@/context/DataProvider/DataProvider";
import List from "@/app/HomeSpace/Components/ComponentsAssignedContent/List";

export default function Page() {
  return (
    <DataProvider>
      <div className="flex flex-col gap-4 w-full h-full">
        <div>
          <WidgetHeader>
            <ButtonVariant2
              isActive={true}
              className={`items-center h-8 font-semibold `}
            >
              Everything
            </ButtonVariant2>
          </WidgetHeader>
          <ViewsBarContainer />
        </div>
        <List />
      </div>
    </DataProvider>
  );
}
