"use client";
import SettingsPreview from "@/app/(dashboard)/_components/SidebarContainer/components/SettingPreview/SettingPreview";
import SettingMenu from "@/app/(dashboard)/_components/SidebarContainer/components/SettingPreview/components/SettingMenu/SettingMenu";

const UserPulsePage = () => {
  return (
    <>
      <SettingMenu />
      <div className="flex w-full font-sans text-4xl" style={{ height: "calc(100vh - 40px)" }}>
        <SettingsPreview />
      </div>
    </>
  );
};

export default UserPulsePage;
