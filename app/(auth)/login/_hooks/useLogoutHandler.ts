import { signOut } from "firebase/auth"; // Importowanie funkcji wylogowania
import { auth } from "@/db/firebase/lib/firebase"; // Importowanie instancji Firebase
import { useRouter } from "next/navigation"; // Importowanie hooka do nawigacji

function useLogoutHandler() {
  const router = useRouter(); // Inicjalizacja routera

  // Funkcja wylogowująca użytkownika
  const handleLogout = async () => {
    try {
      await signOut(auth); // Wylogowanie z Firebase
      localStorage.removeItem("userId"); // Usunięcie userId z localStorage
      router.push("/login"); // Przekierowanie na stronę logowania
    } catch (err: unknown) {
      console.error("Error logging out:", err); // Obsługa błędów
    }
  };

  return { handleLogout };
}

export default useLogoutHandler;
