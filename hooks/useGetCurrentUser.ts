import { getAuth } from "firebase/auth";

function useGetCurrentUser() {
  const auth = getAuth();
  const currentUser = auth.currentUser;
  const userId = currentUser?.uid;
  return { userId };
}

export default useGetCurrentUser;
