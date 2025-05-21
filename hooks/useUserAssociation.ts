import { getUserAssociation } from "@/app/server-actions/user2workspace/getUserAssociation";
import { useQuery } from "@tanstack/react-query";
import { getAuth } from "firebase/auth";

function useUserAssociation() {
  const auth = getAuth();
  const currentUser = auth.currentUser;
  const userId = currentUser?.uid;

  if (!userId) {
    throw new Error("User is not authenticated");
  }

  const { data: userAssociation, isLoading } = useQuery({
    queryKey: ["userAssociation", userId],
    queryFn: () => getUserAssociation(userId),
    enabled: !!userId,
  });
  return { userAssociation, isLoading };
}

export default useUserAssociation;
