import Icon from '@/app/(dashboard)/ui/Icon';
import { Icons } from '@/icons/icons';
import React from 'react';

const iconData = [
  { icon: <Icons.IoIosMore />, className: 'text-xl' },
  { icon: <Icons.Star />, className: 'text-lg' },
  { icon: <Icons.PiArrowLineDownRight />, className: 'text-lg' },
  { icon: <Icons.CodeSquare />, className: 'text-[21px]' },
  { icon: <Icons.Close />, className: 'text-2xl' },
];

const RightSectionBtns = () => {
  return (
    <div className="flex items-center gap-3">
      {iconData.map((data, index) => (
        <Icon
          key={index}
          className={`${data.className} hover:bg-gray-600 p-[6px] rounded`}
          icon={data.icon}
        />
      ))}
    </div>
  );
};

export default RightSectionBtns;
