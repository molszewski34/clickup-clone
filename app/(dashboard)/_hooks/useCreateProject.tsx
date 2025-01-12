import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addProject } from "@/app/server-actions/project/addNewProject";
import { useData } from "@/context/DataProvider/DataProvider";
import { useRouter } from "next/navigation";
import { useUser } from "@/context/DataProvider/UserDataProvider";

interface UseCreateProjectProps {
  toggleModal: (modal: "none" | "menuWorkspaceList" | "createList") => void;
}

export const useCreateProject = ({ toggleModal }: UseCreateProjectProps) => {
  const router = useRouter();
  const { workspaceId } = useData();
  const { userId } = useUser();
  const queryClient = useQueryClient();
  const { setProjectId } = useData();
  return useMutation({
    mutationFn: async ({
      userId,
      projectName,
      isPrivate,
    }: {
      projectName: string;
      isPrivate: boolean;
      userId: string;
    }) => {
      return await addProject(userId, workspaceId, projectName, isPrivate);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });

      toggleModal("none");

      router.push(`/${userId}/l/${data.id}`);
      setProjectId(data.id);
    },
    onError: (error: unknown) => {
      console.error("Error creating project:", error);
    },
  });
};
