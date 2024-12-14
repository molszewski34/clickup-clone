"use client";
import React, { useState } from "react";
import SubBarNavTop from "./SubBarNavTop";
import SubBarNavHeader from "./SubBarNavHeader";
import SubBarNavFilters from "./SubBarNavFilters";

const ViewsBarContainer = () => {
  const [subBarNavHeaderActive, setSubBarNavHeaderActive] = useState(false);
  const [subBarNavFilterActive, setSubBarNavFilterActive] = useState(false);
  return (
    <div>
      <SubBarNavHeader
        spaceName="Team space"
        subBarNavHeaderActive={subBarNavHeaderActive}
      />
      <SubBarNavTop
        subBarNavHeaderActive={subBarNavHeaderActive}
        setSubBarNavHeaderActive={setSubBarNavHeaderActive}
        setSubBarNavFilterActive={setSubBarNavFilterActive}
      />
      <SubBarNavFilters
        subBarNavFilterActive={subBarNavFilterActive}
        subBarNavHeaderActive={subBarNavHeaderActive}
      />
    </div>
  );
};

export default ViewsBarContainer;
