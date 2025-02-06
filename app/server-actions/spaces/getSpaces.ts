import { db } from "@/db/firebase/lib/firebase";
import { collection, getDocs } from "firebase/firestore";
import { Space } from "../types";

export const getSpaces = async () => {
  const spacesRef = collection(db, "spaces");
  const spaces: Space[] = [];

  try {
    const spacesDocs = await getDocs(spacesRef);
    spacesDocs.docs.forEach((singleSpace) =>
      spaces.push({ id: singleSpace.id, ...(singleSpace.data() as Omit<Space, "id">) })
    );
    return spaces;
  } catch (error) {
    console.error("Error occured when fetching the spaces", error);
  }
};
