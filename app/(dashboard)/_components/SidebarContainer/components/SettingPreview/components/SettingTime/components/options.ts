type Option = {
  id: string;
  label: string;
};

type Options = {
  weekStart: Option[];
  timeFormat: Option[];
  dateFormat: Option[];
};

export const options: Options = {
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
