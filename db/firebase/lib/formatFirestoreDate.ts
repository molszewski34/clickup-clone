import { Timestamp } from "firebase/firestore";

export const formatFirestoreDate = (
  timestamp: Timestamp | { seconds: number } | null | undefined,
  locale = "en-US",
  options: { year?: boolean; month?: boolean; day?: boolean } = {}
): string => {
  if (!timestamp) return "unknown date";

  const date =
    timestamp instanceof Timestamp
      ? timestamp.toDate()
      : new Date(timestamp.seconds * 1000);

  const dateOptions: Intl.DateTimeFormatOptions = {};

  if (options.year) dateOptions.year = "numeric";
  if (options.month) dateOptions.month = "short";
  if (options.day) dateOptions.day = "numeric";

  return date.toLocaleDateString(locale, dateOptions);
};
