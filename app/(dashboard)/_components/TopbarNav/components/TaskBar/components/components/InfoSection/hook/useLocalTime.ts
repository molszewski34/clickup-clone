import { useState, useEffect } from "react";

export function UseLocalTime() {
  const [localTime, setLocalTime] = useState("");

  const getLocalTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  useEffect(() => {
    setLocalTime(getLocalTime());

    const intervalId = setInterval(() => setLocalTime(getLocalTime()), 60000);

    return () => clearInterval(intervalId);
  }, []);

  return localTime;
}
