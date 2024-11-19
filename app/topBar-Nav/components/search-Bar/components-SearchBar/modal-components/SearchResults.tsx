"use client";

import { useState, useEffect } from "react";
import ButtonAiResults from "./button/ButtonAiResults";
import ButtonAttach from "./button/ButtonAttach";
import ButtonEnter from "./button/ButtonEnter";
import ButtonNewTab from "./button/ButtonNewTab";
import IconDashboard from "./icon/IconDashboard";
import IconDoc from "./icon/IconDoc";
import IconWhiteboard from "./icon/IconWhiteboard"; // Zaimportuj nową ikonę
import ButtonTab from "./button/ButtonTab";

// Mapa typów na odpowiednie ikony
const iconMap = {
  Doc: IconDoc,
  Dashboard: IconDashboard,
  Whiteboard: IconWhiteboard,
};

export default function SearchResults() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fakeData = [
      {
        title: "Project 1",
        type: "Doc",
        space: "Team Space",
        category: "Marketing",
        updated: "2 days ago",
      },
      {
        title: "Dashboard",
        type: "Dashboard",
        space: "Personal",
        category: "Finance",
        updated: "5 days ago",
      },
      {
        title: "Dashboard",
        type: "Whiteboard",
        space: "Team Space",
        category: "Design",
        updated: "1 week ago",
      },
    ];

    setTimeout(() => {
      setData(fakeData);
      setLoading(false);
    }, 500);
  }, []);

  if (loading)
    return (
      <div className="w-100 h-8 text-center text-base font-sans font-medium text-gray-600 pr-3">
        Loading...
      </div>
    );

  return (
    <>
      {data.map((item, index) => {
        const Icon = iconMap[item.type];
        return (
          <div key={index} className="flex items-center group">
            <div className="flex items-center justify-between w-full hover:bg-gray-100">
              <button className="flex items-center w-full ">
                {Icon && <Icon />}
                <div className="flex-row font-sans">
                  <div className="text-sm text-gray-900 font-medium text-left">
                    {item.title}
                  </div>
                  <div className="flex gap-1 w-auto text-xs text-gray-600">
                    <span>{item.type}</span>
                    <span>&#8226;</span>
                    <span>{item.space}</span>
                    <span>/</span>
                    <span>{item.category}</span>
                    <span>&#8226;</span>
                    <span>{item.updated}</span>
                  </div>
                </div>
              </button>
              <div className="flex gap-2 pr-3 w-auto opacity-0 group-hover:opacity-100">
                {item.type === "Doc" ? <ButtonAiResults /> : <ButtonTab />}
                <ButtonAttach />
                <ButtonNewTab />
                <ButtonEnter />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
