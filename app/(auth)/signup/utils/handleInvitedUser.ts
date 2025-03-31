import { getAuth, sendEmailVerification, User } from "firebase/auth";

import { updateUserKey } from "@/app/server-actions/user/updateUserKey";
import { getUserAssociationByEmail } from "@/app/server-actions/user2workspace/getUserAssociationByEmail";
import { updateUser } from "@/app/server-actions/user/updateUser";
import { updateUserAssociation } from "@/app/server-actions/user2workspace/updateUserAssociation";

export default async function handleInvitedUser(
  signUpEmail: string,
  signUpFullName: string,
  user: User,
  userMailId: string | undefined
) {
  const auth = getAuth();

  //* Because firebase (or any db model) don't allow to change key of user - server takes record with old id - clones to new (id from firebase auth) and delete old. It uses additional db callbacks but makes job done. All of this is made because this hook can't take params needed for proper workflow. Hook is also out of context scope. This operation is required for updateUser to work.

  await sendEmailVerification(user);

  const currentUser = auth.currentUser;
  const currentUserId = currentUser?.uid;
  if (!currentUserId) {
    throw new Error("User is not authethificated");
  }
  if (!userMailId) {
    throw new Error("Cannot get user mail id)");
  }

  await updateUserKey(userMailId, currentUserId); //* Here we update and delete old record created in InviteToWorkspace.tsx

  const userAssociation = await getUserAssociationByEmail(signUpEmail); //* in InviteToWorkspace.tsx user joins with randomly created uid so only way to identify association is by using email

  if (!currentUserId) {
    throw new Error("User ID is undefined. Cannot update user.");
  }
  await updateUser(currentUserId, undefined, signUpFullName); //* user name is updated

  if (!userAssociation) {
    throw new Error("User association not found");
  }

  await updateUserAssociation(
    userAssociation.id,
    undefined,
    undefined,
    signUpFullName,
    currentUserId
  );
}
