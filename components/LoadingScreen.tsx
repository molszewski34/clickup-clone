import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import Image from "next/image";
import logo from "@/public/big_logo.svg";

type LoadingScreenProps = {
  isLoading: boolean;
};

export const LoadingScreen = ({ isLoading }: LoadingScreenProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      setIsVisible(false);
      setTimeout(() => setShouldRender(false), 1000);
    }
  }, [isLoading]);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center w-screen h-screen bg-white transition-opacity duration-1000
        ${isVisible ? "opacity-100" : "opacity-0"} z-50`}>
      <div className="flex flex-row items-center gap-4">
        <Image src={logo} alt="demo logo"></Image>
        <p className="font-semibold self-end text-gray-700">Loading your content</p>
        <div className="w-2 h-2">
          <Loader></Loader>
        </div>
      </div>
    </div>
  );
};
