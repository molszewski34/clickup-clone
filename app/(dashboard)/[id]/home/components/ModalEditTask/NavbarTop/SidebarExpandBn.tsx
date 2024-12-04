import Icon from '@/app/(dashboard)/ui/Icon';
import { Icons } from '@/icons/icons';
import React from 'react';

const SidebarExpandBn = () => {
  return (
    <div className="relative flex items-center justify-center w-5 h-5  rounded-full text-gray-400 text-sm  font-bold ">
      <Icon icon={<Icons.SidebarExpandIcon />} />
    </div>
  );
};

export default SidebarExpandBn;
