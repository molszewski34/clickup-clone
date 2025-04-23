import { useState } from "react";
import { auth } from "@/db/firebase/lib/firebase";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
  getAuth,
} from "firebase/auth";
import { SignupInputs } from "../page";
import { createUserAssociation } from "@/app/server-actions/user2workspace/createUserAssociation";
import { Role } from "@/app/server-actions/types";
import { createWorkspace } from "@/app/server-actions/workspace/createWorkspace";
import { createUser } from "@/app/server-actions/user/createUser";
import { updateUser } from "@/app/server-actions/user/updateUser";
import { updateUserAssociation } from "@/app/server-actions/user2workspace/updateUserAssociation";
import { getUserByEmail } from "@/app/server-actions/user/getUserByEmail";
import { updateUserKey } from "@/app/server-actions/user/updateUserKey";
import { getUserAssociationByEmail } from "@/app/server-actions/user2workspace/getUserAssociationByEmail";
import { createSpace } from "@/app/server-actions/space/createSpace";

export const useSignUpHandler = () => {
  const [signUpFullName, setSignUpFullName] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [signUpError, setSignUpError] = useState("");
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [signUpSuccess, setSignUpSuccess] = useState("");

  const handleRegister = async (data: SignupInputs) => {
    setSignUpError("");
    setIsSigningUp(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.login,
        data.password
      );
      const user = userCredential.user;

      if (user) {
        //* being forced to not use firebase server functions i managed to create new working way. Here is point by point explanation.
        const userMailExist = await getUserByEmail(signUpEmail); //* To validate if user is joining workspace or just signing up function check if user has been added to database in InviteToWorkspace.tsx. If true process start
        // if (!userMailExist) {
        //   throw new Error("User email do not exist");
        // }
        const userMailId = userMailExist?.id; //* Here code starts to be complicated. Because firebase (or any db model) don't allow to change key of user - server takes record with old id - clones to new (id from firebase auth) and delete old. It uses additional db callbacks but makes job done. All of this is made because this hook can't take params needed for proper workflow. Hook is also out of context scope. This operation is required for updateUser to work.

        if (userMailExist) {
          console.log("Procedura dodawania do workspace");
          await sendEmailVerification(user);
          const auth = getAuth();
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
          ); //* user association also updates userId with new one so other scripts can query base on new userId which this time is the same as id in auth
        } else {
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
                  filtersState: {
                    isOpen: false,
                    searchQuery: "",
                    assignedToMe: false,
                    assignedTo: [""],
                    statuses: ["To do", "In Progress"],
                  },
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
      } else {
        console.error("User object is missing");
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setSignUpError(err.message);
      } else {
        setSignUpError("An unknown error occurred.");
      }
    }
    setIsSigningUp(false);
  };
  return {
    signUpFullName,
    setSignUpFullName,
    isSigningUp,
    signUpEmail,
    setSignUpEmail,
    signUpPassword,
    setSignUpPassword,
    signUpError,
    setSignUpError,
    signUpSuccess,
    handleRegister,
  };
};
