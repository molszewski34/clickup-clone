import Icon from '@/app/(dashboard)/ui/Icon';
import { Icons } from '@/icons/icons';
import React from 'react';

const Breadcrumbs = () => {
  return (
    <div className="flex items-center space-x-2 text-sm">
      <button className="flex items-center gap-2 ">
        <Icon className="bg-blue-400 rounded-sm" icon={<Icons.TeamIcon />} />
        <p className="hover:bg-[#3c414a] px-1 py-[3px] rounded-sm">
          Team Space
        </p>
      </button>
      <button className="text-gray-500 ">/</button>
      <button className="hover:bg-[#3c414a] px-1 py-[3px] rounded-md">
        Projects
      </button>
      <button className="text-gray-500">/</button>
      <button className="hover:bg-[#3c414a] px-1 py-[3px] rounded-md">
        Front-end
      </button>
    </div>
  );
};

export default Breadcrumbs;
