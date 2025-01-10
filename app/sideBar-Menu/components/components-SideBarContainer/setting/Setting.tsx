import { Icons } from "@/icons/icons";
import React, { useState } from "react";
import dark from "../../../../img/dark.png";
import light from "../../../../img/light.png";
import Image from "next/image";
import useLogoutHandler from "@/app/(auth)/login/_hooks/useLogoutHandler";
import { useUserProfile } from "@/app/server-actions/user/useUserProfile";

export default function Setting() {
  const [Password, setPassword] = useState("bllalala");

  const [selectedWeekStart, setSelectedWeekStart] = useState<string>("monday");
  const [selectedTimeFormat, setSelectedTimeFormat] = useState<string>("24h");
  const [selectedDateFormat, setSelectedDateFormat] =
    useState<string>("dd/mm/yyyy");

  const [selectedMode, setSelectedMode] = useState("light"); // 'light' lub 'dark'
  const [activeColor, setActiveColor] = useState<string>("indigo-500"); // Stan do przechowywania aktywnego koloru

  const { handleLogout } = useLogoutHandler(); // Korzystanie z hooka

  const { userData } = useUserProfile();

  console.log("userData w Settings", userData);

  type Option = {
    id: string;
    label: string;
  };

  type Options = {
    weekStart: Option[];
    timeFormat: Option[];
    dateFormat: Option[];
  };

  //Lista dostępnych kolorów do wyboru
  const colors: string[] = [
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

  const options: Options = {
    weekStart: [
      { id: "monday", label: "Monday" },
      { id: "sunday", label: "Sunday" },
    ],
    timeFormat: [
      { id: "24h", label: "24 Hour" },
      { id: "12h", label: "12 Hour" },
    ],
    dateFormat: [
      { id: "dd/mm/yyyy", label: "DD/MM/YYYY" },
      { id: "mm/dd/yyyy", label: "MM/DD/YYYY" },
      { id: "yyyy/mm/dd", label: "YYYY/MM/DD" },
    ],
  };

  const renderRadioButtons = (
    name: string,
    options: Option[],
    selectedValue: string,
    setSelectedValue: (value: string) => void
  ) => (
    <div className="mb-6">
      <h2 className="font-sans text-xs/snug font-medium text-gray-700 mb-2">
        {name}
      </h2>
      {options.map((option) => (
        <div className="flex items-center mb-4" key={option.id}>
          <input
            id={option.id}
            type="radio"
            name={name}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:outline-none"
            checked={selectedValue === option.id}
            onChange={() => setSelectedValue(option.id)}
          />
          <label htmlFor={option.id} className="ms-2 text-sm text-gray-700">
            {option.label}
          </label>
        </div>
      ))}
    </div>
  );

  // Funkcja obsługująca zmianę koloru
  const handleColorChange = (color: string) => {
    setActiveColor(color); // Ustawiamy wybrany kolor jako aktywny
  };

  const makeInitials = (fullName: string | undefined): string => {
    if (!fullName) return "";
    const words = fullName.trim().split(/\s+/);
    const firstWord = words[0] || "";
    const lastWord = words[words.length - 1] || "";

    return `${firstWord.charAt(0).toUpperCase()}${lastWord
      .charAt(0)
      .toUpperCase()}`;
  };

  return (
    <>
      <div className="sticky flex flex-col w-full h-full pt-6 px-12 pb-0 overflow-y-auto overflow-x-hidden bg-white">
        {/* title */}
        <div className=" flex w-full h-5 font-sans font-medium mb-[30px] text-gray-900 text-2xl/snug">
          My Settings
        </div>

        {/* Profile div  */}
        <div className="grid gap-x-9 gap-y-6 grid-cols-custom-grid pb-6 border-b border-gray-200 mb-8">
          <div className="flex flex-col gap-y-1">
            <h2 className="font-sans text-sm/snug font-medium text-gray-900">
              Profile
            </h2>
            <p className="font-sans text-xs/6 text-gray-500">
              Your personal information and account security settings.
            </p>
          </div>
          <div className=" block">
            <p className="font-sans text-xs/snug font-medium text-gray-900">
              Avatar
            </p>
            <div className="flex rounded-full bg-emerald-600 justify-center text-white font-sans text-[28px] font-semibold  items-center mt-2 w-20 h-20 ">
              {makeInitials(userData?.signUpFullName)}
            </div>
            <h2 className="font-sans text-xs/snug font-medium text-gray-900 mt-4 mb-2">
              {userData?.signUpFullName}
            </h2>
            <div className="mt-4">
              <h2 className="font-sans text-xs/snug font-medium text-gray-900 mb-2">
                Full Name
              </h2>
              <div className="flex gap-2 px-[11px] items-center border rounded-lg border-gray-200 focus-within:border-blue-500 focus-within:ring focus-within:ring-blue-200">
                <Icons.PersonIcon className="text-[14px] text-gray-800" />
                <input
                  type="text"
                  name=""
                  id=""
                  value={userData?.signUpFullName}
                  className="border-none mr-auto focus:outline-none py-[7px] text-sm w-full font-sans text-gray-800"
                />
              </div>
            </div>
            <div className="mt-4">
              <h2 className="font-sans text-xs/snug font-medium text-gray-900 mb-2">
                Email
              </h2>
              <div className="flex gap-2 px-[11px] items-center border rounded-lg border-gray-200 focus-within:border-blue-500 focus-within:ring focus-within:ring-blue-200">
                <Icons.PersonIcon className="text-[14px] text-gray-800" />
                <input
                  type="email"
                  name=""
                  id=""
                  value={userData?.signUpEmail}
                  className="border-none mr-auto focus:outline-none py-[7px] text-sm font-sans text-gray-800 w-full"
                />
              </div>
            </div>
            <div className="mt-4">
              <h2 className="font-sans text-xs/snug font-medium text-gray-900 mb-2">
                Password
              </h2>
              <div className="flex gap-2 px-[11px] items-center border rounded-lg border-gray-200  focus-within:border-blue-500 focus-within:ring focus-within:ring-blue-200">
                <Icons.PersonIcon className="text-[14px] text-gray-800" />
                <input
                  type="password"
                  name=""
                  id=""
                  value={Password} // Wartość pochodzi ze stanu
                  onChange={(e) => setPassword(e.target.value)} // Aktualizujemy stan przy zmianie wartości
                  className="border-none mr-auto focus:outline-none py-[7px] text-sm font-sans text-gray-800 w-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 2-steps authentication  */}
        <div className="grid gap-x-9 gap-y-6 grid-cols-custom-grid pb-6  border-b border-gray-200 mb-8">
          <div className="flex flex-col gap-y-1">
            <h2 className="font-sans text-sm/snug font-medium text-gray-900">
              Two-factor authentication (2FA)
            </h2>
            <p className="font-sans text-xs/5 text-gray-500">
              Keep your account secure by enabling 2FA via SMS or using a
              temporary one-time passcode (TOTP) from an authenticator app.
            </p>
          </div>
          <div className="block">
            <label className="flex items-center gap-3 cursor-pointer group">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="relative w-6 h-[14px] bg-gray-400 group-hover:bg-gray-500 peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-[10px] rtl:peer-checked:after:-translate-x-[10px] peer-checked:after:border-white after:content-[''] after:absolute after:top-[1px] after:start-[1px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[12px] after:w-[12px] after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <div className="flex-col ">
                <h3 className="font-sans text-sm/snug font-medium text-gray-700">
                  Text Message (SMS)
                </h3>
                <p className="font-sans text-xs/6 text-gray-500">
                  Receive a one-time passcode via SMS each time you log in.
                  <div className="ml-1 inline-flex justify-center items-center py-1 px-[6px] rounded bg-indigo-100 text-indigo-600 font-medium font-sans text-xs/3 ">
                    Business
                  </div>
                </p>
              </div>
            </label>
            <label className="flex items-center gap-3 cursor-pointer group mt-[14px] pt-[14px] border-t border-gray-200">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="relative w-6 h-[14px] bg-gray-400 group-hover:bg-gray-500 peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-[10px] rtl:peer-checked:after:-translate-x-[10px] peer-checked:after:border-white after:content-[''] after:absolute after:top-[1px] after:start-[1px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[12px] after:w-[12px] after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <div className="flex-col ">
                <h3 className="font-sans text-sm/snug font-medium text-gray-700">
                  Authenticator App (TOTP)
                </h3>
                <p className="font-sans text-xs/6 text-gray-500">
                  Use an app to receive a temporary one-time passcode each time
                  you log in.
                </p>
              </div>
            </label>
          </div>
        </div>

        {/* Select color */}
        <div className="grid gap-x-9 gap-y-6 grid-cols-custom-grid pb-6  ">
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
              {/* Lista kolorów */}
              {colors.map((color) => (
                <li key={color}>
                  {/* Przycisk dla każdego koloru */}
                  <button
                    onClick={() => handleColorChange(color)} // Po kliknięciu zmienia kolor
                    className={`flex float-left items-center justify-center rounded-[14px] w-11 h-11 ${
                      activeColor === color
                        ? `border-2 border-${color} cursor-default` // Aktywny kolor, dodajemy obramowanie
                        : "cursor-pointer hover:border-2 hover:border-gray-200" // Inaczej, zmiana kursora i obramowanie przy hover
                    } bg-white`}
                  >
                    {/* Wyświetlamy kolor w przycisku */}
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

        {/* Select color mode */}
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

        {/* Select Contrast*/}
        <div className="grid gap-x-9 gap-y-6 grid-cols-custom-grid pb-6 border-b border-gray-200 mb-8">
          <div className="flex flex-col gap-y-1">
            <h2 className="font-sans text-sm/snug font-medium text-gray-900">
              Contrast
            </h2>
            <p className="font-sans text-xs/6 text-gray-500">
              Turn on and off high contrast text and borders.
            </p>
          </div>
          <div className="block">
            <label className="flex h-full items-center gap-3 cursor-pointer group">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="relative w-6 h-[14px] bg-gray-400 group-hover:bg-gray-500 peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-[10px] rtl:peer-checked:after:-translate-x-[10px] peer-checked:after:border-white after:content-[''] after:absolute after:top-[1px] after:start-[1px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[12px] after:w-[12px] after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <div className="flex-col ">
                <p className="font-sans text-sm/snug text-gray-600">
                  High Contrast for increased accessibility
                </p>
              </div>
            </label>
          </div>
        </div>

        {/* Select  Language & Region*/}
        <div className="grid gap-x-9 gap-y-6 grid-cols-custom-grid pb-6  border-b border-gray-200 mb-8">
          <div className="flex flex-col gap-y-1">
            <h2 className="font-sans text-sm/snug font-medium text-gray-900">
              Language & Region
            </h2>
            <p className="font-sans text-xs/6 text-gray-500">
              Customize your language and region.
            </p>
          </div>
          <div className="block">
            <div className="">
              <h2 className="font-sans text-xs/snug font-medium text-gray-900 mb-2">
                Language
              </h2>
              <div className="flex gap-2 px-[11px] items-center border rounded-lg border-gray-200 focus-within:border-blue-500 focus-within:ring focus-within:ring-blue-200">
                <Icons.PersonIcon className="text-[14px] text-gray-800" />
                <select className="block appearance-none w-full bg-white text-sm font-sans text-gray-800 hover:border-gray-500 px-4 py-2 leading-tight focus:outline-none focus:shadow-outline">
                  <option>English</option>
                  <option>Français</option>
                  <option>Español (España)</option>
                  <option>Español (Latinoamérica)</option>
                  <option>Português (Brasil)</option>
                  <option>Deutsch</option>
                  <option>Italiano</option>
                </select>
                <Icons.ArrowDownIcon className="text-[14px] text-gray-800" />
              </div>
            </div>
            <div className="mt-4">
              <h2 className="font-sans text-xs/snug font-medium text-gray-900 mb-2">
                Timezone
              </h2>
              <div className="flex gap-2 px-[11px] items-center border rounded-lg border-gray-200 focus-within:border-blue-500 focus-within:ring focus-within:ring-blue-200">
                <Icons.PersonIcon className="text-[14px] text-gray-800" />
                <select className="block appearance-none w-full bg-white text-sm font-sans text-gray-800 hover:border-gray-500 px-4 py-2 leading-tight focus:outline-none focus:shadow-outline">
                  <option>Europe Poland</option>
                </select>
                <Icons.ArrowDownIcon className="text-[14px] text-gray-800" />
              </div>
            </div>
          </div>
        </div>

        {/* Select Time & Date format */}
        <div className="grid gap-x-9 gap-y-6 grid-cols-custom-grid pb-6 border-b border-gray-200 mb-8">
          <div className="flex flex-col gap-y-1">
            <h2 className="font-sans text-sm/snug font-medium text-gray-900">
              Time & Date format
            </h2>
            <p className="font-sans text-xs/6 text-gray-500">
              Select the way times & dates are displayed.
            </p>
          </div>
          <div className="block">
            {renderRadioButtons(
              "Start of the calendar week",
              options.weekStart,
              selectedWeekStart,
              setSelectedWeekStart
            )}
            {renderRadioButtons(
              "Time format",
              options.timeFormat,
              selectedTimeFormat,
              setSelectedTimeFormat
            )}
            {renderRadioButtons(
              "Date format",
              options.dateFormat,
              selectedDateFormat,
              setSelectedDateFormat
            )}
          </div>
        </div>

        {/* Select Preferences*/}
        <div className="grid gap-x-9 gap-y-6 grid-cols-custom-grid pb-6 border-b border-gray-200 mb-8">
          <div className="flex flex-col gap-y-1">
            <h2 className="font-sans text-sm/snug font-medium text-gray-900">
              Preferences
            </h2>
            <p className="font-sans text-xs/6 text-gray-500">
              Manage your in-app preferences.
            </p>
          </div>
          <div className="block">
            <label className="static flex items-center gap-3 cursor-pointer group">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="relative w-6 h-[14px] bg-gray-400 group-hover:bg-gray-500 peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-[10px] rtl:peer-checked:after:-translate-x-[10px] peer-checked:after:border-white after:content-[''] after:absolute after:top-[1px] after:start-[1px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[12px] after:w-[12px] after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <div className="flex-col ">
                <h3 className="font-sans text-sm/snug font-medium text-gray-700">
                  Flyout Toast Message
                </h3>
                <p className="font-sans text-xs/6 text-gray-500">
                  When performing actions, toast messages may appear in the
                  bottom left-hand of your screen. You can disable that here.
                </p>
              </div>
            </label>
            <label className="static flex items-center gap-3 cursor-pointer group mt-[14px] pt-[14px] border-t border-gray-200">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="relative w-6 h-[14px] bg-gray-400 group-hover:bg-gray-500 peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-[10px] rtl:peer-checked:after:-translate-x-[10px] peer-checked:after:border-white after:content-[''] after:absolute after:top-[1px] after:start-[1px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[12px] after:w-[12px] after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <div className="flex-col ">
                <h3 className="font-sans text-sm/snug font-medium text-gray-700">
                  Dont post comments with Enter
                </h3>
                <p className="font-sans text-xs/6 text-gray-500">
                  Use Ctrl + Enter to send comments instead of just Enter.
                </p>
              </div>
            </label>
            <label className=" static flex items-center gap-3 cursor-pointer group mt-[14px] pt-[14px] border-t border-gray-200">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="relative w-6 h-[14px] bg-gray-400 group-hover:bg-gray-500 peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-[10px] rtl:peer-checked:after:-translate-x-[10px] peer-checked:after:border-white after:content-[''] after:absolute after:top-[1px] after:start-[1px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[12px] after:w-[12px] after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <div className="flex-col ">
                <h3 className="font-sans text-sm/snug font-medium text-gray-700">
                  Keyboard Shortcuts
                </h3>
                <p className="font-sans text-xs/6 text-gray-500">
                  Use keyboard shortcuts to quickly navigate and take action
                  through ClickUp without using your mouse.
                </p>
              </div>
            </label>
            <label className=" static flex items-center gap-3 cursor-pointer group mt-[14px] pt-[14px] border-t border-gray-200">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="relative w-6 h-[14px] bg-gray-400 group-hover:bg-gray-500 peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-[10px] rtl:peer-checked:after:-translate-x-[10px] peer-checked:after:border-white after:content-[''] after:absolute after:top-[1px] after:start-[1px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[12px] after:w-[12px] after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <div className="flex-col ">
                <h3 className="font-sans text-sm/snug font-medium text-gray-700">
                  Markdown
                </h3>
                <p className="font-sans text-xs/6 text-gray-500">
                  You can disable Markdown (shortcuts when typing) by turning it
                  off here.
                </p>
              </div>
            </label>
            <label className=" static flex items-center gap-3 cursor-pointer group mt-[14px] pt-[14px] border-t border-gray-200">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="relative w-6 h-[14px] bg-gray-400 group-hover:bg-gray-500 peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-[10px] rtl:peer-checked:after:-translate-x-[10px] peer-checked:after:border-white after:content-[''] after:absolute after:top-[1px] after:start-[1px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[12px] after:w-[12px] after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <div className="flex-col ">
                <h3 className="font-sans text-sm/snug font-medium text-gray-700">
                  Show quotes
                </h3>
                <p className="font-sans text-xs/6 text-gray-500">
                  Show celebratory quotes when you clear all your notifications
                  or load certain pages
                </p>
              </div>
            </label>
            <label className=" static flex items-center gap-3 cursor-pointer group mt-[14px] pt-[14px] border-t border-gray-200">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="relative w-6 h-[14px] bg-gray-400 group-hover:bg-gray-500 peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-[10px] rtl:peer-checked:after:-translate-x-[10px] peer-checked:after:border-white after:content-[''] after:absolute after:top-[1px] after:start-[1px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[12px] after:w-[12px] after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <div className="flex-col ">
                <h3 className="font-sans text-sm/snug font-medium text-gray-700">
                  Show Celebrations
                </h3>
                <p className="font-sans text-xs/6 text-gray-500">
                  Show confetti celebrations when you clear My Work, clear all
                  notifications, or complete a Goal Target.
                </p>
              </div>
            </label>
            <label className="static flex items-center gap-3 cursor-pointer group mt-[14px] pt-[14px] border-t border-gray-200">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="relative w-6 h-[14px] bg-gray-400 group-hover:bg-gray-500 peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-[10px] rtl:peer-checked:after:-translate-x-[10px] peer-checked:after:border-white after:content-[''] after:absolute after:top-[1px] after:start-[1px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[12px] after:w-[12px] after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <div className="flex-col ">
                <h3 className="font-sans text-sm/snug font-medium text-gray-700">
                  Sync data for offline mode
                </h3>
                <p className="font-sans text-xs/6 text-gray-500">
                  Sync tasks data in background to be able to view tasks in
                  offline mode .
                </p>
              </div>
            </label>
            <label className="static flex items-center gap-3 cursor-pointer group mt-[14px] pt-[14px] border-t border-gray-200">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="relative w-6 h-[14px] bg-gray-400 group-hover:bg-gray-500 peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-[10px] rtl:peer-checked:after:-translate-x-[10px] peer-checked:after:border-white after:content-[''] after:absolute after:top-[1px] after:start-[1px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[12px] after:w-[12px] after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <div className="flex-col ">
                <h3 className="font-sans text-sm/snug font-medium text-gray-700">
                  ClickUp Verified
                </h3>
                <p className="font-sans text-xs/6 text-gray-500">
                  You can disable your ClickUp Verified checkmark.
                </p>
              </div>
            </label>
            <label className="static flex items-center gap-3 cursor-pointer group mt-[14px] pt-[14px] border-t border-gray-200">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="relative w-6 h-[14px] bg-gray-400 group-hover:bg-gray-500 peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-[10px] rtl:peer-checked:after:-translate-x-[10px] peer-checked:after:border-white after:content-[''] after:absolute after:top-[1px] after:start-[1px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[12px] after:w-[12px] after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <div className="flex-col ">
                <h3 className="font-sans text-sm/snug font-medium text-gray-700">
                  You can disable your ClickUp Verified checkmark.
                </h3>
                <p className="font-sans text-xs/6 text-gray-500">
                  Pasted URLs will appear as plain text hyperlinks. This will
                  disable auto-unfurling hyperlinks such as embeds or bookmarks
                </p>
              </div>
            </label>
            <label className="static flex items-center gap-3 cursor-pointer group mt-[14px] pt-[14px] border-t border-gray-200">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="relative w-6 h-[14px] bg-gray-400 group-hover:bg-gray-500 peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-[10px] rtl:peer-checked:after:-translate-x-[10px] peer-checked:after:border-white after:content-[''] after:absolute after:top-[1px] after:start-[1px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[12px] after:w-[12px] after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <div className="flex-col ">
                <h3 className="font-sans text-sm/snug font-medium text-gray-700">
                  Disable animations
                </h3>
                <p className="font-sans text-xs/6 text-gray-500">
                  Disable animations to get better performance.
                </p>
              </div>
            </label>
            <label className="static flex items-center gap-3 cursor-pointer group mt-[14px] pt-[14px] border-t border-gray-200">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="relative w-6 h-[14px] bg-gray-400 group-hover:bg-gray-500 peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-[10px] rtl:peer-checked:after:-translate-x-[10px] peer-checked:after:border-white after:content-[''] after:absolute after:top-[1px] after:start-[1px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[12px] after:w-[12px] after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <div className="flex-col ">
                <h3 className="font-sans text-sm/snug font-medium text-gray-700">
                  Detect Desktop App
                </h3>
                <p className="font-sans text-xs/6 text-gray-500">
                  Automatically open links in the desktop app when its running.
                </p>
              </div>
            </label>
          </div>
        </div>

        {/* Select Danger zone */}
        <div className="grid gap-x-9 gap-y-6 grid-cols-custom-grid pb-6">
          <div className="flex flex-col gap-y-1">
            <h2 className="font-sans text-sm/snug font-medium text-gray-900">
              Danger zone
            </h2>
            <p className="font-sans text-xs/6 text-gray-500">
              Proceed with caution.
            </p>
          </div>
          <div className="block">
            <div className="flex justify-between">
              <div className="font-sans text-sm/snug text-gray-700">
                Log out all sessions including any session on mobile, iPad, and
                other browsers
              </div>
              <div className="flex flex-col items-end">
                <button
                  className="px-[11px] w-auto border h-8 mb-3 rounded-md border-gray-200 font-sans text-sm/snug font-medium text-gray-700"
                  onClick={handleLogout} // Wywołanie funkcji wylogowania po kliknięciu
                >
                  Log out of all sessions
                </button>
                <button className="px-[11px] max-w-fit border h-8 rounded-md bg-red-600 font-sans text-sm/snug font-medium text-white">
                  Delete account
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* section save */}
        <div className="sticky bottom-0 flex justify-end  w-auto pl-12 py-3 border-t border-gray-200 bg-white">
          <button className="px-[11px] max-w-fit border h-10 rounded-md bg-blue-600 font-sans text-sm/snug font-medium text-white">
            Save changes
          </button>
        </div>
      </div>
    </>
  );
}
