"use client";
import SettingsPreview from "@/app/(dashboard)/_components/SidebarContainer/components/SettingPreview/SettingPreview";
import SettingMenu from "@/app/(dashboard)/_components/SidebarContainer/components/SettingPreview/components/SettingMenu/SettingMenu";

const UserPulsePage = () => {
  // useEffect(() => {
  //   const fetchParams = async () => {
  //     const resolvedParams = await params;
  //     const userId = resolvedParams.id;

  //     const unsubscribe = onAuthStateChanged(auth, (user) => {
  //       if (!user || user.uid !== userId) {
  //         router.push("/login");
  //       }
  //     });

  //     setUserId(userId);

  //     return () => unsubscribe();
  //   };

  //   fetchParams();
  // }, [params, router]); KAROL: Deprecated; TODO: implement checking if user is logged in as a wrapper

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
