import { useUserProfileForm } from "@/context/FormProviders/UserProfileFormProvider";
import { updateUser } from "@/app/server-actions/user/updateUser";
import { useMutation } from "@tanstack/react-query";
import React from "react";
import { useUser } from "@/context/DataProvider/UserDataProvider";
import { updateProfile, updatePassword } from "firebase/auth";
import { auth } from "@/db/firebase/lib/firebase";

const SettingSaveButton = () => {
  const { watch } = useUserProfileForm();
  const { signUpFullName, password } = watch();
  const { userId } = useUser();

  const { mutate, isPending } = useMutation({
    mutationFn: async () => {
      await updateUser(userId as string, undefined, signUpFullName);

      const currentUser = auth.currentUser;
      if (currentUser) {
        await updateProfile(currentUser, { displayName: signUpFullName });

        if (password) {
          await updatePassword(currentUser, password);
        }
      }
    },
    onSuccess: () => {
      console.log("Zaktualizowano dane użytkownika");
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
