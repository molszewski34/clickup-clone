export interface Section {
  name: string;
  key: "today" | "overdue" | "next" | "unscheduled";
  iconCount: number;
  message: string;
}

export const sections: Section[] = [
  {
    name: "Today",
    key: "today",
    iconCount: 0,
    message: "Tasks and reminders assigned to you will show here.",
  },
  {
    name: "Overdue",
    key: "overdue",
    iconCount: 0,
    message: "No overdue tasks or reminders scheduled.",
  },
  {
    name: "Next",
    key: "next",
    iconCount: 0,
    message: "No upcoming tasks or reminders scheduled.",
  },
  {
    name: "Unscheduled",
    key: "unscheduled",
    iconCount: 0,
    message: "No unscheduled tasks or reminders scheduled.",
  },
];
