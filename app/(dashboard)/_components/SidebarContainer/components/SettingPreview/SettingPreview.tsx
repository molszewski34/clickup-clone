import SettingProfile from "./components/SettingProfile";
import SettingAuth from "./components/SettingAuth";
import SettingLanguage from "./components/SettingLanguage";
import SettingDangerZone from "./components/SettingDangerZone";
import SettingPreference from "./components/SettingPreference/SettingPreference";
import SettingTime from "./components/SettingTime/SettingTime";
import SettingTheme from "./components/SettingTheme/SettingTheme";
import SettingSaveButton from "./components/SettingSaveButton";

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
        <SettingSaveButton />
      </div>
    </>
  );
}
