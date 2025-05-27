import { getAuth } from "firebase/auth";

function useGetCurrentUser() {
  const auth = getAuth();
  const currentUser = auth.currentUser;
  const userId = currentUser?.uid;

  console.log("[useGetCurrentUser] currentUser:", currentUser);
  console.log("[useGetCurrentUser] userId:", userId);

  return { userId };
}

export default useGetCurrentUser;
