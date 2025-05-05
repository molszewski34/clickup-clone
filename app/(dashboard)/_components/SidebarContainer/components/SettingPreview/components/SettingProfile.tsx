import { useUserProfileForm } from "@/context/FormProviders/UserProfileFormProvider";
import { useUserProfile } from "@/hooks/useUserProfile";
import { Icons } from "@/icons/icons";
import { useEffect } from "react";

export default function SettingProfile() {
  const { userData } = useUserProfile();
  const {
    register,
    formState: { errors },
    setValue,
  } = useUserProfileForm();

  useEffect(() => {
    if (userData) {
      setValue("signUpFullName", userData.signUpFullName || "");
      setValue("signUpEmail", userData.signUpEmail || "");
      setValue("password", "");
    }
  }, [userData, setValue]);

  const makeInitials = (fullName: string | undefined): string => {
    if (!fullName) return "";
    const words = fullName.trim().split(/\s+/);
    const firstWord = words[0] || "";
    const lastWord = words[words.length - 1] || "";
    return `${firstWord.charAt(0).toUpperCase()}${lastWord.charAt(0).toUpperCase()}`;
  };

  return (
    <div className="grid gap-x-9 gap-y-6 grid-cols-custom-grid pb-6 border-b border-gray-200 mb-8">
      <div className="flex flex-col gap-y-1">
        <h2 className="font-sans text-sm/snug font-medium text-gray-900">
          Profile
        </h2>
        <p className="font-sans text-xs/6 text-gray-500">
          Your personal information and account security settings.
        </p>
      </div>
      <div className="block">
        <p className="font-sans text-xs/snug font-medium text-gray-900">
          Avatar
        </p>
        <div className="flex rounded-full bg-emerald-600 justify-center text-white font-sans text-[28px] font-semibold items-center mt-2 w-20 h-20 ">
          {makeInitials(userData?.signUpFullName)}
        </div>
        <h2 className="font-sans text-xs/snug font-medium text-gray-900 mt-4 mb-2">
          {userData?.signUpFullName}
        </h2>

        {/* Full Name */}
        <form autoComplete="off">
          <div className="mt-4">
            <h2 className="font-sans text-xs/snug font-medium text-gray-900 mb-2">
              Full Name
            </h2>
            <div className="flex gap-2 px-[11px] items-center border rounded-lg border-gray-200 focus-within:border-blue-500 focus-within:ring focus-within:ring-blue-200">
              <Icons.PersonIcon className="text-[14px] text-gray-800" />
              <input
                type="text"
                {...register("signUpFullName")}
                className="border-none mr-auto focus:outline-none py-[7px] text-sm w-full font-sans text-gray-800"
              />
            </div>
          </div>
        </form>
        {/* Email */}
        <form autoComplete="off">
          <div className="mt-4">
            <h2 className="font-sans text-xs/snug font-medium text-gray-900 mb-2">
              Email
            </h2>
            <div
              className={`flex gap-2 px-[11px] items-center border rounded-lg ${
                errors.signUpEmail
                  ? "border-red-500 focus-within:border-red-500 focus-within:ring-red-200"
                  : "border-gray-200 focus-within:border-blue-500 focus-within:ring-blue-200"
              }`}
            >
              <Icons.PersonIcon className="text-[14px] text-gray-800" />
              <input
                id="user-email"
                type="text"
                autoComplete="off"
                {...register("signUpEmail", {
                  required: "Email jest wymagany",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Niepoprawny format adresu e-mail",
                  },
                })}
                className="border-none mr-auto focus:outline-none py-[7px] text-sm font-sans text-gray-800 w-full"
              />
            </div>
            {errors.signUpEmail && (
              <p className="text-xs text-red-600 mt-1">
                {errors.signUpEmail.message}
              </p>
            )}
          </div>
        </form>
        {/* Password */}
        <form autoComplete="off">
          <div className="mt-4">
            <h2 className="font-sans text-xs/snug font-medium text-gray-900 mb-2">
              Password
            </h2>
            <div className="flex gap-2 px-[11px] items-center border rounded-lg border-gray-200 focus-within:border-blue-500 focus-within:ring focus-within:ring-blue-200">
              <Icons.PersonIcon className="text-[14px] text-gray-800" />
              <input
                type="password"
                autoComplete="off"
                {...register("password")}
                className="border-none mr-auto focus:outline-none py-[7px] text-sm font-sans text-gray-800 w-full"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
