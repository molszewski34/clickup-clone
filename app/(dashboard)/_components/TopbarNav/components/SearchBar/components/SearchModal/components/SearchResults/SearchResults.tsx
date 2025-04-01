"use client";
import SearchResultItem from "./components/SearchResultItem";
import {
  IconMap,
  SearchResult,
} from "@/app/(dashboard)/_components/TopbarNav/components/type";
import IconDoc from "@/app/(dashboard)/_components/TopbarNav/components/icon/IconDoc";
import IconDashboard from "@/app/(dashboard)/_components/TopbarNav/components/icon/IconDashboard";
import IconWhiteboard from "@/app/(dashboard)/_components/TopbarNav/components/icon/IconWhiteboard";
import { Icons } from "@/icons/icons";

const iconMap: IconMap = {
  Doc: IconDoc,
  Dashboard: IconDashboard,
  Whiteboard: IconWhiteboard,
  Task: Icons.IoCheckmarkCircle,
  Workspace: Icons.TeableIcon,
  Project: Icons.Folder,
  List: Icons.ListOutline,
};
export default function SearchResults({
  results,
}: {
  results: SearchResult[];
}) {
  return (
    <>
      <div className="flex flex-col px-4">
        {results?.length > 0 ? (
          results.map((result) => (
            <div key={result.id} className="py-2 border-b border-gray-200">
              <SearchResultItem
                key={result.id}
                item={result}
                iconMap={iconMap}
              />
              <div className="font-medium text-gray-800">{result.type}</div>
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
