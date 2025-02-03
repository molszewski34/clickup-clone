"use client";
// import { useState, useEffect } from "react";
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

  return (
    <>
      <div className="flex flex-col px-4">
        {results.length > 0 ? (
          results.map((result) => (
            <div key={result.id} className="py-2 border-b border-gray-200">
              <SearchResultItem key={result.id} item={result} iconMap={iconMap}/>
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
