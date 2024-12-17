import React, { useRef, useEffect, useCallback } from 'react';
import { AddIcons } from '../../AddIcons'; // Importowanie komponentów ikon z AddIcons
import IconAndColorPicker from '../../IconAndColorPicker'; // Importowanie komponentu wyboru koloru i ikony
import { useWorkspaceFormContext } from '@/context/FormProviders/WorkspaceFormProvider';
import { Workspace } from '@/app/server-actions/types';

interface IconAndNamePickerProps {
  isModalVisible: boolean; // Stan widoczności modala
  setModalVisible: (visible: boolean) => void; // Funkcja do ustawiania widoczności modala
  selectedColor: string; // Wybrany kolor
  setSelectedColor: (color: string) => void; // Funkcja do ustawiania wybranego koloru
  selectedIcon: keyof typeof AddIcons; // Wybrana ikona (klucz z AddIcons)
  setSelectedIcon: (icon: keyof typeof AddIcons) => void; // Funkcja do ustawiania wybranej ikony
}

const IconAndNamePicker: React.FC<IconAndNamePickerProps> = ({
  isModalVisible,
  setModalVisible,
  selectedColor,
  setSelectedColor,
  selectedIcon,
  setSelectedIcon,
}) => {
  const bodyRef = useRef<HTMLDivElement | null>(null); // Ref dla zewnętrznej części modala

  const { formData, setFormData, error } = useWorkspaceFormContext();

  console.log('formData w IconAndNamePicker', formData);

  // Funkcja obsługująca kliknięcie poza modalem, aby go zamknąć
  const handleOutsideClick = useCallback(
    (event: MouseEvent) => {
      if (bodyRef.current && !bodyRef.current.contains(event.target as Node)) {
        setModalVisible(false);
      }
    },
    [setModalVisible]
  );

  // Użycie hooka useEffect do dodania i usunięcia event listenera dla kliknięć poza modalem
  useEffect(() => {
    if (isModalVisible) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick); // Czyszczenie po unmount
    };
  }, [isModalVisible, handleOutsideClick]);

  const buttonColorClass = `bg-${selectedColor} text-white`; // Dynamically set background color based on selectedColor

  const SelectedIconComponent = selectedIcon ? AddIcons[selectedIcon] : null; // Wybieramy komponent ikony na podstawie selectedIcon

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState: Workspace) => ({
      ...prevState,
      name: e.target.value,
    }));
  };

  return (
    <div className="mt-5">
      <h3 className="text-gray-600 font-medium text-sm/6 font-sans">
        Icon & name
      </h3>
      <div className="relative flex items-center w-full gap-3 mt-2">
        {/* Przycisk, który otwiera modal */}
        <button
          onClick={() => setModalVisible(!isModalVisible)}
          className={`flex min-w-[34px] min-h-[34px] items-center justify-center rounded-lg border border-gray-200 font-sans text-sm font-semibold ${buttonColorClass}`}
        >
          {/* Jeśli wybrano ikonę, renderujemy ją, w przeciwnym razie "M" */}
          {SelectedIconComponent ? (
            <SelectedIconComponent className="text-white" />
          ) : (
            'M'
          )}
        </button>
        {isModalVisible && (
          <div
            ref={bodyRef} // Ref dla modal
            className="absolute top-[55px] left-0 z-50 w-[276px] bg-white shadow-custom rounded-lg"
          >
            <div className="relative pb-4">
              <p className="text-gray-400 font-sans font-semibold text-[11px] mt-2 mb-1 px-4 py-2 ">
                Space color
              </p>
              {/* Komponent wybierający kolor i ikonę */}
              <IconAndColorPicker
                onColorChange={setSelectedColor}
                onIconSelect={setSelectedIcon}
              />
            </div>
          </div>
        )}
        {/* Pole tekstowe do wpisania nazwy */}

        <input
          type="text"
          placeholder="e.g. Marketing, Engineering, HR"
          className={`w-full border ${
            error ? 'border-red-500' : 'border-gray-200'
          }  px-[10px] py-3 text-sm/[14px] font-sans rounded-lg`}
          onChange={handleDescriptionChange}
        />
      </div>
      {error && (
        <p className="text-xs text-red-500 ml-12">Space name is required</p>
      )}
    </div>
  );
};

export default IconAndNamePicker;
