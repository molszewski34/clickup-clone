import React, { createContext, useContext } from "react";
import { useForm, FormProvider, UseFormReturn } from "react-hook-form";

export type UserProfileFormData = {
  signUpFullName: string;
  signUpEmail: string;
  password: string;
};

const UserProfileFormContext =
  createContext<UseFormReturn<UserProfileFormData> | null>(null);

export const UserProfileFormProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const methods = useForm<UserProfileFormData>({
    defaultValues: {
      signUpFullName: "",
      signUpEmail: "",
      password: "",
    },
  });

  return (
    <UserProfileFormContext.Provider value={methods}>
      <FormProvider {...methods}>{children}</FormProvider>
    </UserProfileFormContext.Provider>
  );
};

export const useUserProfileForm = () => {
  const context = useContext(UserProfileFormContext);
  if (!context) {
    throw new Error(
      "useUserProfileForm must be used within UserProfileFormProvider"
    );
  }
  return context;
};
