import { createSpace } from "@/app/server-actions/space/createSpace";
import { createUser } from "@/app/server-actions/user/createUser";
import { updateUser } from "@/app/server-actions/user/updateUser";
import { createUserAssociation } from "@/app/server-actions/user2workspace/createUserAssociation";
import { createWorkspace } from "@/app/server-actions/workspace/createWorkspace";
import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import { SignupInputs } from "../page";
import { Role } from "@/app/server-actions/types";

export default async function handleSigningUpNewUser(
  signUpFullName: string,
  data: SignupInputs,
  signUpEmail: string,
  setSignUpError: (error: string) => void,
  setSignUpSuccess: (message: string) => void
) {
  const auth = getAuth();
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    data.login,
    data.password
  );
  const user = userCredential.user;
  await updateProfile(user, { displayName: signUpFullName });

  const userDefaultWorkspace = await createWorkspace(
    `${signUpFullName}'s workspace`,
    "This is your default workspace"
  );
  if (!userDefaultWorkspace) {
    throw Error("Workspace failed to initialize");
  }

  const userCreated = await createUser(
    signUpFullName,
    signUpEmail,
    user.uid,
    userDefaultWorkspace.id
  );
  await sendEmailVerification(user);
  if (userCreated !== undefined) {
    if (!userDefaultWorkspace) {
      setSignUpError("Could not create workspace for a new user!");
    } else {
      const userAssociation = await createUserAssociation(
        userCreated.id,
        userDefaultWorkspace.id,
        Role.admin
      );

      if (!userAssociation) {
        console.error("Could not create user association!");
      } else {
        await updateUser(
          userCreated.id,
          undefined,
          undefined,
          userAssociation.workspaceId
        );
      }

      const createNewSpace = await createSpace(
        {
          name: "Space",
          isPrivate: false,
          desc: "",
          icon: { activeColor: "indigo-500", selectedIconName: "" },
        },
        userDefaultWorkspace.id
      );
      if (!createNewSpace) {
        throw Error("Failed to initialize new user!");
      }
    }

    setSignUpSuccess("Account created successfully!");
  } else {
    console.error("Error! Newly created user not found");
  }
}
