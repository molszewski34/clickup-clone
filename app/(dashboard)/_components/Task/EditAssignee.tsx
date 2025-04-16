import { Dispatch, SetStateAction, useRef, useState } from "react";
import { Input } from "@/components/Input";
import { Icons } from "@/icons/icons";
import { UsersList } from "@/app/(dashboard)/[id]/l/[projectId]/components/UsersList";
import { TaskRowEditableCell } from "./TaskTableRow";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";

type EditAssigneeProps = {
  setTaskRowEditableCell?: Dispatch<SetStateAction<TaskRowEditableCell>>;
  setOpenUserList?: Dispatch<SetStateAction<boolean>>;
};

export const EditAssignee = ({
  setTaskRowEditableCell,
  setOpenUserList,
}: EditAssigneeProps) => {
  const [filterUser, setUserFilter] = useState("");
  const assigneeRef = useRef(null);

  useOnClickOutside(assigneeRef, () => {
    if (setTaskRowEditableCell) setTaskRowEditableCell("");
    else if (setOpenUserList) setOpenUserList(false);
    setUserFilter("");
  });
  return (
    <div className="pointer-events-auto z-10">
      <div
        className="bg-white rounded w-[280px] shadow-customPopupTableShadow divide-y"
        ref={assigneeRef}
      >
        <Input
          id="search-user"
          value={filterUser}
          onChange={(e) => setUserFilter(e.target.value)}
          placeholder="Search or enter email..."
          className="text-gray-800 border-none placeholder:text-gray-800"
          type="text"
        >
          <Icons.SearchIcon size={13} className="text-gray-700 ml-1" />
        </Input>
        <UsersList filterUser={filterUser} />
      </div>
    </div>
  );
};
