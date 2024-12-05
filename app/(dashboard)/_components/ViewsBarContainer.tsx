import React, { useState } from "react";
import SubBarNavTop from "./SubBarNavTop";
import SubBarNavHeader from "./SubBarNavHeader";
import SubBarNavFilters from "./SubBarNavFilters";

const ViewsBarContainer = () => {
  const [subBarNavHeaderActive, setSubBarNavHeaderActive] = useState(false);

  return (
    <div>
      <SubBarNavHeader
        spaceName="Team space"
        subBarNavHeaderActive={subBarNavHeaderActive}
      />
      <SubBarNavTop
        subBarNavHeaderActive={subBarNavHeaderActive}
        setSubBarNavHeaderActive={setSubBarNavHeaderActive}
      />
      <SubBarNavFilters subBarNavHeaderActive={subBarNavHeaderActive} />
    </div>
  );
};

export default ViewsBarContainer;
