import { useState, useEffect } from "react";

// Custom hook to get the local time and update it every minute
export function UseLocalTime() {
  // State to store the local time
  const [localTime, setLocalTime] = useState("");

  // Function to get the current local time in HH:MM format
  const getLocalTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0"); // Get hours and format with leading zero if needed
    const minutes = now.getMinutes().toString().padStart(2, "0"); // Get minutes and format similarly
    return `${hours}:${minutes}`; // Return time in HH:MM format
  };

  // useEffect hook to set the local time initially and update it every minute
  useEffect(() => {
    setLocalTime(getLocalTime()); // Set the initial local time when the component mounts

    // Set up an interval to update the local time every 60 seconds (60000 ms)
    const intervalId = setInterval(() => setLocalTime(getLocalTime()), 60000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means this effect runs once when the component mounts

  // Return the current local time
  return localTime;
}
