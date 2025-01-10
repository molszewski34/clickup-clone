import React from "react";

import { useWorkspaceFormContext } from "@/context/FormProviders/WorkspaceFormProvider";
import { Workspace } from "@/app/server-actions/types";
import { AddIcons } from "../../../AddIcons";
import IconAndNamePicker from "./components/IconAndNamePicker";
import DescriptionInput from "./components/DescriptionInput";
import PrivacyToggle from "./components/PrivacyToggle";

interface SpaceModalBodyProps {
  isModalVisible: boolean; // Stan widoczności modala
  setModalVisible: (visible: boolean) => void; // Funkcja do ustawiania widoczności modala
  selectedColor: string; // Wybrany kolor
  setSelectedColor: (color: string) => void; // Funkcja do ustawiania wybranego koloru
  selectedIcon: keyof typeof AddIcons; // Wybrany klucz ikony z obiektu AddIcons
  setSelectedIcon: (icon: keyof typeof AddIcons) => void; // Funkcja do ustawiania wybranej ikony
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
      {/* Komponent wyboru ikony i koloru */}
      <IconAndNamePicker
        isModalVisible={isModalVisible}
        setModalVisible={setModalVisible}
        selectedColor={selectedColor}
        selectedIcon={selectedIcon}
        setSelectedColor={(color: string) => {
          setSelectedColor(color); // Zmiana koloru
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
      {/* Komponent do wprowadzenia opisu */}
      <DescriptionInput />
      {/* Komponent do ustawienia prywatności */}
      <PrivacyToggle />
    </div>
  );
};

export default SpaceModalBody;