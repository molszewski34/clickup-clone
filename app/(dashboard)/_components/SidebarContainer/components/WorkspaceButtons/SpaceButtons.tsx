"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { useData } from "@/context/DataProvider/DataProvider";
import { useUser } from "@/context/DataProvider/UserDataProvider";
import useSpacesQuery from "@/hooks/useSpacesQuery";
import { useListQuery } from "@/hooks/useListQuery";
import { ListElement } from "./components/ListElement";
import { SpaceElements } from "./components/SpaceElements";
import useGetCurrentWorkspace from "@/hooks/useGetCurrentWorkspace";

const SpaceButtons = ({ width }: { width: number }) => {
  const router = useRouter();
  const spaceQueryResult = useSpacesQuery();
  const spaces = spaceQueryResult.data || [];
  const [activeSpace, setActiveSpace] = useState<string | null>(null);
  const [activeList, setActiveList] = useState<string | null>(null);

  const {
    listId,
    setSpaceName,
    setTasksLength,
    setSpaceId,
    setListId,
    setListName,
  } = useData();

  const { userId } = useUser();

  const {
    data: lists,
    isLoading: loadingLists,
    error: listsError,
  } = useListQuery();

  const { workspaceId } = useGetCurrentWorkspace();

  useEffect(() => {
    setActiveList(listId);
  }, [listId]);

  // const { data: tasks } = useQuery({
  //   queryKey: ["tasks", projectId],
  //   queryFn: () => getTasks(userId, spaceId, listId),
  //   enabled: !!listId,
  // }); TODO: Uncomment when implementing new tasks

  const handleWorkspaceClick = (spaceId: string, spaceName: string) => {
    if (activeSpace === spaceId) {
      setActiveSpace(null);

      router.push(`/${userId}/o/${spaceId}`);
    } else {
      setActiveSpace(spaceId);
      setSpaceId(spaceId);
      setSpaceName(spaceName);
      localStorage.setItem("spaceId", spaceId);
    }
  };

  console.log("lists", lists);

  const handleListClick = (listId: string, listName: string) => {
    // Changed from handleListHover to handleListClick
    setActiveList((prev) => (prev === listId ? null : listId));
    setListId(listId);
    setListName(listName);
    localStorage.setItem("listId", listId);

    router.push(`/${workspaceId}/l/${listId}`);
  };

  return (
    <div className="flex w-full flex-col">
      {spaces.length > 0 ? (
        spaces.map((space) => (
          <SpaceElements
            key={space.id}
            space={space}
            isActive={activeSpace === space.id}
            onClick={handleWorkspaceClick}
            width={width}
            setSpaceName={setSpaceName}
          >
            {activeSpace === space.id && (
              <div className="ml-4 mt-2">
                {loadingLists ? (
                  <p>Loading lists...</p>
                ) : listsError ? (
                  <p className="text-red-500">Error while downloading lists.</p>
                ) : lists && lists.length > 0 ? (
                  lists.map((list) => (
                    <ListElement
                      key={list.id}
                      list={list}
                      isActive={activeList === list.id}
                      onClick={handleListClick} // Changed from onMouseEnter to onClick
                      width={width}
                      setTasksLength={setTasksLength}
                      tasks={[]}
                    />
                  ))
                ) : (
                  <p className="text-sm text-gray-500">
                    No lists in this space. Create a <u>Folder</u>, <u>List</u>{" "}
                    or <u>Doc</u>
                  </p>
                )}
              </div>
            )}
          </SpaceElements>
        ))
      ) : (
        <p className="text-gray-500">No space to display.</p>
      )}
    </div>
  );
};

export default SpaceButtons;
