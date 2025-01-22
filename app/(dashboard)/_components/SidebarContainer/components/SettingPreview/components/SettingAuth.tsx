export default function SettingAuth() {
  return (
    <>
      <div className="grid gap-x-9 gap-y-6 grid-cols-custom-grid pb-6  border-b border-gray-200 mb-8">
        <div className="flex flex-col gap-y-1">
          <h2 className="font-sans text-sm/snug font-medium text-gray-900">
            Two-factor authentication (2FA)
          </h2>
          <p className="font-sans text-xs/5 text-gray-500">
            Keep your account secure by enabling 2FA via SMS or using a
            temporary one-time passcode (TOTP) from an authenticator app.
          </p>
        </div>
        <div className="block">
          <label className="flex items-center gap-3 cursor-pointer group">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="relative w-6 h-[14px] bg-gray-400 group-hover:bg-gray-500 peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-[10px] rtl:peer-checked:after:-translate-x-[10px] peer-checked:after:border-white after:content-[''] after:absolute after:top-[1px] after:start-[1px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[12px] after:w-[12px] after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <div className="flex-col ">
              <h3 className="font-sans text-sm/snug font-medium text-gray-700">
                Text Message (SMS)
              </h3>
              <p className="font-sans text-xs/6 text-gray-500">
                Receive a one-time passcode via SMS each time you log in.
                <div className="ml-1 inline-flex justify-center items-center py-1 px-[6px] rounded bg-indigo-100 text-indigo-600 font-medium font-sans text-xs/3 ">
                  Business
                </div>
              </p>
            </div>
          </label>
          <label className="flex items-center gap-3 cursor-pointer group mt-[14px] pt-[14px] border-t border-gray-200">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="relative w-6 h-[14px] bg-gray-400 group-hover:bg-gray-500 peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-[10px] rtl:peer-checked:after:-translate-x-[10px] peer-checked:after:border-white after:content-[''] after:absolute after:top-[1px] after:start-[1px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[12px] after:w-[12px] after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <div className="flex-col ">
              <h3 className="font-sans text-sm/snug font-medium text-gray-700">
                Authenticator App (TOTP)
              </h3>
              <p className="font-sans text-xs/6 text-gray-500">
                Use an app to receive a temporary one-time passcode each time
                you log in.
              </p>
            </div>
          </label>
        </div>
      </div>{" "}
    </>
  );
}
