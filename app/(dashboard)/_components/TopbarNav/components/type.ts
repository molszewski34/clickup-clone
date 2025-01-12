import { ReactNode, MouseEventHandler } from "react";

// Common type for the function that closes the modal
export interface ModalProps {
  onClose: () => void; // Function to close the modal
}

// Types for TaskModal
export type TaskTabName = "Activity" | "MyWork" | "Assig" | "Calendar";

export type TaskTabComponents = Record<TaskTabName, JSX.Element>;

export interface TaskModalProps extends ModalProps {
  defaultTab?: TaskTabName; // Optional default tab
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

// Interface defining the props for the CopyEmailButton component
export interface CopyEmailButtonProps {
  email: string; // The email that will be copied to the clipboard
  loading: boolean; // A flag indicating whether the email is still loading
}

// Interface defining the props for the InfoRow component
export interface InfoRowProps {
  title: string; // The title displayed in the row
  children: ReactNode; // Child elements to be rendered inside the row
}

// types.ts

export interface SearchResult {
  title: string;
  type: string;
  space: string;
  category: string;
  updated: string;
}

export interface IconMap {
  [key: string]: React.FC;
}
