"use client";
import { useState, useEffect } from "react";
import SearchResultItem from "./components/SearchResultItem";
import {
  IconMap,
  SearchResult,
} from "@/app/(dashboard)/_components/TopbarNav/components/type";
import IconDoc from "@/app/(dashboard)/_components/TopbarNav/components/icon/IconDoc";
import IconDashboard from "@/app/(dashboard)/_components/TopbarNav/components/icon/IconDashboard";
import IconWhiteboard from "@/app/(dashboard)/_components/TopbarNav/components/icon/IconWhiteboard";

const iconMap: IconMap = {
  Doc: IconDoc,
  Dashboard: IconDashboard,
  Whiteboard: IconWhiteboard,
};

export default function SearchResults() {
  const [data, setData] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fakeData: SearchResult[] = [
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
        title: "Whiteboard",
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

  if (loading) {
    return (
      <div className="w-100 h-8 text-center text-base font-sans font-medium text-gray-600 pr-3">
        Loading...
      </div>
    );
  }
  return (
    <>
      {data.map((item, index) => (
        <SearchResultItem key={index} item={item} iconMap={iconMap} />
      ))}
    </>
  );
}
