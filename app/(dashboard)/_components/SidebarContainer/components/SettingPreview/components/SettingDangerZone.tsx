import useLogoutHandler from "@/app/(auth)/login/_hooks/useLogoutHandler";

export default function SettingDangerZone() {
  const { handleLogout } = useLogoutHandler();

  return (
    <div className="grid gap-x-9 gap-y-6 grid-cols-custom-grid pb-6">
      <div className="flex flex-col gap-y-1">
        <h2 className="font-sans text-sm/snug font-medium text-gray-900">
          Danger zone
        </h2>
        <p className="font-sans text-xs/6 text-gray-500">
          Proceed with caution.
        </p>
      </div>
      <div className="block">
        <div className="flex justify-between">
          <div className="font-sans text-sm/snug text-gray-700">
            Log out all sessions including any session on mobile, iPad, and
            other browsers
          </div>
          <div className="flex flex-col items-end">
            <button
              className="px-[11px] w-auto border h-8 mb-3 rounded-md border-gray-200 font-sans text-sm/snug font-medium text-gray-700"
              onClick={handleLogout}
            >
              Log out of all sessions
            </button>
            <button className="px-[11px] max-w-fit border h-8 rounded-md bg-red-600 font-sans text-sm/snug font-medium text-white">
              Delete account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
