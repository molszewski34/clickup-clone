import { useState } from "react";
import { Icons } from "@/icons/icons";
import Image from "next/image";
import AgendaIMG from "../img/empty-agenda.svg";

export default function AgendaContent() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);

  const handleDateClick = (day: number | undefined) => {
    const newDate = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      day
    );
    setSelectedDate(newDate);
    setShowCalendar(false);
  };

  const handleMonthChange = (offset: number) => {
    const newDate = new Date(
      selectedDate.setMonth(selectedDate.getMonth() + offset)
    );
    setSelectedDate(new Date(newDate)); // Ensure it's a new Date instance for proper re-render
  };

  const handleTodayClick = () => {
    setSelectedDate(new Date());
  };

  const handleDayChange = (offset: number) => {
    const newDate = new Date(
      selectedDate.setDate(selectedDate.getDate() + offset)
    );
    setSelectedDate(new Date(newDate));
  };

  const renderCalendar = () => {
    const daysInMonth = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth() + 1,
      0
    ).getDate();
    const startDay = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      1
    ).getDay();
    const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    return (
      <div className="grid grid-cols-7 gap-1">
        {Array.from({ length: startDay }).map((_, i) => (
          <div key={`empty-${i}`} />
        ))}
        {daysArray.map((day) => (
          <button
            key={day}
            onClick={() => handleDateClick(day)}
            className={` flex justify-center items-center rounded p-1 hover:bg-gray-200 font-sans w-7 h-7 text-xs focus:outline-none ${
              selectedDate.getDate() === day ? "bg-blue-200" : ""
            }`}
          >
            {day}
          </button>
        ))}
      </div>
    );
  };

  return (
    <>
      <div className="h-[336px] border border-gray-200 rounded-xl hover:border-gray-400 overflow-hidden group">
        <div className="flex items-center justify-between pb-2 mt-3 px-4 font-sans font-semibold text-base text-gray-950">
          <div className="flex items-center gap-2">
            <span>Agenda</span>
          </div>
          <div className="hidden gap-1 group-hover:flex">
            <button className="flex justify-center items-center w-6 h-6 rounded-md hover:bg-gray-100">
              <Icons.FullScreen className="text-[14px] text-gray-600" />
            </button>
            <button className="flex justify-center items-center w-6 h-6 rounded-md hover:bg-gray-100">
              <Icons.ThreeDotsIcon className="text-[14px] text-gray-600" />
            </button>
          </div>
        </div>
        <div className="relative mx-4 mr-5 border-b border-gray-200">
          <div className="flex w-full justify-between gap-1 mb-2 ">
            <div className="flex items-center gap-1">
              <button
                className=" font-sans text-sm text-gray-600 hover:text-blue-700"
                onClick={() => setShowCalendar(!showCalendar)}
              >
                {selectedDate
                  .toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    weekday: "short",
                  })
                  .replace(/(\w+), (\w+ \d+)/, "$2, $1")}
              </button>
              <button
                className="flex justify-center items-center w-6 h-6 hover:bg-gray-100 rounded-md"
                onClick={() => handleDayChange(-1)}
              >
                <Icons.ArrowForward className="rotate-180 w-4 h-4 text-gray-600" />
              </button>
              <button
                className="flex justify-center items-center w-6 h-6 hover:bg-gray-100 rounded-md"
                onClick={() => handleDayChange(1)}
              >
                <Icons.ArrowForward className=" w-4 h-4 text-gray-600" />
              </button>
            </div>
            <div className="flex items-center justify-center gap-1">
              <button
                className=" h-6 font-sans px-2 text-xs text-gray-600 font-medium hover:bg-gray-100 rounded-md"
                onClick={handleTodayClick}
              >
                Today
              </button>
              <button className="w-6 h-6 px-1 flex items-center justify-center hover:bg-gray-100 rounded-md">
                <Icons.CalendarIcon className="w-[14] h-[14] text-gray-600" />
              </button>
            </div>
          </div>

          {showCalendar && (
            <div className="absolute top-10 bg-white border rounded-md shadow-lg p-4 z-10">
              <div className="flex items-center justify-between mb-2">
                <button
                  className="flex justify-center items-center w-6 h-6 hover:bg-gray-100 rounded-md"
                  onClick={() => handleMonthChange(-1)}
                >
                  <Icons.ArrowForward className="rotate-180 w-4 h-4 text-gray-500" />
                </button>
                <span className=" text-base font-sans text-gray-500 font-semibold">
                  {selectedDate.toLocaleDateString("en-US", { month: "long" })}{" "}
                  {selectedDate.getFullYear()}
                </span>

                <button
                  className="flex justify-center items-center w-6 h-6 hover:bg-gray-100 rounded-md"
                  onClick={() => handleMonthChange(1)}
                >
                  <Icons.ArrowForward className=" w-4 h-4 text-gray-500" />
                </button>
              </div>
              {renderCalendar()}
            </div>
          )}
        </div>
        <div className="w-full h-[258px] pb-4 custom-scrollbar overflow-y-auto overflow-x-hidden">
          <div className="flex flex-col items-center h-full justify-center">
            <Image src={AgendaIMG} alt="Agenda Grafic" height={80} width={80} />
            <span className="flex gap-1 font-sans text-xs text-gray-600">
              Agenda items from your calendars will show here.
              <span className="text-blue-700">Learn more</span>
            </span>
            <button className="flex items-center mt-4 gap-1 rounded-md px-2 py-[6px] text-xs bg-blue-700 text-white  font-semibold">
              <Icons.PlusNew className="text-[14px] text-white" />
              Add calendar integrations
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
