import Icon from '@/app/(dashboard)/ui/Icon';
import { Icons } from '@/icons/icons';
import React from 'react';

const CoverBtn = () => {
  return (
    <button className="text-lg ml-4 hover:bg-[#3c414a] p-2 rounded-md">
      <Icon icon={<Icons.CiImageOn />} />
    </button>
  );
};

export default CoverBtn;
