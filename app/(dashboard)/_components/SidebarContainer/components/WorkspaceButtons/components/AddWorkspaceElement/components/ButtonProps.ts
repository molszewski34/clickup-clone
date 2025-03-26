interface ButtonProps {
  label: string;
  icon: React.ReactElement;
  extraIcons: number;
  active: boolean;
  onClick: () => void;
  width: number;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  isWorkspace: boolean;
  color?: string;
  rotate?: boolean;
}

export default ButtonProps;
