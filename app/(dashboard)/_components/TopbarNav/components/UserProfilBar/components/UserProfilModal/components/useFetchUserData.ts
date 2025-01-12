import { useCallback, useEffect, useState } from "react";
import { useUserProfile } from "@/hooks/useUserProfile";

export default function useFetchUserData() {
  const [userInitial, setUserInitial] = useState<string>("?");
  const [fullName, setFullName] = useState<string>("");
  const { userData } = useUserProfile();

  const fetchUserData = useCallback(() => {
    const userName = userData?.signUpFullName || "";
    const nameParts = userName.trim().split(" ");
    const firstLetter = nameParts[0]?.charAt(0).toUpperCase() || "";
    const lastLetter = nameParts[1]?.charAt(0).toUpperCase() || "";
    const fullUserName = `${nameParts[0]} ${nameParts[1]}`;

    setUserInitial(firstLetter + lastLetter);
    setFullName(fullUserName);
  }, [userData]);

  useEffect(() => {
    if (userData) {
      fetchUserData();
    }
  }, [userData, fetchUserData]);

  return { userInitial, fullName };
}
