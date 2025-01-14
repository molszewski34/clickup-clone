export const colors: string[] = [
  "indigo-500",
  "blue-500",
  "sky-500",
  "teal-500",
  "emerald-600",
  "amber-500",
  "orange-500",
  "red-500",
  "pink-500",
  "purple-500",
  "stone-500",
  "black",
];

export const handleColorChange =
  (setActiveColor: (color: string) => void) => (color: string) => {
    setActiveColor(color);
  };
