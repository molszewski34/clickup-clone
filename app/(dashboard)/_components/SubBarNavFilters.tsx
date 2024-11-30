import React from "react";

type Props = {
  subBarNavHeaderActive: boolean;
};

const SubBarNavFilters = ({ subBarNavHeaderActive }: Props) => {
  return (
    <div className="flex h-10 gap-1 items-center">
      <div className="flex items-center gap-1"></div>
      {/* secend half */}
      <div></div>
    </div>
  );
};

export default SubBarNavFilters;
