import React, { useState } from "react";
import ButtonVariant2 from "../../../components/ButtonVariant2";
import ButtonVariant3 from "../../../components/ButtonVariant3";
import ButtonVariant4 from "../../../components/ButtonVariant4";
import { Icons } from "../../../icons/icons";
import { useWorkspaceFormContext } from "@/context/FormProviders/WorkspaceFormProvider";
type Props = {
  activeButton: string | null;
  subBarNavHeaderActive: boolean;
  setSubBarNavHeaderActive: React.Dispatch<React.SetStateAction<boolean>>;
  setSubBarNavFilterActive: React.Dispatch<React.SetStateAction<boolean>>;
};

const ViewBarNavTop: React.FC<Props> = ({
  activeButton,
  setSubBarNavHeaderActive,
  subBarNavHeaderActive,
  setSubBarNavFilterActive,
}) => {
  const { formData } = useWorkspaceFormContext();
  const { filtersState } = formData;
  const [buttonActive, setButtonActive] = useState<string | null>(null);
  const expandButtonHandler = () => {
    setButtonActive((prev) => (prev === "expandButton" ? "" : "expandButton"));
    setSubBarNavHeaderActive((prev) => !prev);
  };
  const filterButtonHandler = () => {
    setButtonActive((prev) => (prev === "filterHide" ? "" : "filterHide"));
    setSubBarNavFilterActive((prev) => !prev);
  };
  return (
    <div className="flex items-center h-12 text-sm capitalize">
      <div className="flex items-center pl-2 h-12 gap-2 transition-all duration-500 ease-in-out">
        {activeButton === "overview" ? (
          <ButtonVariant2 onClick={() => filterButtonHandler()}>
            <Icons.SliderHorizontal className="text-[14px] relative top-[4px]" />
            {buttonActive === "filterHide" ? "show" : "hide"}
          </ButtonVariant2>
        ) : (
          <>
            <ButtonVariant2
              variant="activeFilter"
              isActive={filtersState.searchQuery !== ""}
              onClick={() => filterButtonHandler()}
            >
              <Icons.SearchIcon className="text-[16px] relative top-[2px]" />
              search
            </ButtonVariant2>
            <ButtonVariant2
              variant="activeFilter"
              isActive={formData.filtersState.assignedToMe}
              onClick={() => filterButtonHandler()}
            >
              <Icons.SliderHorizontal className="text-[14px] relative top-[4px]" />
              {buttonActive === "filterHide" ? "filter" : "hide"}
              {formData.filtersState.assignedToMe ? (
                <>
                  <p className=" font-bold">&middot;</p>
                  {1}
                </>
              ) : (
                ""
              )}
            </ButtonVariant2>
            <ButtonVariant2
              isActive={buttonActive === "customize"}
              onClick={() =>
                setButtonActive((prev) =>
                  prev === "customize" ? "" : "customize"
                )
              }
            >
              <Icons.SettingsIcon className="text-[16px] relative top-[3px]" />
              customize
            </ButtonVariant2>
          </>
        )}
        <div className="w-[1px] h-4 mx-[2px] bg-gray_50"></div>
        {!subBarNavHeaderActive &&
          (activeButton === "overview" ? (
            <ButtonVariant3>Add card</ButtonVariant3>
          ) : (
            <div className="flex">
              <ButtonVariant3 doubleButtonLeft={true}>Add Task</ButtonVariant3>
              <ButtonVariant3
                doubleButtonRight={true}
                onClick={() =>
                  setButtonActive((prev) =>
                    prev === "AddTaskDoubleRightButton"
                      ? ""
                      : "AddTaskDoubleRightButton"
                  )
                }
              >
                <Icons.ArrowDownIcon
                  className={`text-[12px] relative top-[1px] transition-transform ease-in-out
                ${buttonActive === "AddTaskDoubleRightButton" && "rotate-180"}`}
                />
              </ButtonVariant3>
            </div>
          ))}
        <ButtonVariant4 onClick={() => expandButtonHandler()}>
          <Icons.ArrowDownIcon
            className={`text-[16px] relative top-[1px] transition-transform ease-in-out
               ${buttonActive === "expandButton" && "rotate-180"} `}
          />
        </ButtonVariant4>
      </div>
    </div>
  );
};

export default ViewBarNavTop;
