import {
  auth,
  googleProvider,
  initializeFirebasePersistence,
} from "@/db/firebase/lib/firebase";
import { signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";

function useLoginWithGoogle() {
  const router = useRouter();
  const handleLoginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      await initializeFirebasePersistence();
      const userId = result.user.uid;
      router.push(`/${userId}/home`);
      console.log("Zalogowany użytkownik:", userId);
    } catch (error) {
      console.error("Błąd logowania:", error);
    }
  };
  return {
    handleLoginWithGoogle,
  };
}

export default useLoginWithGoogle;
