import { useUserProfile } from '@/hooks/useUserProfile';
import { Icons } from '@/icons/icons';

export default function HomeContent() {
  const { userData } = useUserProfile();
  const userName = userData?.signUpFullName || '';
  const firstName = userName.split(' ')[0];
  return (
    <>
      <div className="mx-6 my-6">
        <h1 className="px-6 font-sans font-semibold text-2xl text-gray-950 ">
          Good evening, {firstName}
        </h1>
        <div className=" flex flex-col mt-4 mb-[14px] gap-4 ">
          <div className="grid grid-flow-col grid-cols-2 gap-4">
            <div className="h-[336px] border border-gray-200 rounded-xl hover:border-gray-400 overflow-hidden group">
              <div className="flex items-center  justify-between pb-2 mt-3 px-4 font-sans font-semibold text-base text-gray-950">
                Recents
                <div className=" hidden gap-1 group-hover:flex">
                  <button className="flex justify-center items-center  w-6 h-6 rounded-md hover:bg-gray-100">
                    <Icons.FullScreen className="text-[14px] text-gray-600" />
                  </button>
                  <button className="flex justify-center items-center  w-6 h-6 rounded-md hover:bg-gray-100">
                    <Icons.ThreeDotsIcon className="text-[14px] text-gray-600" />
                  </button>
                </div>
              </div>
              <div className=" w-full h-[258px] pb-4 custom-scrollbar overflow-y-auto overflow-x-hidden">
                <div className="h-[2000px]"></div>
              </div>
            </div>
            <div className="h-[336px] border border-gray-200 rounded-xl hover:border-gray-400 overflow-hidden group">
              <div className="flex items-center justify-between pb-2 mt-3 px-4 font-sans font-semibold text-base text-gray-950">
                Agenda
                <div className=" hidden gap-1 group-hover:flex">
                  <button className="flex justify-center items-center  w-6 h-6 rounded-md hover:bg-gray-100">
                    <Icons.FullScreen className="text-[14px] text-gray-600" />
                  </button>
                  <button className="flex justify-center items-center  w-6 h-6 rounded-md hover:bg-gray-100">
                    <Icons.ThreeDotsIcon className="text-[14px] text-gray-600" />
                  </button>
                </div>
              </div>
              <div className=" w-full h-[258px] pb-4 custom-scrollbar overflow-y-auto overflow-x-hidden">
                <div className="h-[2000px]"> </div>
              </div>
            </div>
          </div>
          <div className="grid grid-flow-col grid-cols-2 gap-4">
            <div className="h-[576px] border border-gray-200 rounded-xl hover:border-gray-400 overflow-hidden group">
              <div className="flex items-center justify-between pb-2 mt-3 px-4 font-sans font-semibold text-base text-gray-950">
                My Work
                <div className=" hidden gap-1 group-hover:flex">
                  <button className="flex justify-center items-center  w-6 h-6 rounded-md hover:bg-gray-100">
                    <Icons.SettingsIcon className="text-[14px] text-gray-600" />
                  </button>
                  <button className="flex justify-center items-center  w-6 h-6 rounded-md hover:bg-gray-100">
                    <Icons.FullScreen className="text-[14px] text-gray-600" />
                  </button>
                  <button className="flex justify-center items-center  w-6 h-6 rounded-md hover:bg-gray-100">
                    <Icons.ThreeDotsIcon className="text-[14px] text-gray-600" />
                  </button>
                </div>
              </div>
              <div className=" w-full h-[457px] pb-4 custom-scrollbar overflow-y-auto overflow-x-hidden">
                <div className="h-[2000px]"> </div>
              </div>
            </div>
            <div className="h-[576px] border border-gray-200 rounded-xl hover:border-gray-400 overflow-hidden group">
              <div className="flex items-center justify-between pb-2 mt-3 px-4 font-sans font-semibold text-base text-gray-950">
                Assigned to me
                <div className=" hidden gap-1 group-hover:flex">
                  <button className="flex justify-center items-center  w-6 h-6 rounded-md hover:bg-gray-100">
                    <Icons.SettingsIcon className="text-[14px] text-gray-600" />
                  </button>
                  <button className="flex justify-center items-center  w-6 h-6 rounded-md hover:bg-gray-100">
                    <Icons.FullScreen className="text-[14px] text-gray-600" />
                  </button>
                  <button className="flex justify-center items-center  w-6 h-6 rounded-md hover:bg-gray-100">
                    <Icons.ThreeDotsIcon className="text-[14px] text-gray-600" />
                  </button>
                </div>
              </div>
              <div className=" w-full h-[457px] pb-4 custom-scrollbar overflow-y-auto overflow-x-hidden">
                <div className="h-[2000px]"> </div>
              </div>
            </div>
          </div>
          <div className="grid grid-flow-col grid-cols-2 gap-4">
            <div className="h-[456px] border border-gray-200 rounded-xl hover:border-gray-400 overflow-hidden group">
              <div className="flex items-center justify-between pb-2 mt-3 px-4 font-sans font-semibold text-base text-gray-950">
                Personal List
                <div className=" hidden gap-1 group-hover:flex">
                  <button className="flex justify-center items-center  w-6 h-6 rounded-md hover:bg-gray-100">
                    <Icons.SettingsIcon className="text-[14px] text-gray-600" />
                  </button>
                  <button className="flex justify-center items-center  w-6 h-6 rounded-md hover:bg-gray-100">
                    <Icons.FullScreen className="text-[14px] text-gray-600" />
                  </button>
                  <button className="flex justify-center items-center  w-6 h-6 rounded-md hover:bg-gray-100">
                    <Icons.ThreeDotsIcon className="text-[14px] text-gray-600" />
                  </button>
                </div>
              </div>
              <div className=" w-full h-[394px] pb-4 custom-scrollbar overflow-y-auto overflow-x-hidden">
                <div className="h-[2000px]"> </div>
              </div>
            </div>
            <div className="h-[456px] border border-gray-200 rounded-xl hover:border-gray-400 overflow-hidden group">
              <div className="flex items-center justify-between pb-2 mt-3 px-4 font-sans font-semibold text-base text-gray-950">
                Assigned comments
                <div className=" hidden gap-1 group-hover:flex">
                  <button className="flex justify-center items-center  w-6 h-6 rounded-md hover:bg-gray-100">
                    <Icons.FullScreen className="text-[14px] text-gray-600" />
                  </button>
                  <button className="flex justify-center items-center  w-6 h-6 rounded-md hover:bg-gray-100">
                    <Icons.ThreeDotsIcon className="text-[14px] text-gray-600" />
                  </button>
                </div>
              </div>
              <div className=" w-full h-[394px] pb-4 custom-scrollbar overflow-y-auto overflow-x-hidden">
                <div className="h-[2000px]"> </div>
              </div>
            </div>
          </div>
          <div className="grid grid-flow-col grid-cols-1">
            <div className="h-[318px] border border-gray-200 rounded-xl hover:border-gray-400 overflow-hidden group">
              <div className="flex items-center justify-between pb-2 mt-3 px-4 font-sans font-semibold text-base text-gray-950">
                LineUp
                <div className=" hidden gap-1 group-hover:flex">
                  <button className="flex justify-center items-center  w-6 h-6 rounded-md hover:bg-gray-100">
                    <Icons.FullScreen className="text-[14px] text-gray-600" />
                  </button>
                  <button className="flex justify-center items-center  w-6 h-6 rounded-md hover:bg-gray-100">
                    <Icons.ThreeDotsIcon className="text-[14px] text-gray-600" />
                  </button>
                </div>
              </div>

              <div className=" w-full h-[115px] pb-4 custom-scrollbar overflow-y-auto overflow-x-hidden"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
