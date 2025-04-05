import { useEffect, useState } from "react";
import { getTaskLocation } from "@/app/server-actions/List/getTaskLocation";
import useGetCurrentWorkspace from "@/hooks/useGetCurrentWorkspace";
import { useGetWorkspaceById } from "@/hooks/useGetWorkspaceById";
import { db } from "@/db/firebase/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useParams } from "next/navigation";
import Skeleton from "react-loading-skeleton";

interface TaskLocation {
  workspaceId: string;
  spaceId: string;
  taskId: string;
  listId: string;
}

const Breadcrumbs = () => {
  const { workspaceId } = useGetCurrentWorkspace();
  const [taskLocation, setTaskLocation] = useState<TaskLocation | null>(null);

  const [spaceName, setSpaceName] = useState("");
  const [taskName, setTaskName] = useState("");
  const params = useParams();
  const taskId = params.taskId as string; // Jeśli route wygląda np. tak: `/workspace/:workspaceId/task/:taskId`

  const { data: workspace } = useGetWorkspaceById(workspaceId || "");

  useEffect(() => {
    if (!workspaceId) return;

    const fetchTaskLocation = async () => {
      try {
        const location = await getTaskLocation(taskId);
        setTaskLocation(location);
      } catch (error) {
        console.error("Błąd podczas pobierania lokalizacji zadania:", error);
      }
    };

    fetchTaskLocation();
  }, [workspaceId]);

  useEffect(() => {
    const fetchSpaceAndTaskNames = async () => {
      if (taskLocation) {
        const { workspaceId, spaceId, taskId } = taskLocation;

        try {
          const spaceDocRef = doc(
            db,
            "workspace",
            workspaceId,
            "spaces",
            spaceId
          );
          const spaceDoc = await getDoc(spaceDocRef);
          if (spaceDoc.exists()) {
            setSpaceName(spaceDoc.data().name);
          }

          const taskDocRef = doc(
            db,
            "workspace",
            workspaceId,
            "spaces",
            spaceId,
            "lists",
            taskLocation.listId,
            "tasks",
            taskId
          );
          const taskDoc = await getDoc(taskDocRef);
          if (taskDoc.exists()) {
            setTaskName(taskDoc.data().taskName);
          }
        } catch (error) {
          console.error(
            "Błąd podczas pobierania danych space lub task:",
            error
          );
        }
      }
    };

    fetchSpaceAndTaskNames();
  }, [taskLocation]);

  return (
    <div className="flex items-center gap-2">
      <div>{workspace?.name || <Skeleton />}</div>
      <div>/</div>
      <div>{spaceName || <Skeleton />}</div>
      <div>/</div>
      <div className="font-medium text-gray-900">
        {taskName || <Skeleton />}
      </div>
    </div>
  );
};

export default Breadcrumbs;
