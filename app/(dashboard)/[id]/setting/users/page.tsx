"use client";
import SettingMenu from "@/app/(dashboard)/_components/SidebarContainer/components/SettingPreview/components/SettingMenu/SettingMenu";
import UsersManage from "@/app/(dashboard)/_components/UsersManage/UsersManage";

const UserPulsePage = () => {
  return (
    <>
      <SettingMenu />
      <div className="flex w-full font-sans text-4xl" style={{ height: "calc(100vh - 40px)" }}>
        <UsersManage />
      </div>
    </>
  );
};

export default UserPulsePage;
