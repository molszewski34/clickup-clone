import { useCallback, useEffect, useState } from "react";
import { useUserProfile } from "@/hooks/useUserProfile";

export default function useFetchUserInitial() {
  const [userInitial, setUserInitial] = useState<string>("");
  const { userData } = useUserProfile();

  const fetchUserInitial = useCallback(() => {
    const userName = userData?.signUpFullName || "";
    const firstLetter = userName.trim().charAt(0).toUpperCase() || "";
    setUserInitial(firstLetter);
  }, [userData]);

  useEffect(() => {
    if (userData) {
      fetchUserInitial();
    }
  }, [userData, fetchUserInitial]);

  return { userInitial };
}
