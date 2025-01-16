"use client";

import React from "react";
import ViewsBarContainer from "@/app/(dashboard)/_components/ViewsBarContainer";
import WidgetHeader from "@/app/(dashboard)/_components/WidgetHeader";
import ButtonVariant2 from "@/components/ButtonVariant2";
import TasksList from "./components/TasksList";

export default function Page() {
  return (
    <div className="flex flex-col gap-4 w-full h-full">
      <div>
        <WidgetHeader>
          <ButtonVariant2 isActive={true} className={`items-center h-8 font-semibold `}>
            Everything
          </ButtonVariant2>
        </WidgetHeader>
        <ViewsBarContainer />
      </div>
      {/* Example for using the Table with filtered tasks */}
      <TasksList />
    </div>
  );
}
