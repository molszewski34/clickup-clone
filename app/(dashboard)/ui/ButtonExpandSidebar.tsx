import React, { useState } from 'react';
import { Icons } from '@/icons/icons';
import Icon from './Icon';
const ButtonExpandSidebar = () => {
  const [expand, setExpand] = useState(false);
  return (
    <button className="" onClick={() => setExpand(!expand)}>
      <Icon className="iconDarkMode" icon={<Icons.SidebarExpandIcon />} />
    </button>
  );
};

export default ButtonExpandSidebar;
