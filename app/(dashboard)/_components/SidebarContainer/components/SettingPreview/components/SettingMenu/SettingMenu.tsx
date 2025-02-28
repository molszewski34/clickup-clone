import { Icons } from "@/icons/icons";
import useLogoutHandler from "@/app/(auth)/login/_hooks/useLogoutHandler";
import ButtonRender from "./components/ButtonRender";
import { useRouter } from "next/navigation";
import { useSidebar } from "../../../useSidebar";

export default function SettingMenu() {
  const { handleLogout } = useLogoutHandler();
  const { back } = useRouter();
  const { currentWorkspace } = useSidebar();

  return (
    <>
      <div
        className=" flex flex-col min-w-[255px] bg-gray-50 border-r border-gray-200"
        style={{ height: "calc(100vh - 40px)" }}>
        <div className=" flex justify-center items-center w-full h-[47px] px-2 border-b border-gray-200">
          <button
            className="flex w-full gap-[9px] h-8 items-center rounded-md hover:bg-gray-200 px-[11px] font-sans font-normal text-sm"
            onClick={() => back()}>
            <Icons.ArrowLeft className="text-[16px] text-gray-500 stroke-2" />
            Back to Workspace
          </button>
        </div>
        <div className="mx-2 w-fit">
          <div className="p-2 pt-4 font-sans text-[11px] uppercase font-medium text-gray-500">
            {currentWorkspace?.name}
          </div>
        </div>
        <div className=" flex flex-col h-full justify-between">
          <ButtonRender />
          <div className=" sticky bottom-0 flex justify-center items-center w-full h-[47px] px-2 border-t border-gray-200">
            <button
              className="flex w-full gap-[9px] h-8 items-center rounded-md hover:bg-gray-200 px-[11px] font-sans font-normal text-sm"
              onClick={handleLogout}>
              <Icons.Logout className="text-[16px] text-gray-500 stroke-2" />
              Log out
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
