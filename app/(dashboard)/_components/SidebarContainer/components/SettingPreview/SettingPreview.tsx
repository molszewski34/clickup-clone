import SettingProfile from "./components/SettingProfile";
import SettingAuth from "./components/SettingAuth";
import SettingLanguage from "./components/SettingLanguage";
import SettingDangerZone from "./components/SettingDangerZone";
import SettingPreference from "./components/SettingPreference/SettingPreference";
import SettingTime from "./components/SettingTime/SettingTime";
import SettingTheme from "./components/SettingTheme/SettingTheme";

export default function SettingsPreview() {
  return (
    <>
      <div className="sticky flex flex-col w-full h-full pt-6 px-12 pb-0 overflow-y-auto overflow-x-hidden bg-white">
        <div className=" flex w-full h-5 font-sans font-medium mb-[30px] text-gray-900 text-2xl/snug">
          My Settings
        </div>
        <SettingProfile />
        <SettingAuth />
        <SettingTheme />
        <SettingLanguage />
        <SettingTime />
        <SettingPreference />
        <SettingDangerZone />
        <div className="sticky bottom-0 flex justify-end  w-auto pl-12 py-3 border-t border-gray-200 bg-white">
          <button className="px-[11px] max-w-fit border h-10 rounded-md bg-blue-600 font-sans text-sm/snug font-medium text-white">
            Save changes
          </button>
        </div>
      </div>
    </>
  );
}
