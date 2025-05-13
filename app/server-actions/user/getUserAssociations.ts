import { db } from "@/db/firebase/lib/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

export const getUserAssociations = async (userId: string) => {
  const user2TaskRef = collection(db, "user2task");

  try {
    const q = query(user2TaskRef, where("userId", "==", userId));

    const snapshot = await getDocs(q);

    if (snapshot.empty) {
      console.log(`No associations found for user ${userId}`);
      return [];
    }

    const associations = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    console.log(`Found ${associations.length} associations for user ${userId}`);
    return associations;
  } catch (error) {
    console.error("Error occurred while fetching user associations: ", error);
    return [];
  }
};
