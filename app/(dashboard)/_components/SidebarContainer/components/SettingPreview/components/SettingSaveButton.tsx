import { useUserProfileForm } from "@/context/FormProviders/UserProfileFormProvider";
import { updateUser } from "@/app/server-actions/user/updateUser";
import { useMutation } from "@tanstack/react-query";
import React from "react";
import { useUser } from "@/context/DataProvider/UserDataProvider";
import { updateProfile, updatePassword, signOut } from "firebase/auth";
import { auth } from "@/db/firebase/lib/firebase";
import { updateUserAssociation } from "@/app/server-actions/user2workspace/updateUserAssociation";
import { getUserAssociation } from "@/app/server-actions/user2workspace/getUserAssociation";
import router from "next/router";

const SettingSaveButton = () => {
  const { getValues, resetField } = useUserProfileForm();
  const { userId } = useUser();

  const { mutate, isPending } = useMutation({
    mutationFn: async () => {
      const { signUpFullName, password } = getValues();
      await updateUser(userId as string, undefined, signUpFullName);

      const currentUser = auth.currentUser;

      if (currentUser) {
        await updateProfile(currentUser, { displayName: signUpFullName });

        if (password?.trim()) {
          try {
            await updatePassword(currentUser, password.trim());
          } catch (error) {
            if (
              typeof error === "object" &&
              error !== null &&
              "code" in error &&
              (error as { code: string }).code === "auth/requires-recent-login"
            ) {
              alert("Musisz ponownie się zalogować, aby zmienić hasło.");
              setTimeout(async () => {
                await signOut(auth);
                router.push("/login");
              }, 2000);
              return;
            } else {
              alert("Wystąpił błąd podczas zmiany hasła.");
              console.error("Błąd:", error);
            }
          }
        }
      }

      const userAssociation = await getUserAssociation(userId);

      if (userAssociation) {
        await updateUserAssociation(
          userAssociation.id,
          undefined,
          undefined,
          signUpFullName,
          userId
        );
      } else {
        console.error("User association not found!");
      }
    },
    onSuccess: () => {
      resetField("password");
    },
    onError: (error) => {
      console.error("Błąd przy aktualizacji:", error);
    },
  });

  return (
    <div className="sticky bottom-0 flex justify-end w-auto pl-12 py-3 border-t border-gray-200 bg-white">
      <button
        className="px-[11px] max-w-fit border h-10 rounded-md bg-blue-600 font-sans text-sm/snug font-medium text-white disabled:opacity-50"
        onClick={() => mutate()}
        disabled={isPending}
      >
        {isPending ? "Saving..." : "Save changes"}
      </button>
    </div>
  );
};

export default SettingSaveButton;
