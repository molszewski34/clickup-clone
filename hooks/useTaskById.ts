import { getCurrentTaskData } from "@/app/server-actions/task/getCurrentTaskData";
import { getTaskLocation } from "@/app/server-actions/task/getTaskLocation";
import { Task } from "@/app/server-actions/types";
import { useQuery } from "@tanstack/react-query";

export const useTaskById = (taskId: string | null) => {
  const isValidTaskId = !!taskId && !taskId.includes(".");

  return useQuery<Task | null>({
    queryKey: ["task", taskId],
    queryFn: async () => {
      if (!isValidTaskId) {
        console.warn("[useTaskById] Niewłaściwe taskId — pomijam:", taskId);
        return null;
      }

      const location = await getTaskLocation(taskId);
      if (!location) {
        console.warn("[useTaskById] Nie znaleziono lokalizacji dla:", taskId);
        return null;
      }
      const task = await getCurrentTaskData(location);
      return task;
    },
    enabled: isValidTaskId,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });
};
