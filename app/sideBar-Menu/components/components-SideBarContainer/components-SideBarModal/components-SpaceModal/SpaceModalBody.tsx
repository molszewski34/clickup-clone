import React from "react";
import IconAndNamePicker from "./IconAndNamePicker";
import DescriptionInput from "./DescriptionInput";
import PrivacyToggle from "./PrivacyToggle";
import { AddIcons } from "../AddIcons";

interface SpaceModalBodyProps {
  isModalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
  selectedColor: string;
  setSelectedColor: (color: string) => void;
  selectedIcon: keyof typeof AddIcons; // Zmieniamy typ na klucz z AddIcons
  setSelectedIcon: (icon: keyof typeof AddIcons) => void; // Zmieniamy typ na funkcję przyjmującą klucz z AddIcons
}

const SpaceModalBody: React.FC<SpaceModalBodyProps> = ({
  isModalVisible,
  setModalVisible,
  selectedColor,
  setSelectedColor,
  selectedIcon,
  setSelectedIcon,
}) => {
  return (
    <div className="p-6">
      <IconAndNamePicker
        isModalVisible={isModalVisible}
        setModalVisible={setModalVisible}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
        selectedIcon={selectedIcon}
        setSelectedIcon={setSelectedIcon}
      />
      <DescriptionInput />
      <PrivacyToggle />
    </div>
  );
};

export default SpaceModalBody;
