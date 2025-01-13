import Image from "next/image";
import dark from "../../../../../../../../img/dark.png";
import light from "../../../../../../../../img/light.png";

interface AppearanceProps {
  selectedMode: string;
  setSelectedMode: (mode: string) => void;
}

const Appearance: React.FC<AppearanceProps> = ({
  selectedMode,
  setSelectedMode,
}) => (
  <div className="grid gap-x-9 gap-y-6 grid-cols-custom-grid pb-6">
    <div className="flex flex-col gap-y-1">
      <h2 className="font-sans text-sm/snug font-medium text-gray-900">
        Appearance
      </h2>
      <p className="font-sans text-xs/6 text-gray-500">
        Choose light or dark mode.
      </p>
    </div>
    <div className="block">
      <div className="grid grid-flow-col gap-4 justify-start">
        <label
          onClick={() => setSelectedMode("light")}
          className="cursor-pointer"
        >
          <Image
            src={light}
            alt="Light Mode"
            height={60}
            className={` w-auto h-auto cursor-pointer border rounded-xl p-2${
              selectedMode === "light"
                ? "border-blue-500 ring ring-blue-500"
                : "border-gray-300"
            }`}
          />
          <p
            className={`font-sans text-sm/5 px-3 py-2 mt-2${
              selectedMode === "light"
                ? "text-gray-900 font-medium"
                : "text-gray-500 "
            }`}
          >
            Light
          </p>
        </label>

        <label
          onClick={() => setSelectedMode("dark")}
          className="cursor-pointer"
        >
          <Image
            src={dark}
            alt="Light Mode"
            height={60}
            className={` w-auto h-auto cursor-pointer border rounded-xl p-2${
              selectedMode === "dark"
                ? "border-blue-500 ring ring-blue-500"
                : "border-gray-300"
            }`}
          />
          <p
            className={`font-sans text-sm/5 px-3 py-2 mt-2${
              selectedMode === "dark"
                ? "text-gray-900 font-medium"
                : "text-gray-500 "
            }`}
          >
            Dark
          </p>
        </label>
      </div>
    </div>
  </div>
);

export default Appearance;
