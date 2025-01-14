import { useState } from "react";
import ThemeColor from "./components/ThemeColor";
import { handleColorChange } from "./components/themeUtils";
import Appearance from "./components/Appearance";
import Contrast from "./components/Contrast";

export default function SettingTheme() {
  const [activeColor, setActiveColor] = useState<string>("indigo-500");
  const [selectedMode, setSelectedMode] = useState("light");

  return (
    <>
      <ThemeColor
        activeColor={activeColor}
        handleColorChange={handleColorChange(setActiveColor)}
      />
      <Appearance
        selectedMode={selectedMode}
        setSelectedMode={setSelectedMode}
      />
      <Contrast />
    </>
  );
}

// import { Icons } from "@/icons/icons";
// import { useState } from "react";
// import dark from "../../../../../../img/dark.png";
// import light from "../../../../../../img/light.png";
// import Image from "next/image";
// export default function SettingTheme() {
//   const [activeColor, setActiveColor] = useState<string>("indigo-500");
//   const [selectedMode, setSelectedMode] = useState("light");

//   const colors: string[] = [
//     "indigo-500",
//     "blue-500",
//     "sky-500",
//     "teal-500",
//     "emerald-600",
//     "amber-500",
//     "orange-500",
//     "red-500",
//     "pink-500",
//     "purple-500",
//     "stone-500",
//     "black",
//   ];
//   const handleColorChange = (color: string) => {
//     setActiveColor(color);
//   };
//   return (
//     <>
//       <div className="grid gap-x-9 gap-y-6 grid-cols-custom-grid pb-6  ">
//         <div className="flex flex-col gap-y-1">
//           <h2 className="font-sans text-sm/snug font-medium text-gray-900">
//             Theme color
//           </h2>
//           <p className="font-sans text-xs/6 text-gray-500">
//             Choose a preferred theme for the app.
//           </p>
//         </div>
//         <div className="block">
//           <ul className="relative gap-[14px] flex flex-wrap -m-1">
//             {colors.map((color) => (
//               <li key={color}>
//                 <button
//                   onClick={() => handleColorChange(color)}
//                   className={`flex float-left items-center justify-center rounded-[14px] w-11 h-11 ${
//                     activeColor === color
//                       ? `border-2 border-${color} cursor-default`
//                       : "cursor-pointer hover:border-2 hover:border-gray-200"
//                   } bg-white`}
//                 >
//                   <span
//                     className={`flex justify-center items-center w-8 h-8 rounded-lg bg-${color}`}
//                   >
//                     {activeColor === color && (
//                       <Icons.Check className="text-[12px] text-white" />
//                     )}
//                   </span>
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//       <div className="grid gap-x-9 gap-y-6 grid-cols-custom-grid pb-6">
//         <div className="flex flex-col gap-y-1">
//           <h2 className="font-sans text-sm/snug font-medium text-gray-900">
//             Appearance
//           </h2>
//           <p className="font-sans text-xs/6 text-gray-500">
//             Choose light or dark mode.
//           </p>
//         </div>
//         <div className="block">
//           <div className="grid grid-flow-col gap-4 justify-start">
//             <label
//               onClick={() => setSelectedMode("light")}
//               className="cursor-pointer"
//             >
//               <Image
//                 src={light}
//                 alt="Light Mode"
//                 height={60}
//                 className={` w-auto h-auto cursor-pointer border rounded-xl p-2${
//                   selectedMode === "light"
//                     ? "border-blue-500 ring ring-blue-500"
//                     : "border-gray-300"
//                 }`}
//               />
//               <p
//                 className={`font-sans text-sm/5 px-3 py-2 mt-2${
//                   selectedMode === "light"
//                     ? "text-gray-900 font-medium"
//                     : "text-gray-500 "
//                 }`}
//               >
//                 Light
//               </p>
//             </label>

//             <label
//               onClick={() => setSelectedMode("dark")}
//               className="cursor-pointer"
//             >
//               <Image
//                 src={dark}
//                 alt="Light Mode"
//                 height={60}
//                 className={` w-auto h-auto cursor-pointer border rounded-xl p-2${
//                   selectedMode === "dark"
//                     ? "border-blue-500 ring ring-blue-500"
//                     : "border-gray-300"
//                 }`}
//               />
//               <p
//                 className={`font-sans text-sm/5 px-3 py-2 mt-2${
//                   selectedMode === "dark"
//                     ? "text-gray-900 font-medium"
//                     : "text-gray-500 "
//                 }`}
//               >
//                 Dark
//               </p>
//             </label>
//           </div>
//         </div>
//       </div>

//       <div className="grid gap-x-9 gap-y-6 grid-cols-custom-grid pb-6 border-b border-gray-200 mb-8">
//         <div className="flex flex-col gap-y-1">
//           <h2 className="font-sans text-sm/snug font-medium text-gray-900">
//             Contrast
//           </h2>
//           <p className="font-sans text-xs/6 text-gray-500">
//             Turn on and off high contrast text and borders.
//           </p>
//         </div>
//         <div className="block">
//           <label className="flex h-full items-center gap-3 cursor-pointer group">
//             <input type="checkbox" value="" className="sr-only peer" />
//             <div className="relative w-6 h-[14px] bg-gray-400 group-hover:bg-gray-500 peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-[10px] rtl:peer-checked:after:-translate-x-[10px] peer-checked:after:border-white after:content-[''] after:absolute after:top-[1px] after:start-[1px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[12px] after:w-[12px] after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
//             <div className="flex-col ">
//               <p className="font-sans text-sm/snug text-gray-600">
//                 High Contrast for increased accessibility
//               </p>
//             </div>
//           </label>
//         </div>
//       </div>
//     </>
//   );
// }
