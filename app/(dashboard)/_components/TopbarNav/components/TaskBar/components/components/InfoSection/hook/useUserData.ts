import { useState, useEffect } from "react";

export function UseUserData() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setEmail("jakub.king@example.com");
      setLoading(false);
    }, 1000);
  }, []);

  return { email, loading };
}
