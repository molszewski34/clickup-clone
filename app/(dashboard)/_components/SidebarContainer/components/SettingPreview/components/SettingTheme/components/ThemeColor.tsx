import { Icons } from "@/icons/icons";
import { colors } from "./themeUtils";

interface ThemeColorProps {
  activeColor: string;
  handleColorChange: (color: string) => void;
}

const ThemeColor: React.FC<ThemeColorProps> = ({
  activeColor,
  handleColorChange,
}) => (
  <div className="grid gap-x-9 gap-y-6 grid-cols-custom-grid pb-6">
    <div className="flex flex-col gap-y-1">
      <h2 className="font-sans text-sm/snug font-medium text-gray-900">
        Theme color
      </h2>
      <p className="font-sans text-xs/6 text-gray-500">
        Choose a preferred theme for the app.
      </p>
    </div>
    <div className="block">
      <ul className="relative gap-[14px] flex flex-wrap -m-1">
        {colors.map((color) => (
          <li key={color}>
            <button
              onClick={() => handleColorChange(color)}
              className={`flex float-left items-center justify-center rounded-[14px] w-11 h-11 ${
                activeColor === color
                  ? `border-2 border-${color} cursor-default`
                  : "cursor-pointer hover:border-2 hover:border-gray-200"
              } bg-white`}
            >
              <span
                className={`flex justify-center items-center w-8 h-8 rounded-lg bg-${color}`}
              >
                {activeColor === color && (
                  <Icons.Check className="text-[12px] text-white" />
                )}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default ThemeColor;
