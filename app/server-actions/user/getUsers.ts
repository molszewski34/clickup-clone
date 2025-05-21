import { collection, getDocs } from "firebase/firestore";
import { db } from "@/db/firebase/lib/firebase";
import { User } from "../types";

export const getUsers = async (): Promise<User[]> => {
  const usersCollection = collection(db, "users");
  const querySnapshot = await getDocs(usersCollection);

  const users = querySnapshot.docs.map((doc) => {
    const data = doc.data() as Omit<User, "id">;
    return {
      id: doc.id,
      ...data,
    };
  });

  return users;
};
