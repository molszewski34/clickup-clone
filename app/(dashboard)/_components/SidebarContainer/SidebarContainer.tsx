"use client";

import SidebarContent from "./components/SidebarContent/SidebarContent";
import ResizeHandle from "./components/ResizeHandle";
import SidebarModal from "./components/SidebarModal/SidebarModal";
import ContainerModalFavouritesButton from "./components/ContainerModalFavouritesButton";
import ContainerModalWorkButtons from "./components/ContainerModalWorkButtons";
import { useSidebar } from "./components/useSidebar";
import UserProfile from "./components/UserProfile";

export default function SidebarContainer() {
  const {
    modalState,
    width,
    userName,
    userInitial,
    loading,
    isModalOpen,
    openModal,
    closeModal,
    toggleModal,
    handleMouseDown,
    shrinkSidebar,
  } = useSidebar();

  return (
    <>
      <div className="relative flex items-center h-full">
        <div
          style={{
            width: `${width}px`,
            maxWidth: "369px",
            height: "calc(100vh - 40px)",
            position: "relative",
          }}
          className="border border-gray-200 bg-opacity-50 bg-gray-100 shadow-md group custom-scrollbar overflow-x-hidden overflow-y-auto"
        >
          <div>
            <UserProfile
              userName={userName}
              userInitial={userInitial}
              width={width}
              shrinkSidebar={shrinkSidebar}
            />
            <SidebarContent
              userName={`${userName} workspace`}
              userInitial={userInitial}
              loading={loading}
              width={width}
              openModal={openModal}
              toggleModal={toggleModal}
            />
          </div>
        </div>

        <ResizeHandle width={width} onMouseDown={handleMouseDown} />
      </div>

      {modalState === "menuFavorite" && (
        <div
          className="fixed inset-0 flex justify-center bg-transparent bg-opacity-50 z-50"
          style={{ left: "60px" }}
          onClick={() => toggleModal("none")}
        >
          <div
            id="menuWorkspaceList"
            className="fixed z-50 top-10 w-[255px] bg-gray-50 border-r border-gray-300 py-2"
            style={{ left: "60px", height: "calc(100vh - 40px)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <ContainerModalFavouritesButton />
          </div>
        </div>
      )}
      {modalState === "menuSpace" && (
        <div
          className="fixed inset-0 flex justify-center bg-transparent bg-opacity-50 z-50"
          style={{ left: "60px" }}
          onClick={() => toggleModal("none")}
        >
          <div
            id="menuWorkspaceList"
            className="fixed z-50 top-10 w-[255px] bg-gray-50 border-r border-gray-300 py-2"
            style={{ left: "60px", height: "calc(100vh - 40px)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <ContainerModalWorkButtons openModal={openModal} />
          </div>
        </div>
      )}

      <SidebarModal isModalOpen={isModalOpen} closeModal={closeModal} />
    </>
  );
}
