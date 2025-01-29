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

interface SearchResultsProps {
  results: {
    id: string;
    type: string;
    name: string;
    description?: string;
  }[];
}
export default function SearchResults({ results }: SearchResultsProps) {

  // const fakeData: SearchResult[] = [
  //   {
  //     title: "Project 1",
  //     type: "Doc",
  //     space: "Team Space",
  //     category: "Marketing",
  //     updated: "2 days ago",
  //   },
  //   {
  //     title: "Dashboard",
  //     type: "Dashboard",
  //     space: "Personal",
  //     category: "Finance",
  //     updated: "5 days ago",
  //   },
  //   {
  //     title: "Whiteboard",
  //     type: "Whiteboard",
  //     space: "Team Space",
  //     category: "Design",
  //     updated: "1 week ago",
  //   },
  // ];
  return (
    <>
      <div className="flex flex-col px-4">
        {results.length > 0 ? (
          results.map((result) => (
            <div key={result.id} className="py-2 border-b border-gray-200">
              <div className="font-medium text-gray-800">{result.name}</div>
              <div className="text-sm text-gray-600">{result.description}</div>
            </div>
          ))
        ) : (
          <div className="text-gray-500">No results found</div>
        )}
      </div>
    </>
  );
}
