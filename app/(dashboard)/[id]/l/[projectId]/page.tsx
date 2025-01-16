"use client";

import React, { useState } from "react";
import ViewsBarContainer from "@/app/(dashboard)/_components/ViewsBarContainer";
import WidgetHeader from "@/app/(dashboard)/_components/WidgetHeader";
import ButtonVariant2 from "@/components/ButtonVariant2";
import TasksList from "./components/TasksList";

export default function Page() {
  const [filters, setFilters] = useState({
    taskName: "",
  });
  return (
    <div className="flex flex-col gap-4 w-full h-full">
      <>
        <WidgetHeader>
          <ButtonVariant2 isActive={true} className={`items-center h-8 font-semibold `}>
            Everything
          </ButtonVariant2>
        </WidgetHeader>
        <ViewsBarContainer filters={filters} setFilters={setFilters} />
      </>
      <TasksList filters={filters} />
    </div>
  );
}
