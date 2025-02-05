import { db } from "@/db/firebase/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { Space } from "../types";

export const getSpaceById = async (spaceId: string) => {
  const spaceRef = doc(db, `spaces/${spaceId}`);

  try {
    const spaceDoc = await getDoc(spaceRef);
    if (!spaceDoc.data()) {
      console.error("Space not found");
      return;
    }
    return spaceDoc.data() as Space;
  } catch (error) {
    console.error("Error occured when fetching space", error);
  }
};
