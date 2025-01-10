import { useEffect, useState } from "react";
import { auth, db } from "@/db/firebase/lib/firebase";
import { onAuthStateChanged, User } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

interface UserProfileData {
  signUpFullName: string;
  signUpEmail: string;
  uid: string;
  createdAt: string;
}

interface UseUserProfileReturn {
  user: User | null;
  userData: UserProfileData | null;
  loading: boolean;
  error: string | null;
}

export function useUserProfile(): UseUserProfileReturn {
  const [user, setUser] = useState<User | null>(null);
  const [userData, setUserData] = useState<UserProfileData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setLoading(true);
      setError(null);

      if (currentUser) {
        setUser(currentUser);

        try {
          const userDocRef = doc(db, "users", currentUser.uid);
          const userDocSnap = await getDoc(userDocRef);

          if (userDocSnap.exists()) {
            setUserData(userDocSnap.data() as UserProfileData);
          } else {
            setError("User data not found in Firestore.");
          }
        } catch (err) {
          if (err instanceof Error) {
            setError(err.message);
          } else {
            setError("An unknown error occurred.");
          }
        }
      } else {
        setUser(null);
        setUserData(null);
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return { user, userData, loading, error };
}
