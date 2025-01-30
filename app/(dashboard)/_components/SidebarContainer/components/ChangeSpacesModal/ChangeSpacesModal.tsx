import { useUser } from "@/context/DataProvider/UserDataProvider";
import { Icons } from "@/icons/icons";
interface UserProfile {
  userName: string;
  userInitial: string;
}
export default function ChangeSpacesModal({
  userName,
  userInitial,
}: UserProfile) {
  const { userId } = useUser();

  const handleButtonClick = () => {
    window.location.href = `/${userId}/setting/users`;
  };

  const handleButtonSettingsClick = () => {
    window.location.href = `/${userId}/setting/profile`;
  };

  return (
    <>
      <div className="Flex flex-col p-2">
        <div className="flex items-center gap-2 p-2">
          <div className="flex justify-center items-center w-8 h-8 bg-emerald-600 rounded-md text-white text-xs font-sans font-bold">
            {userInitial}
          </div>
          <div className="flex-grow min-w-0 flex flex-col ">
            <div className="text-[14px] truncate leading-4 font-medium text-gray-800">
              {userName}&apos;s Workspace
            </div>
            <div className="text-[14px] leading-4 font-normal text-gray-500">
              Free forever
            </div>
          </div>
        </div>
        <button
          className="flex items-center gap-2 w-full px-2 py-1 text-gray-700 text-sm font-normal hover:bg-gray-200 rounded-md"
          onClick={handleButtonSettingsClick}
        >
          <Icons.SettingsIcon className="text-gray-500 text-[16px] " />
          Settings
        </button>
        <button className="flex items-center gap-2 w-full px-2 py-1 text-gray-700 text-sm font-normal hover:bg-gray-200 rounded-md">
          <Icons.Upgrade className="text-gray-500 text-[16px] " />
          Upgrade
        </button>
        <button className="flex justify-between items-center gap-2 w-full px-2 py-1 text-gray-700 text-sm font-normal hover:bg-gray-200 rounded-md">
          <div className="flex items-center gap-2">
            <Icons.AppsIcon className="text-gray-500 text-[16px] " />
            Apps
          </div>
          <Icons.ArrowForward className="text-gray-500 text-[16px] " />
        </button>
        <button
          className="flex items-center gap-2 w-full px-2 py-1 text-gray-700 text-sm font-normal hover:bg-gray-200 rounded-md"
          onClick={handleButtonClick}
        >
          <Icons.PeopleIcon className="text-gray-500 text-[16px] " />
          Manage users
        </button>
      </div>
      <div className="w-full h-px bg-gray-200"></div>
      <div className="Flex flex-col p-2 h-[150px] overflow-y-auto">
        <div className="flex justify-between items-center gap-2 p-2">
          <div className="text-[12px] font-medium text-gray-500">
            Switch Workspace
          </div>
          <button className="flex items-center p-1 hover:bg-gray-200 rounded-md">
            <Icons.SearchIcon className="text-gray-500 text-[14px] " />
          </button>
        </div>

        <button className="flex items-center gap-2 p-2 hover:bg-gray-200 rounded-md">
          <div className="flex justify-center items-center w-8 h-8 bg-emerald-600 rounded-md text-white text-xs font-sans font-bold">
            P
          </div>
          <div className="flex-grow min-w-0 flex flex-col">
            <div className="text-[14px] w-[176px] truncate leading-4 font-medium text-gray-800">
              Przykładowe nazwisko&apos;s Workspace
            </div>
            <div className="text-[14px] leading-4 font-normal text-gray-500 text-left">
              Free forever &#x2022; 1 member
            </div>
          </div>
        </button>
      </div>
      <div className="w-full p-2">
        <button className="flex  items-center gap-2 w-full px-2 py-1 text-gray-700 text-sm font-normal hover:bg-gray-200 rounded-md">
          <Icons.PlusIco className="text-gray-500 text-[16px] " />
          New Workspace
        </button>
      </div>
    </>
  );
}
