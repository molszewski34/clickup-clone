import React from "react";
import MenuListChanger from "./MenuListChanger/MenuListChanger";
import MenuFileChanger from "./MenuFileChanger/MenuFileChanger";
import ButtonRender from "./ButtonRender/ButtonRender";
import ListModal from "./ListModal";

interface ModalProps {
  modalState:
    | "none"
    | "menuSpaceList"
    | "createList"
    | "menuFileChanger"
    | "menuListChanger";
  toggleModal: (
    modal:
      | "none"
      | "menuSpaceList"
      | "createList"
      | "menuFileChanger"
      | "menuListChanger"
  ) => void;
  width?: number;
  offsetTopState?: number | null;
  startRenaming?: () => void;
}

export const MenuListChangerModal: React.FC<ModalProps> = ({
  modalState,
  toggleModal,
  width = 0,
  startRenaming,
}) => {
  if (modalState !== "menuListChanger") return null;
  return (
    <div
      className="fixed inset-0 flex justify-center bg-transparent bg-opacity-50 z-50"
      onClick={() => toggleModal("none")}
    >
      <div
        id="menuListChanger"
        className="fixed z-50 bg-white border border-gray-300 shadow-lg rounded-lg py-2"
        style={{ left: `${width - 20}px`, bottom: "10px" }}
        onClick={(e) => e.stopPropagation()}
      >
        <MenuListChanger startRenaming={startRenaming} />
      </div>
    </div>
  );
};

export const MenuFileChangerModal: React.FC<ModalProps> = ({
  modalState,
  toggleModal,
  width = 0,
  startRenaming,
}) => {
  if (modalState !== "menuFileChanger") return null;
  return (
    <div
      className="fixed inset-0 flex justify-center bg-transparent bg-opacity-50 z-50"
      onClick={() => toggleModal("none")}
    >
      <div
        id="menuFileChanger"
        className="fixed z-50 bg-white border border-gray-300 shadow-lg rounded-lg py-2"
        style={{ left: `${width - 20}px`, bottom: "10px" }}
        onClick={(e) => e.stopPropagation()}
      >
        <MenuFileChanger startRenaming={startRenaming} />
      </div>
    </div>
  );
};

export const MenuSpaceListModal: React.FC<ModalProps> = ({
  modalState,
  toggleModal,
  width = 0,
  offsetTopState = null,
}) => {
  if (modalState !== "menuSpaceList") return null;
  return (
    <div
      className="fixed inset-0 flex justify-center bg-transparent bg-opacity-50 z-50"
      onClick={() => toggleModal("none")}
    >
      <div
        id="menuSpaceList"
        className="fixed z-50 top-2/4 bg-white border border-gray-300 shadow-lg rounded-lg py-2"
        style={{ left: `${width - 20}px`, top: `${offsetTopState}px` }}
        onClick={(e) => e.stopPropagation()}
      >
        <ButtonRender toggleModal={toggleModal} />
      </div>
    </div>
  );
};

export const CreateListModal: React.FC<ModalProps> = ({
  modalState,
  toggleModal,
}) => {
  if (modalState !== "createList") return null;
  return (
    <div
      className="fixed inset-0 flex justify-center bg-gray-950 bg-opacity-50 z-50"
      onClick={() => toggleModal("none")}
    >
      <div
        className="bg-white rounded-xl w-[540px] h-[326px] mt-[128px] shadow-lg  border border-gray-20 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <ListModal toggleModal={toggleModal} />
      </div>
    </div>
  );
};
