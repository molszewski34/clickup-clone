"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/db/firebase/lib/firebase";
import { useInitializeWorkspace } from "../../_hooks/useInitializeWorkspace";
import { Table } from "./components/TaskTable/Table";
import { MOCK_TASKS } from "./data";
import { TaskStatus } from "./types";

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

  const completedTasks = MOCK_TASKS.filter(
    (singleMockTask) => singleMockTask.status === TaskStatus.completed
  );
  const inProgressTasks = MOCK_TASKS.filter(
    (singleMockTask) => singleMockTask.status === TaskStatus.inProgress
  );
  const toDoTasks = MOCK_TASKS.filter(
    (singleMockTask) => singleMockTask.status === TaskStatus.todo
  );

  return (
    <div className="w-full">
      <Table tasks={completedTasks} status={TaskStatus.completed} />
      <Table tasks={inProgressTasks} status={TaskStatus.inProgress} />
      <Table tasks={toDoTasks} status={TaskStatus.todo} />
    </div>
  );
};

export default UserHomePage;
