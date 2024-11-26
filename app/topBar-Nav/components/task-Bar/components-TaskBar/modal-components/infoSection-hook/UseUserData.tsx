import { useState, useEffect } from "react";

// Custom hook to fetch user data (in this case, email) with a simulated delay
export function UseUserData() {
  // State to hold the email and loading status
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);

  // Simulate data fetching with a timeout
  useEffect(() => {
    setTimeout(() => {
      setEmail("jakub.king@example.com"); // Set email after a 1-second delay
      setLoading(false); // Update loading state after data is fetched
    }, 1000);
  }, []); // Empty dependency array to run only once when the component mounts

  // Return the fetched email and loading state
  return { email, loading };
}
