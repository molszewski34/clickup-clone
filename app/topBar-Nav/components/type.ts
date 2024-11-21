import { ReactNode, MouseEventHandler } from "react";

// Common type for the function that closes the modal
export interface ModalProps {
  onClose: () => void; // Function to close the modal
}

// Types for MyTuskModal
export type MyTuskTabName = "Activity" | "MyWork" | "Assig" | "Calendar";

export type MyTuskTabComponents = Record<MyTuskTabName, JSX.Element>;

export interface MyTuskModalProps extends ModalProps {
  defaultTab?: MyTuskTabName; // Optional default tab
}

// Types for NewItemModal
export type ModalTabName =
  | "Task"
  | "Doc"
  | "Reminder"
  | "Chat"
  | "Whiteboard"
  | "Dashboard";

export type ModalTabComponents = Record<ModalTabName, JSX.Element>;

export interface NewModalProps extends ModalProps {
  defaultTab: ModalTabName; // Default tab
}

// Type for a single search result item
export interface SearchResult {
  title: string;
  type: "Doc" | "Dashboard" | "Whiteboard"; // Types related to `iconMap`
  space: string;
  category: string;
  updated: string;
}

// Type for icon mapping
export type IconMap = Record<SearchResult["type"], React.FC>;

// Definition of types for Button component props
export interface ButtonProps {
  /** Children elements - text or other components displayed inside the button */
  children?: ReactNode;
  /** Icon displayed next to the text */
  icon?: ReactNode;
  /** Function called when the button is clicked */
  onClick?: MouseEventHandler<HTMLButtonElement>;
  /** Whether the border should be dashed */
  dashed?: boolean;

  iconPosition?: string;

  circle?: boolean;
}
