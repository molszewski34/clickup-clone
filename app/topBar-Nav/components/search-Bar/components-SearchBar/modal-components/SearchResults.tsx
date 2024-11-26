"use client";

import { useState, useEffect } from "react";
import { SearchResult, IconMap } from "../../../type"; // Importing types for search results and icon map
import SearchResultItem from "./searchResult-components/SearchResultItem"; // Component to display each search result
import IconDoc from "../../../icon/IconDoc"; // Icon for documents
import IconDashboard from "../../../icon/IconDashboard"; // Icon for dashboards
import IconWhiteboard from "../../../icon/IconWhiteboard"; // Icon for whiteboards

// Mapping of result types to corresponding icons
const iconMap: IconMap = {
  Doc: IconDoc,
  Dashboard: IconDashboard,
  Whiteboard: IconWhiteboard,
};

export default function SearchResults() {
  const [data, setData] = useState<SearchResult[]>([]); // State to store search results
  const [loading, setLoading] = useState(true); // State to track loading status

  useEffect(() => {
    // Simulating an API response with fake data
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
      setData(fakeData); // Set fake data after delay
      setLoading(false); // Set loading to false once data is fetched
    }, 500);
  }, []); // Runs once after the component mounts

  if (loading) {
    return (
      <div className="w-100 h-8 text-center text-base font-sans font-medium text-gray-600 pr-3">
        Loading...
      </div>
    );
  }

  // Map over the data and render SearchResultItem for each item
  return (
    <>
      {data.map((item, index) => (
        <SearchResultItem key={index} item={item} iconMap={iconMap} />
      ))}
    </>
  );
}
