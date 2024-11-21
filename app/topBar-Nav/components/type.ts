import { ReactNode, MouseEventHandler } from "react";

// Wspólny typ dla funkcji zamykającej modal
export interface ModalProps {
  onClose: () => void; // Funkcja do zamykania modala
}

// Typy dla MyTuskModal
export type MyTuskTabName = "Activity" | "MyWork" | "Assig" | "Calendar";

export type MyTuskTabComponents = Record<MyTuskTabName, JSX.Element>;

export interface MyTuskModalProps extends ModalProps {
  defaultTab?: MyTuskTabName; // Opcjonalna domyślna zakładka
}

// Typy dla NewItemModal
export type ModalTabName =
  | "Task"
  | "Doc"
  | "Reminder"
  | "Chat"
  | "Whiteboard"
  | "Dashboard";

export type ModalTabComponents = Record<ModalTabName, JSX.Element>;

export interface NewModalProps extends ModalProps {
  defaultTab: ModalTabName; // Domyślna zakładka
}

// Typ dla pojedynczego elementu wyników
export interface SearchResult {
  title: string;
  type: "Doc" | "Dashboard" | "Whiteboard"; // Typy związane z `iconMap`
  space: string;
  category: string;
  updated: string;
}

// Typ dla mapowania ikon
export type IconMap = Record<SearchResult["type"], React.FC>;

// Definicja typów dla propsów komponentu Button
export interface ButtonProps {
  /** Dzieci elementu - tekst lub inne komponenty wyświetlane w przycisku */
  children?: ReactNode;
  /** Ikona wyświetlana obok tekstu */
  icon?: ReactNode;
  /** Funkcja wywoływana po kliknięciu przycisku */
  onClick?: MouseEventHandler<HTMLButtonElement>;
  /** Czy obramowanie ma być przerywane */
  dashed?: boolean;

  iconPosition?: string;

  circle?: boolean;
}
