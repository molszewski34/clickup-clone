"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/db/firebase/lib/firebase";
import { useUsersUpdateUser } from "@/hooks/useUsersUpdateUser";

interface UserContextProps {
  userId: string;
  setUserId: (id: string) => void;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userId, setUserId] = useState<string>("");
  const [lastUpdate, setLastUpdate] = useState<number>(0);
  const { mutate } = useUsersUpdateUser();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    document.addEventListener("click", updateLastActive);

    return () => document.removeEventListener("click", updateLastActive);
  });

  const LAST_ACTIVE_INTERVAL = 5 * 60 * 1000;

  function updateLastActive() {
    const now = Date.now();
    const user = auth.currentUser;

    if (user && now - lastUpdate >= LAST_ACTIVE_INTERVAL) {
      mutate({ userId, userLastActive: new Date() });
      setLastUpdate(Date.now());
    } else return;
  }

  return <UserContext.Provider value={{ userId, setUserId }}>{children}</UserContext.Provider>;
};

export const useUser = (): UserContextProps => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
