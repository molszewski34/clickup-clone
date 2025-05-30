import { addDoc, collection } from "firebase/firestore";
import { User, Workspace } from "../types";
import { db } from "@/db/firebase/lib/firebase";
// import { getUserAssociation } from "./getUserAssociation";

import { getUserById } from "../user/getUserById";
import { getTaskLocation } from "../task/getTaskLocation";

export const createUserAssociationToTask = async (
  userId: User["id"],
  spaceId: string,
  listId: string,
  taskId: Workspace["id"]
) => {
  const user2TaskRef = collection(db, "user2task");
  try {
    const task = await getTaskLocation(taskId);
    const user = await getUserById(userId);

    if (!user || !task) {
      if (!user) {
        console.error(
          `Error occured when adding user to task. User not found!`
        );
      }
      if (!task) {
        console.error(
          `Error occured when adding user to task. Space with ID: ${taskId} does not exist!`
        );
      }
      return;
    }
    // else {
    //   const userAssociation = await getUserAssociation(user.id);
    //   if (userAssociation) {
    //     console.error("This association already exists!");
    //     return;
    //   }
    // }

    const properties = {
      userId: user.id,
      spaceId,
      listId,
      taskId,
    };

    const newUserAssociationToTask = await addDoc(user2TaskRef, properties);
    console.log("User added to task successfully!");
    return { id: newUserAssociationToTask.id, ...properties };
  } catch (error) {
    console.error("Error occured when adding user to task. ", error);
  }
};
