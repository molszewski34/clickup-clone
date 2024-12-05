export interface TooltipPosition {
  top: number;
  left: number;
}

export interface Tooltip {
  content: string;
  position: TooltipPosition;
}

export interface SelectIconProps {
  activeColor: string;
}

export type AddIconsType = {
  [key: string]: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

export type FormatTooltipContent = (text: string) => string;

export interface ColorChoiceProps {
  onColorChange?: (color: string) => void;
}
