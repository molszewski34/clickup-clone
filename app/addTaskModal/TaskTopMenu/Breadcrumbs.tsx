import { useEffect, useState } from "react";
import { getTaskLocation } from "@/app/server-actions/List/getTaskLocation";
import useGetCurrentWorkspace from "@/hooks/useGetCurrentWorkspace";

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
  const [listName, setListName] = useState("");
  const [taskName, setTaskName] = useState("");
  const params = useParams();
  const taskId = params.taskId as string;

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
        const { workspaceId, spaceId, listId, taskId } = taskLocation;

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

          const listDocRef = doc(
            db,
            "workspace",
            workspaceId,
            "spaces",
            spaceId,
            "lists",
            listId
          );
          const listDoc = await getDoc(listDocRef);
          if (listDoc.exists()) {
            setListName(listDoc.data().name);
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
      <div>
        {spaceName || <Skeleton width={120} height={16} borderRadius={4} />}
      </div>
      <div>/</div>
      <div>
        {listName || <Skeleton width={120} height={16} borderRadius={4} />}
      </div>
      <div>/</div>
      <div className="font-medium text-gray-900">
        {taskName || <Skeleton width={120} height={16} borderRadius={4} />}
      </div>
    </div>
  );
};

export default Breadcrumbs;
