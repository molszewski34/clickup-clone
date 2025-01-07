import UsersList from "@/app/(dashboard)/[id]/l/[projectId]/components/UsersList";
import React, { useState } from "react";

const AddAssignee = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <span
        className="cursor-pointer"
        onClick={() => {
          setIsOpen(!isOpen);
        }}>
        Add Assignee
      </span>
      {isOpen && <UsersList />}
    </>
  );
};

export default AddAssignee;
