export const handleDateClick = (
  day: number | undefined,
  selectedDate: Date,
  setSelectedDate: (date: Date) => void,
  setShowCalendar: (show: boolean) => void
) => {
  const newDate = new Date(
    selectedDate.getFullYear(),
    selectedDate.getMonth(),
    day
  );
  setSelectedDate(newDate);
  setShowCalendar(false);
};

export const handleMonthChange = (
  offset: number,
  selectedDate: Date,
  setSelectedDate: (date: Date) => void
) => {
  const newDate = new Date(
    selectedDate.setMonth(selectedDate.getMonth() + offset)
  );
  setSelectedDate(new Date(newDate)); // Ensure it's a new Date instance for proper re-render
};

export const handleTodayClick = (setSelectedDate: (date: Date) => void) => {
  setSelectedDate(new Date());
};

export const handleDayChange = (
  offset: number,
  selectedDate: Date,
  setSelectedDate: (date: Date) => void
) => {
  const newDate = new Date(
    selectedDate.setDate(selectedDate.getDate() + offset)
  );
  setSelectedDate(new Date(newDate));
};
