import React from "react";

import { useWorkspaceFormContext } from "@/context/FormProviders/WorkspaceFormProvider";
import { Workspace } from "@/app/server-actions/types";
import { AddIcons } from "../../../AddIcons";
import IconAndNamePicker from "./components/IconAndNamePicker";
import DescriptionInput from "./components/DescriptionInput";
import PrivacyToggle from "./components/PrivacyToggle";

interface SpaceModalBodyProps {
  isModalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
  selectedColor: string;
  setSelectedColor: (color: string) => void;
  selectedIcon: keyof typeof AddIcons;
  setSelectedIcon: (icon: keyof typeof AddIcons) => void;
}

const SpaceModalBody: React.FC<SpaceModalBodyProps> = ({
  isModalVisible,
  setModalVisible,
  selectedColor,
  setSelectedColor,
  selectedIcon,
  setSelectedIcon,
}) => {
  const { setFormData } = useWorkspaceFormContext();
  return (
    <div className="p-6">
      <IconAndNamePicker
        isModalVisible={isModalVisible}
        setModalVisible={setModalVisible}
        selectedColor={selectedColor}
        selectedIcon={selectedIcon}
        setSelectedColor={(color: string) => {
          setSelectedColor(color);
        }}
        setSelectedIcon={(icon: keyof typeof AddIcons) => {
          console.log(icon);
          setSelectedIcon(icon);
          setFormData((prevState: Workspace) => ({
            ...prevState,
            icon:
              typeof prevState.icon === "string"
                ? [{ selectedIconName: icon }]
                : [{ ...prevState.icon, selectedIconName: icon }],
          }));
        }}
      />
      <DescriptionInput />
      <PrivacyToggle />
    </div>
  );
};

export default SpaceModalBody;
