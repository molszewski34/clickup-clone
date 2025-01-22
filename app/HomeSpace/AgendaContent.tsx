import { useState } from "react";
import { Icons } from "@/icons/icons";
import AgendaIMG from "../img/empty-agenda.svg";
import CardContainer from "./Components/CardContainer";
import {
  handleDateClick,
  handleDayChange,
  handleMonthChange,
  handleTodayClick,
} from "./Components/ComponentsAgendaContent/dateFunctions";
import EmptyCardContent from "./Components/EmptyCardContetnt";

export default function AgendaContent() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);

  const daysInMonth = (year: number, month: number): number =>
    new Date(year, month + 1, 0).getDate();
  const startDay = (year: number, month: number): number =>
    new Date(year, month, 1).getDay();
  const createDaysArray = (days: number): number[] =>
    Array.from({ length: days }, (_, i) => i + 1);

  const renderCalendar = () => {
    const daysArray = createDaysArray(
      daysInMonth(selectedDate.getFullYear(), selectedDate.getMonth())
    );
    const emptyDays = Array.from({
      length: startDay(selectedDate.getFullYear(), selectedDate.getMonth()),
    }).map((_, i) => <div key={`empty-${i}`} />);

    return (
      <div className="grid grid-cols-7 gap-1">
        {emptyDays}
        {daysArray.map((day) => (
          <button
            key={day}
            onClick={() =>
              handleDateClick(
                day,
                selectedDate,
                setSelectedDate,
                setShowCalendar
              )
            }
            className={`flex justify-center items-center rounded p-1 hover:bg-gray-200 font-sans w-7 h-7 text-xs focus:outline-none ${
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
    <CardContainer title="Agenda" NumberIcons={2} height="336px">
      <div className="relative mx-4 mr-5 border-b border-gray-200">
        <div className="flex w-full justify-between gap-1 mb-2">
          <div className="flex items-center gap-1">
            <button
              className="font-sans text-sm text-gray-600 hover:text-blue-700"
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
              onClick={() => handleDayChange(-1, selectedDate, setSelectedDate)}
            >
              <Icons.ArrowForward className="rotate-180 w-4 h-4 text-gray-600" />
            </button>
            <button
              className="flex justify-center items-center w-6 h-6 hover:bg-gray-100 rounded-md"
              onClick={() => handleDayChange(1, selectedDate, setSelectedDate)}
            >
              <Icons.ArrowForward className="w-4 h-4 text-gray-600" />
            </button>
          </div>
          <div className="flex items-center justify-center gap-1">
            <button
              className="h-6 font-sans px-2 text-xs text-gray-600 font-medium hover:bg-gray-100 rounded-md"
              onClick={() => handleTodayClick(setSelectedDate)}
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
                onClick={() =>
                  handleMonthChange(-1, selectedDate, setSelectedDate)
                }
              >
                <Icons.ArrowForward className="rotate-180 w-4 h-4 text-gray-500" />
              </button>
              <span className="text-base font-sans text-gray-500 font-semibold">
                {selectedDate.toLocaleDateString("en-US", { month: "long" })}{" "}
                {selectedDate.getFullYear()}
              </span>
              <button
                className="flex justify-center items-center w-6 h-6 hover:bg-gray-100 rounded-md"
                onClick={() =>
                  handleMonthChange(1, selectedDate, setSelectedDate)
                }
              >
                <Icons.ArrowForward className="w-4 h-4 text-gray-500" />
              </button>
            </div>
            {renderCalendar()}
          </div>
        )}
      </div>
      <EmptyCardContent
        imageSrc={AgendaIMG}
        description="Agenda items from your calendars will show here."
        buttonText="Add calendar integrations"
        height="258px"
      />
    </CardContainer>
  );
}
